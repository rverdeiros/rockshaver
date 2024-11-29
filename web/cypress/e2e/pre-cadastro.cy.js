import preRegPage from '../support/pages/pre-reg.page'

describe('Pré-Cadastro', () => {

  it('Deve realizar o pre-cadastro do cliente', () => {

    preRegPage.go()
    preRegPage.fillForm("Fernando Papito", 'fernando@msn.com')
    preRegPage.submit()
    preRegPage.verifyPreReg('Fernando', 'fernando@msn.com')
    
  })

  it('Deve validar os campos obrigatórios', () => {

    preRegPage.go()
    preRegPage.submit()
    preRegPage.alertMsg('Nome Completo', 'O campo nome é obrigatório.')
    preRegPage.alertMsg('E-mail', 'O campo e-mail é obrigatório.')

  })

  it('Não deve fazer o pré-cadastro apenas com o primeiro nome', () => {

    preRegPage.go()
    preRegPage.fillForm("Fernando", 'fernando@msn.com')
    preRegPage.submit()
    preRegPage.alertMsg('Nome Completo', 'Informe seu nome completo.')

  })

  it('Não deve fazer o pré-cadastro com o email incompleto', () => {

    preRegPage.go()
    preRegPage.fillForm("Fernando Papito", 'www.teste.com.br')
    preRegPage.submit()
    preRegPage.alertMsg('E-mail', 'O e-mail inserido é inválido.')

  })

})