/// <reference types="cypress" />

import InventoryPage from "../../page-objects/pages/InventoryPage";

describe("Tests for the Inventory page", () => {
  beforeEach(() => {
    InventoryPage.open();
  });

  it("Check, that the UI elements are exist on the page", () => {
    InventoryPage.burgerMenuIcon.should("be.visible");
    InventoryPage.shoppingCartIcon.should("be.visible");
    InventoryPage.sortingDropdown.should("be.visible");
  });

  it("Check that sorting dropdown contains 4 options", () => {
    InventoryPage.sortingDropdownAllPicklistValues.should("have.length", 4);
  });

  it("Check that user redirects to the Cart page, after clicking cart icon", () => {
    InventoryPage.redirectToTheCart();
  });

  it("Check that user is redirects to the Item Page, after clicking on an item", () => {
    InventoryPage.clickItemByName("Sauce Labs Backpack");
  });
});
