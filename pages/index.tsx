import * as React from "react";
import AddItem from "../components/AddItem";
import ShoppingCart from "../components/ShoppingCart";
import { useSnapshot } from "valtio";
import { addProductState, AppPage, resetAddProductState, state } from "../lib/state-management";
import Homepage from "../components/Homepage";
import Header from "../components/Header";

function Index() {
  if (addProductState.product !== undefined) {
    resetAddProductState();
  }
  const { isAdmin } = useSnapshot(state);

  return <Homepage />
}

export default Index;