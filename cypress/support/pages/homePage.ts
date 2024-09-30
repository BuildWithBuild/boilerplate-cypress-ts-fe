const randomEmail = Math.random().toString(36) + "@test.com"

class HomePage {

      elements = { 
        signUpLink: () => cy.get('.shop-menu > .nav > :nth-child(4) > a'),
        nameTxt: () => cy.get('[data-qa="signup-name"]'),
        signUpEmailTxt: () => cy.get('[data-qa="signup-email"]'),
        signUpBtn: () => cy.get('[data-qa="signup-button"]'),
        loggedUserInfo: () => cy.get(':nth-child(10) > a'),
        randomItems: (randomNumber: number) => cy.get(`.features_items > :nth-child(${randomNumber}) > .product-image-wrapper > .single-products > .productinfo > .btn`),
        continueShoppingBtn: () => cy.get('.modal-footer > .btn')
    }
    clickOnSignUpLink() {
        this.elements.signUpLink().click()
    }
    typeNameTxt() {
        this.elements.nameTxt().type("Michael")
    }
    typeEmailTxt() {
        this.elements.signUpEmailTxt().type(randomEmail)
    }
    clickSignUpBtn() {
        this.elements.signUpBtn().click()
    }
    loggedUserInfo() {
        this.elements.loggedUserInfo().contains("Logged in as ")
    }
    randomItems(randomNumber:number) {
        this.elements.randomItems(randomNumber).click()
    }
    continueShoppingBtn() {
        this.elements.continueShoppingBtn().click()
    }
}
export const homePage = new HomePage()


