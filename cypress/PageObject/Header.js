class Header {
    //elements
    getLogo = () => cy.get('a[href="/ref=nav_logo"]');

    //methods
    clickLogo(){
        this.getLogo().click();           
    }
}
export default Header