class Products {
elements = {
 productsLink: () => cy.get('.shop-menu > .nav > :nth-child(2) > a'),
 randomProduct: (randomInt:number) => cy.get(`:nth-child(${randomInt}) > .product-image-wrapper > .single-products > .productinfo > .btn`),
 product: () => cy.get(`:nth-child(5) > .product-image-wrapper > .single-products > .productinfo > .btn`),
 womenExpand: () => cy.get(':nth-child(1) > .panel-heading > .panel-title > a > .badge'),
 itemList: () => cy.get('#Women > .panel-body > ul > :nth-child(1)'),
}
productsLinkClick() {
    this.elements.productsLink().click()
}
randomProductClick(randomInt:number) {
    this.elements.randomProduct(randomInt).click()
}
expandClick(){
    this.elements.womenExpand().click()
}
itemListClick(){
    this.elements.itemList().click()
}
productClick(){
    this.elements.product().click()
}
}

export const products = new Products()