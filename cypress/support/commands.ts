/// <reference types="cypress" />

import cypress from "cypress"
import { homePage } from "./pages/homePage";
import { signUpPage } from "./pages/signUpPage";
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
declare global{
    namespace Cypress{
        interface Chainable{
            signUp(): Chainable<void>;
            logIn(): Chainable<void>;
            invalidLogin(): Chainable<void>;
            sumTotal(): Chainable<void>
        }
    }
}
Cypress.Commands.add('signUp', () => {
    homePage.clickOnSignUpLink();
    homePage.typeNameTxt();
    homePage.typeEmailTxt();
});
Cypress.Commands.add('logIn', () => {
    homePage.clickOnSignUpLink();
    signUpPage.emailTxt();
    signUpPage.passLogInTxt();
    signUpPage.clickLogInBtn();
})
Cypress.Commands.add('invalidLogin', () => {
    homePage.clickOnSignUpLink();
    signUpPage.invalidEmailTxt();
    signUpPage.passLogInTxt();
    signUpPage.clickLogInBtn();
})
Cypress.Commands.add('sumTotal', () => {
    let totalSum = 0;
    cy.get('p.cart_total_price').each(($el, index, $list) => {
        if (index !== $list.length - 1) {
            const priceText = $el.text();
            const rawPrice = priceText.replace(/[^\d-]/g, '');
            const price = parseInt(rawPrice);
            totalSum += price;
        }
    }).then(() => {
        cy.log('Total Sum:', totalSum);
        expect(totalSum).to.be.greaterThan(0); // Adjust the assertion as needed
    });
})

