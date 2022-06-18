
import LoginPage from '../pageObjects/LoginPage'
import HomePage from '../pageObjects/HomePage'

const loginPage = new LoginPage
const homePage = new HomePage


Given(/^que estou na tela de Login$/, () => {
	loginPage.acessarSite();
	loginPage.validarPaginaLogin();
});

When(/^submeto o login com usuário "([^"]*)", senha "([^"]*)"$/, (usuario,senha) => {
	loginPage.clicarSignTaskit();
	loginPage.digitarUsuario(usuario);
	loginPage.digitarPassword(senha);
	loginPage.clicarSignLogin();
});

Then(/^devo logar no sistema Taskit$/, () => {
	homePage.validarAcessoAPaginaTaskit();
});

Then(/^o sistema deve exibir a mensagem "([^"]*)"$/, (mensagem) => {
	loginPage.validarExibicaoDoToast(mensagem);
});































