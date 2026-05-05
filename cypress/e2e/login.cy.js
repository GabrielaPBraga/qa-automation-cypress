describe('Login de usuário', () => {
  it('Deve realizar login com credenciais válidas e acessar a página de produtos', () => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.url().should('include', 'inventory.html')
    cy.contains('Products').should('be.visible')
  })
})