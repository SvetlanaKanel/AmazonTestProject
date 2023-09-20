class Header {
    //elements
    getLogo = () => cy.get('a[href="/ref=nav_logo"]');
    getLocation = () => cy.get('#nav-global-location-popover-link');
    getAllDropdown = () => cy.get('#nav-search-label-id');

    //methods
    clickLogo(){
        this.getLogo().click();           
    }
    
    clickLocation() {
        this.getLocation().click();      
    }
}
export default Header