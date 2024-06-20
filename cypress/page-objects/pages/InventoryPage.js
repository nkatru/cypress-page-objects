/// <reference types="cypress" />

import BasePage from "./BasePage";
import LoginPage from "./LoginPage";
import creds from "../../fixtures/creds.json";

class InventoryPage extends BasePage {
  get allItems() {
    return cy.get('[data-test="inventory-item"]');
  }

  get allPrices() {
    return cy.get('[data-test="inventory-item-price"]');
  }

  get sortingDropdownAllPicklistValues() {
    return cy.get("option[value]");
  }

  get sortingDropdown() {
    return cy.get('[data-test="product-sort-container"]');
  }

  get pageTitle() {
    return cy.get('[data-test="title"]').contains("Products");
  }

  get burgerMenuIcon() {
    return cy.get("#react-burger-menu-btn");
  }

  get shoppingCartIcon() {
    return cy.get(".shopping_cart_container");
  }

  get titleFromShoppingCartPage() {
    return cy.get(".title");
  }

  open() {
    super.open("");
    LoginPage.login(
      creds.userNames.correctUser,
      creds.passwords.correctPassword
    );
    this.pageTitle.should("be.visible");
  }

  redirectToTheCart() {
    cy.get(".shopping_cart_container").click();
    this.titleFromShoppingCartPage.should("contain", "Your Cart");
  }

  clickItemByName(name) {
    cy.contains(".inventory_item_name", name).click();
  }
}

export default new InventoryPage();
