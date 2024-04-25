const { faker } = require('@faker-js/faker/locale/fr');

var peoples = [
    {
        firstName: "Lucas",
        lastName: "BERGER",
        email: "lucas.brg7@gmail.com"
}

]

for (var i = 0; i < 25; i++) {
    //var sex_people = 
    var firstName = faker.person.firstName('male')
    var lastName = faker.person.lastName('male')
    peoples.push({
        firstName,
        lastName,
        email: faker.internet.email({firstName, lastName})
    })
}

console.log(peoples)