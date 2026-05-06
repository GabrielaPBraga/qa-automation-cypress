import loginPage from '../pages/loginPage'

describe('Login', () => {

  it('Deve fazer login com usuário válido', () => {
    cy.fixture('user').then((user) => {

      loginPage.acessar()
      loginPage.preencherUsuario(user.standardUser.username)
      loginPage.preencherSenha(user.standardUser.password)
      loginPage.clicarLogin()

      cy.url().should('include', 'inventory.html')

    })
  })

  it('Login com usuário bloqueado', () => {
    cy.fixture('user').then((user) => {

      loginPage.acessar()
      loginPage.preencherUsuario(user.lockedUser.username)
      loginPage.preencherSenha(user.lockedUser.password)
      loginPage.clicarLogin()

      loginPage.validarErro('Sorry, this user has been locked out')

    })
  })

})