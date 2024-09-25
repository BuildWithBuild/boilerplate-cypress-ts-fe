class CartPage {
    elements = {
        cartLink: () => cy.get('.shop-menu > .nav > :nth-child(3) > a'),
        cartInfo: () => cy.get('#cart_info'),
        proceedBtn: () => cy.get('.col-sm-6 > .btn'),
        placeOrderBtn: () => cy.get(':nth-child(7) > .btn'),
        cartColumn: () => cy.get('p.cart_total_price'),

    }

    cartLinkClick() {
        this.elements.cartLink().click()
    }
    cartVisible() {
        this.elements.cartInfo().should('be.visible')
    }
    proceedBtnClick() {
        this.elements.proceedBtn().click()
    }
    placeOrderBtnClick() {
        this.elements.placeOrderBtn().click()
    }
    cartColumnVisible() {
        this.elements.cartColumn().should('be.visible')
    }
}

export const cartpage = new CartPage()