const { faker } = require('@faker-js/faker/locale/fr');

var peoples = []
var tab_vieux = []
var tab_jeune = []
var tab_female = []
var tab_male = []
var nb_element = 25
for (var i = 0; i < nb_element; i++) 
{
    var sex_people = faker.person.sexType()
    var firstName = faker.person.firstName(sex_people)
    var lastName = faker.person.lastName(sex_people)
    var age = getRandomIntInclusive(18, 65)
    
    peoples.push(
        {
        firstName,
        lastName,
        gender: sex_people,
        age: age
        })

    if (peoples[i].age > 45)
        tab_vieux.push(peoples[i])
    else tab_jeune.push(peoples[i])

    if (peoples[i].gender == "female") {
        tab_female.push(peoples[i])
    }
    else tab_male.push(peoples[i])
}

function getRandomIntInclusive(min, max)

    {    
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }



console.log("Plus de 45 ans :")

for (var i = 0; i < tab_vieux.length; i++)

{
    if (tab_vieux[i].gender === "female") 
    {
        tab_vieux[i].gender = "Femme"
    }
    else tab_vieux[i].gender = "Homme"
    console.log(`${tab_vieux[i].firstName} - ${tab_vieux[i].lastName} - ${tab_vieux[i].gender} - ${tab_vieux[i].age} ans`)
}

console.log("\nVoici les femmes")
for (var i = 0; i < tab_female.length; i++) {
    if (tab_female[i].gender === "female") 
    {
        tab_female[i].gender = "Femme"
    }
    console.log(`${tab_female[i].firstName} - ${tab_female[i].lastName} - ${tab_female[i].gender} - ${tab_female[i].age} ans`)
}

console.log("\nVoici les hommes")
for (var i = 0; i < tab_male.length; i++) {
    if (tab_male[i].gender === "male") 
    {
        tab_male[i].gender = "Homme"
    }
    
    console.log(`${tab_male[i].firstName} - ${tab_male[i].lastName} - ${tab_male[i].gender} - ${tab_male[i].age} ans`)
}
