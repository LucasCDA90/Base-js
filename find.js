var prompt = require('prompt');

var people = [{           // Recursivité en Javascript "parent-enfant"
    firstName: "Edouard",
    lastName: "Bernier",
    children: [{
        firstName: "Jean",
        lastName: "Bernier",
        children: [{
            firstName: "Junior",
            lastName: "Bernier",
            children: [{
                firstName: "Jordan",
                lastName: "Bernier"
            },
            {
                firstName: "Luc",
                lastName: "Bernier"
            }]
        }]
    },
    {
        firstName: "Sacha",
        lastName: "Bernier",
    },
    {
        firstName: "Laurent",
        lastName: "Bernier",
    },
    {
        firstName: "Raphael",
        lastName: "Bernier",
    }]
},
{
    firstName: "Jean",
    lastName: "Luc",
    children: [{
        firstName: "Richard",
        lastName: "Luc",
        children: [{
            firstName: "Roméo",
            lastName: "Luc"
        }]
    }]
}]
