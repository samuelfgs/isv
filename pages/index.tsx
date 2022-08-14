import * as React from "react";
import AddItem from "../components/AddItem";
import ShoppingCart from "../components/ShoppingCart";
import { useSnapshot } from "valtio";
import { addProductState, AppPage, resetAddProductState, state } from "../lib/state-management";
import Homepage from "../components/Homepage";

function Index() {
  if (addProductState.product !== undefined) {
    resetAddProductState();
  }

  return <Homepage />
    // ) : appPage === AppPage.addItem ? (
    //   <AddItem entryId={productId} key={cart.lineItems.length} />
    // ) : appPage === AppPage.checkout ? (
    //   <ShoppingCart />
    // ) : null
}

export default Index;