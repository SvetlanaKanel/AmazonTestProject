class Header {
    //elements
    getLogo = () => cy.get('a[href="/ref=nav_logo"]');
    getLocation = () => cy.get('#nav-global-location-popover-link');

    //methods
    clickLogo(){
        this.getLogo().click();           
    }
}
export default Header