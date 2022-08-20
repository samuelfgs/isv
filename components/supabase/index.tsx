import { usePlasmicQueryData } from "@plasmicapp/query";
import { DataProvider, registerComponent, PlasmicCanvasContext } from '@plasmicapp/host';
import React from 'react';
import qs from "qs";
import { FilterOperator } from "./types";

export interface useSelectParams {
  columns?: string,
  order?: string,
  filter?: {
    column: string,
    operator: FilterOperator,
    value: any,
  }
};
export class Supabase {

  static useSelect(table: string, params?: useSelectParams) {
    const { columns, order, filter } = params ?? {};
    const key = JSON.stringify({table, columns, order, filter});
    return usePlasmicQueryData(key, async () => {
      const params = {
        ...(columns ? { columns } : {}),
        ...(order ? { order } : {}),
        ...(filter ? { filter } : {})
      }
      return await (await fetch(`/api/supabase/${table}?${qs.stringify(params)}`)).json()
    }
    );
  }

  static async select(table: string, params?: useSelectParams) {
    const { columns, order, filter } = params ?? {};
    const params2 = {
      ...(columns ? { columns } : {}),
      ...(order ? { order } : {}),
      ...(filter ? { filter } : {})
    }
    return await (await fetch(`/api/supabase/${table}?${qs.stringify(params2)}`)).json()
  }

  static async insert(table: string, data: any) {
    return await fetch(`/api/supabase/${table}`, {
      method: "POST",
      body: JSON.stringify(data)
    })
  }
}

interface SupabaseFetcherProps extends useSelectParams {
  table: string;
  queryName: string;
  children: React.ReactNode;
}

export const SupabaseFetcher = (props: SupabaseFetcherProps) => {
  const { table, columns, order, queryName, children, filter } = props;

  const { data, error, isLoading } = Supabase.useSelect(table, {columns, order, filter});
  const inStudio = !!React.useContext(PlasmicCanvasContext);
  
  if (error) {
    throw error;
  }

  if (isLoading) {
    return inStudio ? <p>Loading...</p> : null;
  }

  return <DataProvider
    name={queryName ?? "supabase"}
    data={data}
  >
    {children}
  </DataProvider>
}

export const registerAll = () => {
  registerComponent(SupabaseFetcher, {
    name: "SupabaseFetcher",
    props: {
      queryName: "string",
      table: "string",
      select: "string",
      order: "string",
      children: "slot",
    },
    providesData: true,
    importPath: "./components/code-components/Supabase"
  });
}

