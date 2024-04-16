var data = [
    {   type: "Santé",
        description: ["Consultation ORL","Consultation hopital"],
        price_max: 1000,
        price_min: 200
    },

    {   type: "Sortie",
        description: ["Sortie cinéma","Sortie acrobranche"],
        price_max: 1000,
        price_min: 200
    },

    {   type: "Loisirs",
        description: ["Match de foot","Match de handball","Match de basket"],
        price_max: 1000,
        price_min: 200
    },

    {   type: "Loyer",
        description: ["Appartement","Maison","Electricité"],
        price_max: 1000,
        price_min: 200
    },

    {   type: "Voiture",
        description: ["Pneu","Essence","Moteur"],
        price_max: 1000,
        price_min: 200
    },

    {   type: "Frais",
        description: ["Frais banquaires","Frais voiture","Frais de port"],
        price_max: 1000,
        price_min: 200
    },
]


var wallet = 
{
    depenses: [],
}

min = 713251378
max = 1713251378

for (var i=0; i<1000; i++) {

    var object_type = data [ Math.round( Math.random()* ((data.length-1) - 0) +0) ]                                                      //Nombre aléatoire entre 0 et la taille du tableau
    var object_description = object_type.description [Math.round(Math.random()* ((object_type.description.length - 1) - 0) + 0)]         //Selectionne une description en fonction du type sorti aléatoirement

    wallet.depenses.push({
        date: Math.round(Math.random()*(max - min) + min),
        type: object_type.type,
        price: Math.round((Math.random() * object_type.price_max - object_type.price_min) + object_type.price_min),
        description: object_description
    })
}

console.log(wallet.depenses)
console.log("Taille tableau", wallet.depenses.length)