import loginPage from '../pages/loginPage'
import produtosPage from '../pages/produtosPage'

describe('Produtos', () => {

  beforeEach(() => {
    cy.fixture('user').then((user) => {

      loginPage.acessar()
      loginPage.preencherUsuario(user.standardUser.username)
      loginPage.preencherSenha(user.standardUser.password)
      loginPage.clicarLogin()

    })
  })

  it('Deve acessar a página de produtos', () => {
    produtosPage.validarPaginaProdutos()
  })

  it('Deve adicionar produto ao carrinho', () => {
    produtosPage.adicionarProduto('Sauce Labs Backpack')
    produtosPage.validarCarrinhoComItens(1)
  })

})