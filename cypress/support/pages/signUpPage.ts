class SignUpPage {
    elements = {
        radioMrBtn: () => cy.get(':nth-child(3) > .top > [data-qa="title"]'),
        passwordTxt: () => cy.get('[data-qa="password"]'),
        dayDropDown: () => cy.get('[data-qa="days"]'),
        monthDropDown: () => cy.get('[data-qa="months"]'),
        yearDropDown: () => cy.get('[data-qa="years"]'),
        nameTxt: () => cy.get('[data-qa="first_name"]'),
        lastNameTxt: () => cy.get('[data-qa="last_name"]'),
        companyTxt: () => cy.get('[data-qa="company"]'),
        addressTxt: () => cy.get('[data-qa="address"]'),
        address2Txt: () => cy.get('[data-qa="address2"]'),
        countryDropDown: () => cy.get('[data-qa="country"]'),
        stateTxt: () => cy.get('[data-qa="state"]'),
        cityTxt: () => cy.get('[data-qa="city"]'),
        zipcodeTxt: () => cy.get('[data-qa="zipcode"]'),
        mobileNumberTxt: () => cy.get('[data-qa="mobile_number"]'),
        createAccBtn: () => cy.get('[data-qa="create-account"]'),
        emailTxt: () => cy.get('[data-qa="login-email"]'),
        passLogInTxt: () => cy.get('[data-qa="login-password"]'),
        logInBtn: () => cy.get('[data-qa="login-button"]'),
        errorMessage: () => cy.get('.login-form > form > p')
    }

    clickMrBtn() {
        this.elements.radioMrBtn().click()
    }
    passwordTxt() {
        this.elements.passwordTxt().type("test")
    }
    dayDropDown() {
        this.elements.dayDropDown().select(2)
    }
    monthDropDown() {
        this.elements.monthDropDown().select(3)
    }
    yearDropDown() {
        this.elements.yearDropDown().select(20)
    }
    nameTxt() {
        this.elements.nameTxt().type("Michael")
    }
    lastNameTxt() {
        this.elements.lastNameTxt().type("Scott")
    }
    companyTxt() {
        this.elements.companyTxt().type("Dunder Mifflin")
    }
    addressTxt() {
        this.elements.addressTxt().type("123 test dr")
    }
    address2Txt() {
        this.elements.address2Txt().type("address 2")
    }
    countryDropDown() {
        this.elements.countryDropDown().select(1)
    }
    stateTxt() {
        this.elements.stateTxt().type("Florida")
    }
    cityTxt() {
        this.elements.cityTxt().type("Miami")
    }
    zipcodeTxt() {
        this.elements.zipcodeTxt().type("33101")
    }
    mobileNumberTxt() {
        this.elements.mobileNumberTxt().type("85630054")
    }
    createAccBtn() {
        this.elements.createAccBtn().click()
    }
    createAccBtnView() {
        this.elements.createAccBtn()
    }
    emailTxt() {
        this.elements.emailTxt().type("0.e552u6x736@test.com ")
    }
    invalidEmailTxt() {
        this.elements.emailTxt().type("6x736@test.com ")
    }
    passLogInTxt() {
        this.elements.passLogInTxt().type("test")
    }
    clickLogInBtn() {
        this.elements.logInBtn().click()
    }
    errorMessage() {
        this.elements.errorMessage().contains("Your email or password is incorrect!")
    }
}

export const signUpPage = new SignUpPage()