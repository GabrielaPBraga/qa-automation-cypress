class CarrinhoPage {

  acessarCarrinho() {
    cy.get('.shopping_cart_link').click()
  }

  validarProdutoNoCarrinho(nomeProduto) {
    cy.contains('.inventory_item_name', nomeProduto)
      .should('be.visible')
  }

  clicarCheckout() {
    cy.get('[data-test="checkout"]').click()
  }

}

export default new CarrinhoPage()