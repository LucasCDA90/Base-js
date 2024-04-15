var tableau = [
    {                                                   //Ajout d'un objet, toujours entre crochets
        firstName: "Lucas",
        lastName: "Berger",
        age: 24,
        dateStart: 1999,
        lieu_de_naissance: "Vesoul"
    },                                                  //Ajout d'un objet, toujours entre crochets

    {                                                   //Ajout d'un objet, toujours entre crochets
        firstName: "Toinon",
        lastName: "Jsp",
        age: 21,
        dateStart: 2003,
        lieu_de_naissance: "Belfort"
    }                                                   //Ajout d'un objet, toujours entre accolades
]

for (var i=0; i<100; i++) {
tableau.push(                                           //Ajout d'une nouvelle personne, nouvel objet
    {
        firstName: "Louis"+i,
        lastName: "Jspjsp"+i,
        age: 23+i,
        dateStart: 2001,
        lieu_de_naissance: "Montbéliard"
    }
)
}



    //console.log("Prénom :", tableau[0].firstName)
    //console.log("Nom :", tableau[0].lastName)
    //console.log("Date de naissance :", tableau[0].age)
    //console.log("Lieu de naissance :", tableau[0].lieu_de_naissance)

    //console.log("\nPrénom :", tableau[1].firstName)
    //console.log("Nom :", tableau[1].lastName)
    //console.log("Date de naissance :", tableau[1].age)
    //console.log("Lieu de naissance :", tableau[1].lieu_de_naissance)

for (var i=0; i<tableau.length; i++) {
    if(tableau[i].firstName === "Louis55") 
    {                              
        console.log("Prénom :", tableau[i].firstName)
        console.log("Nom :", tableau[i].lastName)
        console.log("Date de naissance :", tableau[i].age)
        console.log("Lieu de naissance :", tableau[i].lieu_de_naissance)
        console.log(`Il est à la ${i} position(s) dans le tableau \n`)
    }
}

console.log(`Il y a ${tableau.length} personnes dans la formation`)
//console.log("\nIl y a", tableau.length, "personnes dans la formation")    //Même commande

var tableau_plus_de_50 = []
for (var i=0; i < tableau.length; i++) {
        if (tableau[i].age > 50) {
            tableau_plus_de_50.push(tableau[i])
        }
}

console.log(`J'ai ${tableau_plus_de_50.length} personnes de plus de 50 ans dans mon tableau`)

//Stockage d'un élément unisuqe avec obj
var obj_people = {}

for (var i=0; i < tableau.length; i++) {
    obj_people[tableau[i].firstName]= tableau[i]
}

console.log(obj_people["Louis55"])