class ConfirmationPage {

    elements = {
        confirmationTitle: () => cy.get('b'),
        continueBtn : () => cy.get('[data-qa="continue-button"]')
    }
    
    confirmationTitle() {
        this.elements.confirmationTitle().contains("Account Created!")
    }
    continueBtn() {
        this.elements.continueBtn().click()
    }
    
}


export const confirmationPage = new ConfirmationPage()