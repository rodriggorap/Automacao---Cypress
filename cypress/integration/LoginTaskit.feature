
Feature: Login Page

    Como usuario do perfil Operador, desejo logar no sistema Taskit para acessar a Pagina Home.

    
Background: Acessar tela de Login do sistema Taskit

    Given que estou na tela de Login

Scenario: Deve Logar no sistema Taskit

    When submeto o login com usuário "julio0001", senha "123456"
    Then devo logar no sistema Taskit


Scenario Outline: Nao deve logar no sistema

    When submeto o login com usuário "<usuario>", senha "<senha>"
    Then o sistema deve exibir a mensagem "<mensagem>"

Examples: Usuario e Senha

| usuario   | senha     | mensagem |
| julio0001 | 4321      | Maybe you brain dropped the password or login in some place! |
| julio0007 | 123456    | Maybe you brain dropped the password or login in some place! |
| julio0001 | 4321      | Maybe you brain dropped the password or login in some place! |








