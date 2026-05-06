class ProdutosPage {

  validarPaginaProdutos() {
    cy.url().should('include', 'inventory.html')
    cy.contains('Products').should('be.visible')
  }

  adicionarProduto(nomeProduto) {
    cy.contains('.inventory_item', nomeProduto)
      .contains('Add to cart')
      .click()
  }

  validarCarrinhoComItens(qtd) {
    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('contain', qtd)
  }

}

export default new ProdutosPage()