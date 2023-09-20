/// <reference types = "cypress>";

import Header from "../PageObject/Header";
import headerData from "../fixtures/headerData.json";
import LocationPopUpWindow from "../PageObject/LocationPopUpWindow";
import locationPopUpData from "../fixtures/locationPopUpData.json";

describe('Tests for Header', () => {
  const header = new Header();
  const locationPopUp = new LocationPopUpWindow();

  beforeEach(() => {
    cy.visit('https://www.amazon.com/gp/cart/view.html?ref_=nav_cart');
  })

  it('US_01.01_01 | Verify Logo is visible and clickable', () => {
    header.getLogo().should('be.visible');
    header.clickLogo();
    cy.url().should('contain', headerData.logoURL);
  })

  it('US_01.02_01 | Verify that location has a notification from requirements', () => {
    header.getLocation().should('include.text', headerData.locationText);
  })

  it('US_01.02_02 | Verifay popUp window header after clicking on location', () => {
    header.clickLocation();
    locationPopUp.getHeader().should('have.text', locationPopUpData.header);
  })

  it('US_01.03_01 | Verify that All dropdow menu is visible and has text All', () => {
    header.getAllDropdown().should('be.visible')
      .and('have.text', headerData.AllDropdownText);
  })

})