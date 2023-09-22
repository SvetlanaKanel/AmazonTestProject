class Header {
    //elements
    getLogo = () => cy.get('a[href="/ref=nav_logo"]');
    getLocation = () => cy.get('#nav-global-location-popover-link');
    getAllDropdown = () => cy.get('#nav-search-label-id');
    getAllDropdownList = () => cy.get('.nav-progressive-search-dropdown > option');
    getSearchInputField = () => cy.get('.nav-search-field input');

    //methods
    clickLogo(){
        this.getLogo().click();           
    }
    
    clickLocation() {
        this.getLocation().click();      
    }

    clickAllDropdown() {
        this.getAllDropdown().click( {force: true} );
    }
}
export default Header