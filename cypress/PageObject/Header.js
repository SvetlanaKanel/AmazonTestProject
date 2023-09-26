import BooksPage from "./BooksPage";

class Header {
    //elements
    getLogo = () => cy.get('a[href="/ref=nav_logo"]');
    getLocation = () => cy.get('#nav-global-location-popover-link');
    getDropdownLable = () => cy.get('#nav-search-label-id');
    getDropdownBox = () => cy.get('#searchDropdownBox');
    getDropdownList = () => cy.get('#searchDropdownBox > option');
    getSearchInputField = () => cy.get('.nav-search-field input');
    getBookOptionAllDropdownList = () => cy.get('[value="search-alias=stripbooks"]');
    getSearchIcon = () => cy.get('div.nav-search-submit');

    //methods
    clickLogo(){
        this.getLogo().click();           
    }
    
    clickLocation() {
        this.getLocation().click();      
    }

    clickDropdown() {
        this.getDropdownLable().click( {force: true} );
        return this;
    }

    clickBookOptionAllDropdownList () {
        this.getBookOptionAllDropdownList().click({force: true}); 
    }

    clickSearchIcon() {
        this.getSearchIcon().click();
      //  return BooksPage;
    }
  
}
export default Header