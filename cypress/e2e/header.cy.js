/// <reference types = "cypress>";

import Header from "../PageObject/Header"
import headerData from "../fixtures/headerData.json"

describe('Tests for Header', () => {
  const header = new Header();

  beforeEach(() => {
    cy.visit('https://www.amazon.com/gp/cart/view.html?ref_=nav_cart');
})

  it('US_01.01_001 | Verify Logo is visible and clickable', () => {    
    header.getLogo().should('be.visible');
    header.clickLogo();
    cy.url().should('contain', headerData.logoURL);
  })

  it.only('US_01.02_001 | Verify that location has a notification from requirements', () => {
    header.getLocation().should('include.text', headerData.locationText);
  })

})