/// <reference types="cypress" />

import InventoryPage from "../../page-objects/pages/InventoryPage";
import ItemPage from "../../page-objects/pages/ItemPage";
import "../../page-objects/pages/ItemPage";

describe("Check the scenarios for the Item Page", () => {
  beforeEach(() => {
    ItemPage.open();
    InventoryPage.clickItemByName("Sauce Labs Bike Light");
  });

  it("Verify that item have image, price, description and name", () => {
    ItemPage.itemOnPageWithAllData();
  });

  it("Add and item and then remove it", () => {
    ItemPage.addAndRemoveItem();
  });
});
