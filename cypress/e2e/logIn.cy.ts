import { homePage } from "../support/pages/homePage"
import { signUpPage } from "../support/pages/signUpPage"
import { products } from "../support/pages/productsPage";
import { cartpage } from "../support/pages/cartPage";
import { paymentPage } from "../support/pages/paymentPage";
import { paymentConfirmationPage } from "../support/pages/paymentConfirmation";

function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const rndInt = randomInt(3, 10);
const random = randomInt(4, 11)

describe("", () => {
    it.only("Valid log in", () => {
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();
        cy.clearAllCookies();
        cy.visit("");
        cy.logIn();

        homePage.randomItems(rndInt);
        homePage.continueShoppingBtn();
        products.productsLinkClick();
        products.productClick();
        homePage.continueShoppingBtn();
        products.expandClick();
        products.itemListClick();
        products.randomProductClick(random);
        homePage.continueShoppingBtn();
        cartpage.cartLinkClick();
        cartpage.cartVisible();
        cartpage.proceedBtnClick();
        cartpage.cartColumnVisible();
        cy.sumTotal();
        cartpage.placeOrderBtnClick();
        paymentPage.cardNameType();
        paymentPage.cardNumberType();
        paymentPage.cvcType();
        paymentPage.monthTxtType();
        paymentPage.yearType();
        paymentPage.payClick();
        paymentConfirmationPage.confirmationTxt();
        paymentConfirmationPage.continueBtn();
        paymentConfirmationPage.downloadBtn();
    })
    it("Invalid Login", () => {
        cy.visit("");
        cy.invalidLogin();
        signUpPage.errorMessage();
    })
})