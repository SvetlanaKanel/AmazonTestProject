/// <reference types = "cypress>";

import Header from "../PageObject/Header"
import headerData from "../fixtures/headerData.json"

describe('Tests for Header', () => {
    const header = new Header();
    
    it('US_01.01_001 | Verify Logo is visible and clickable', () => {  
        cy.visit('https://www.amazon.com/gp/cart/view.html?ref_=nav_cart');    
        header.getLogo().should('be.visible');  
        header.clickLogo();
        cy.url().should('contain', headerData.logoURL);  
      })

})