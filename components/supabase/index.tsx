import { usePlasmicQueryData } from "@plasmicapp/query";
import { DataProvider, registerComponent, PlasmicCanvasContext } from '@plasmicapp/host';
import React from 'react';


export class Supabase {

  static useSelect(table: string, select?: string, order?: string) {
    const key = JSON.stringify({table, select, order});
    return usePlasmicQueryData(key, async () => 
      await (await fetch(`/api/supabase/${table}?select=${select}&order=${order}`)).json()
    );
  }

  static async insert(table: string, data: any) {
    console.log("dale", data);
    return await fetch(`/api/supabase/${table}`, {
      method: "POST",
      body: JSON.stringify(data)
    })
  }
}

interface SupabaseFetcherProps {
  table: string;
  select: string;
  order: string;
  queryName: string;
  children: React.ReactNode;
}

export const SupabaseFetcher = (props: SupabaseFetcherProps) => {
  const { table, select, order, queryName, children } = props;

  const { data, error, isLoading } = Supabase.useSelect(table, select, order);
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

