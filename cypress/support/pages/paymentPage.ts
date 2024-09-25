class PaymentPage{ 
    elements = {
        cardNameTxt: () => cy.get('[data-qa="name-on-card"]'),
        cardNumberTxt: () => cy.get('[data-qa="card-number"]'),
        cvcTxt: () => cy.get('[data-qa="cvc"]'),
        monthTxt: () => cy.get('[data-qa="expiry-month"]'),
        yearTxt: () => cy.get('[data-qa="expiry-year"]'),
        payBtn: () => cy.get('[data-qa="pay-button"]')
    }
    cardNameType() {
        this.elements.cardNameTxt().type("Michael Scott")
    }
    cardNumberType() {
        this.elements.cardNumberTxt().type("12345")
    }
    cvcType() {
        this.elements.cvcTxt().type("1234")
    }
    monthTxtType() {
        this.elements.monthTxt().type("12")
    }
    yearType() {
        this.elements.yearTxt().type("25")
    }
    payClick() {
        this.elements.payBtn().click()
    }
}

export const paymentPage = new PaymentPage()