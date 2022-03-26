var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        
        var firstName =  faker.name.firstName();
        var lastName = faker.name.lastName();


        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whastapp: '11999999999' ,
            address: {
                postalcode: '60125070',
                street: 'Rua Nunes Valente',
                number: '1111',
                details: 'apto 1',
                district: 'Meireles',
                city_state: 'Fortaleza/CE'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg' 
        }

        return data
    }
}
