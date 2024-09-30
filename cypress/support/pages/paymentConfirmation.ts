class PaymentConfirmationPage {
    elements ={
        confirmationTxt: () => cy.get('.col-sm-9 > p'),
        downloadBtn: () => cy.get('.col-sm-9 > .btn-default'),
        continueBtn: () => cy.get('[data-qa="continue-button"]')
    }
    confirmationTxt() {
        this.elements.confirmationTxt().contains("Congratulations!")
    }
    downloadBtn() {
        this.elements.downloadBtn().should('be.visible')
    }
    continueBtn() {
        this.elements.continueBtn().should('be.visible')
    }
}

export const paymentConfirmationPage = new PaymentConfirmationPage()