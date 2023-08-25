import * as React from "react";
import AddItem from "../components/AddItem";
import ShoppingCart from "../components/ShoppingCart";
import { useSnapshot } from "valtio";
import { addProductState, AppPage, resetAddProductState, state } from "../lib/state-management";
import Homepage from "../components/Homepage";
import Header from "../components/Header";
import { GetStaticPropsContext } from "next";
import { extractPlasmicQueryData } from "@plasmicapp/prepass";
import { SWRConfig } from "swr";

function Index({ queryCache }: { queryCache?: Record<string, any> }) {
  if (addProductState.product !== undefined) {
    resetAddProductState();
  }
  const { isAdmin } = useSnapshot(state);

  return <SWRConfig
    value={{
      fallback: queryCache
    }}
  >
    <Homepage closed />
  </SWRConfig>
}

export async function getStaticProps(context: GetStaticPropsContext) {
  // Cache the necessary data fetched for the page.
  const queryCache = await extractPlasmicQueryData(
    <Index />
  );
  return {
    props: {
      queryCache,
    },
  }
}
export default Index;