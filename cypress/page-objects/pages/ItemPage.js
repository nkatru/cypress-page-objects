/// <reference types="cypress" />

import BasePage from "./BasePage";
import LoginPage from "./LoginPage";
import creds from "../../fixtures/creds.json";

class ItemPage extends BasePage {
  get backToProducts() {
    return cy.get("#back-to-products");
  }

  get imageFromPage() {
    return cy.get(".inventory_details_img");
  }

  get itemName() {
    return cy.get("[data-test = 'inventory-item-name']");
  }

  get itemDescription() {
    return cy.get("[data-test = 'inventory-item-desc']");
  }

  get addToCartButton() {
    return cy.get("#add-to-cart");
  }

  get twitterIcon() {
    return cy.get("[data-test='social-twitter']");
  }

  get facebookIcon() {
    return cy.get("[data-test='social-facebook']");
  }
  get linkedinIcon() {
    return cy.get("[data-test='social-linkedin']");
  }

  get itemPrice() {
    return cy.get('[data-test="inventory-item-price"]');
  }

  get removeButton() {
    return cy.get("#remove");
  }

  open() {
    super.open("");
    LoginPage.login(
      creds.userNames.correctUser,
      creds.passwords.correctPassword
    );
  }

  itemOnPageWithAllData() {
    this.itemName.should("be.visible");
    this.imageFromPage.should("be.visible");
    this.itemDescription.should("be.visible");
    this.itemPrice.should("be.visible");
  }

  addAndRemoveItem() {
    this.addToCartButton.click();
    this.removeButton.should("contain", "Remove");
    this.removeButton.click();
    this.addToCartButton.should("be.visible");
  }
}

export default new ItemPage();
