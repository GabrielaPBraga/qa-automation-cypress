class LoginPage {

  acessar() {
    cy.visit('https://www.saucedemo.com/')
  }

  preencherUsuario(usuario) {
    cy.get('#user-name').type(usuario)
  }

  preencherSenha(senha) {
    cy.get('#password').type(senha)
  }

  clicarLogin() {
    cy.get('#login-button').click()
  }

  validarErro(mensagem) {
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', mensagem)
  }

}

export default new LoginPage()