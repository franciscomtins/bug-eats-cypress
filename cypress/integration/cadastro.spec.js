import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'
import SignupPage from '../pages/SignupPage'


describe('Cadastro', () => {

    // before(function() {
    //     cy.log('Tudo aqui é executado uma unica vez ANTES DE TODOS os casos de testes')
    // })

    // beforeEach(function() { 
    //     cy.log('Tudo aqui é executado sempre ANTES DE CADA caso de teste')
    // })

    // after(function() {
    //     cy.log('Tudo aqui é executado uma unica vez DEPOIS DE TODOS os casos de testes')
    // })

    // afterEach(function() { 
    //     cy.log('Tudo aqui é executado sempre DEPOIS DE CADA caso de teste')
    // })

    // beforeEach(function() {
    //     cy.fixture('deliver').then((d) => {
    //         this.deliver = d
    //     })

    // })

    it('Usuário deve ser tornar um entregador', function () {

        var deliver = signupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage);

    })

    it('CPF incorreto', function () {

        var deliver = signupFactory.deliver()
        deliver.cpf = 'x00000141AA'

        signup.go();
        signup.fillForm(deliver);
        signup.submit();
        signup.alertMessageShouldBe('Oops! CPF inválido');
    })

    it('Email incorreto', function () {

        var deliver = signupFactory.deliver()
        deliver.email = 'francisco.com.br'

        signup.go();
        signup.fillForm(deliver);
        signup.submit();
        signup.alertMessageShouldBe('Oops! Email com formato inválido.');
    })

    context('Campos obrigatórios', function () {

        const messeges = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]

        before(function() {
            SignupPage.go()
            SignupPage.submit()
        })

        messeges.forEach(function(msg) {
            it(`${msg.field} é obrigatório`, function(){
                SignupPage.alertMessageShouldBe(msg.output)
            })
        })
    })

    // it('Campos obrigatórios', function () {
    //     SignupPage.go()
    //     SignupPage.submit()
    //     SignupPage.alertMessageShouldBe('É necessário informar o nome')
    //     SignupPage.alertMessageShouldBe('É necessário informar o CPF')
    //     SignupPage.alertMessageShouldBe('É necessário informar o email')
    //     SignupPage.alertMessageShouldBe('É necessário informar o CEP')
    //     SignupPage.alertMessageShouldBe('É necessário informar o número do endereço')
    //     SignupPage.alertMessageShouldBe('Selecione o método de entrega')
    //     SignupPage.alertMessageShouldBe('Adicione uma foto da sua CNH')
    // })



})