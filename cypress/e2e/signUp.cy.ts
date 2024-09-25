import { homePage } from "../support/pages/homePage"
import { signUpPage } from "../support/pages/signUpPage"
import { confirmationPage } from "../support/pages/confirmationPage"

describe("", () => {
    it('', () => {
        cy.visit("");
        cy.signUp();
        homePage.clickSignUpBtn();
        signUpPage.clickMrBtn();
        signUpPage.passwordTxt();
        signUpPage.dayDropDown();
        signUpPage.monthDropDown();
        signUpPage.yearDropDown();
        signUpPage.nameTxt();
        signUpPage.lastNameTxt();
        signUpPage.companyTxt();
        signUpPage.addressTxt();
        signUpPage.address2Txt();
        signUpPage.countryDropDown();
        signUpPage.stateTxt();
        signUpPage.cityTxt();
        signUpPage.zipcodeTxt();
        signUpPage.mobileNumberTxt();
        signUpPage.createAccBtn();
        confirmationPage.confirmationTitle();
        confirmationPage.continueBtn();
        homePage.loggedUserInfo();
    });
});
