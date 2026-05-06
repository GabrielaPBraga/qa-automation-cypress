import loginPage from '../pages/loginPage'
import produtosPage from '../pages/produtosPage'
import carrinhoPage from '../pages/carrinhoPage'
import checkoutPage from '../pages/checkoutPage'

describe('Fluxo de compra', () => {

  it('Deve realizar uma compra com sucesso', () => {

    cy.fixture('user').then((user) => {

      // 🔹 Login
      loginPage.acessar()
      loginPage.preencherUsuario(user.standardUser.username)
      loginPage.preencherSenha(user.standardUser.password)
      loginPage.clicarLogin()

      // 🔹 Validar página de produtos
      produtosPage.validarPaginaProdutos()

      // 🔹 Adicionar produto
      produtosPage.adicionarProduto('Sauce Labs Backpack')
      produtosPage.validarCarrinhoComItens(1)

      // 🔹 Ir para carrinho
      carrinhoPage.acessarCarrinho()
      carrinhoPage.validarProdutoNoCarrinho('Sauce Labs Backpack')

      // 🔹 Checkout
      carrinhoPage.clicarCheckout()
      checkoutPage.preencherDados('Gabriela', 'Braga', '12345')
      checkoutPage.continuar()

      // 🔹 Finalizar
      checkoutPage.finalizarCompra()

      // 🔹 Validação final
      checkoutPage.validarCompraRealizada()

    })

  })

})