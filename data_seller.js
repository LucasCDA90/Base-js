const { faker } = require('@faker-js/faker/locale/fr');
const { invert } = require('lodash');

var peoples = []
var society = []

// Génération de 10 user
for (i = 0; i < 10; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const username = faker.internet.userName({ firstName, lastName });
    const id = i
    const email = faker.internet.email({firstName, lastName})
    peoples.push({
        firstName,
        lastName,
        username,
        id,
        email,
        job: "director"
    })
}


let peoples_e = [...peoples]

// Génération de 10 sociétés
for (i = 0; i < 10; i++) {
    const name = faker.company.name();
    const sum_account = getRandomInt(0, 10000)
    let j = getRandomInt(0, peoples_e.length - 1)
    
    society.push({
        id: i,
        name: name,
        sum_account: sum_account,
        user_id: peoples_e[j].id
    })
    peoples_e.splice(j, 1)
    
}
console.log(society)


// Fonction nombre aléatoire
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var articles = [{
    name: faker.commerce.product(),
    price_sell: getRandomInt(1, 250),
    price_buy: (price_sell)/2,
    pourcent_benefice: price_sell-price_buy

}]
for (i = 0; i < society.length; i ++) {
    
}