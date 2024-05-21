const { faker } = require('@faker-js/faker/locale/fr');

var peoples = []
var tab_hvieux = []
var tab_hjeune = []
var tab_fvieux = []
var tab_fjeune = []

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

    if (peoples[i].gender === "male" && peoples[i].age > 45) {       
        tab_hvieux.push(peoples[i])}
    else if (peoples[i].gender === "male" && peoples[i].age <= 45){
        tab_hjeune.push(peoples[i])}
    else if (peoples[i].gender === "female" && peoples[i].age > 45){
        tab_fvieux.push(peoples[i])}
    else  {tab_fjeune.push(peoples[i])}

}

function getRandomIntInclusive(min, max)

    {    
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

console.log("\nVoici les femmes de moins de 45 ans")
for (var i = 0; i < tab_fjeune.length; i++)
    {
    console.log(`Nom : ${tab_fjeune[i].firstName}, Prénom : ${tab_fjeune[i].lastName}, Genre : ${tab_fjeune[i].gender}, Age : ${tab_fjeune[i].age}` )
    }

console.log("\nVoici les femmes de plus de 45 ans")
for (var i = 0; i < tab_fvieux.length; i++)
    {
        console.log(`Nom : ${tab_fvieux[i].firstName}, Prénom : ${tab_fvieux[i].lastName}, Genre : ${tab_fvieux[i].gender}, Age : ${tab_fvieux[i].age}` )
    }

console.log("\nVoici les hommes de plus de 45 ans")
for (var i = 0; i < tab_hvieux.length; i++)
    {
            console.log(`Nom : ${tab_hvieux[i].firstName}, Prénom : ${tab_hvieux[i].lastName}, Genre : ${tab_hvieux[i].gender}, Age : ${tab_hvieux[i].age}` )
    }

console.log("\nVoici les hommes de moins de 45 ans")
for (var i = 0; i < tab_hjeune.length; i++)
    {
        console.log(`Nom : ${tab_hjeune[i].firstName}, Prénom : ${tab_hjeune[i].lastName}, Genre : ${tab_hjeune[i].gender}, Age : ${tab_hjeune[i].age}` )
    }
    
