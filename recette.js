var data = [
    {
        type: "accompagnement",
        nom: "riz ",
        ingredients: ["riz ","eau "],
        duration: 10,
        ustensile: ["casserole "]
    },
    {
        type: "accompagnement",
        nom: "pâtes ",
        ingredients: ["pâte ","eau "],
        duration: 5,
        ustensile: ["grosse casserole "]
    },
    {
        type: "accompagnement",
        nom: "blé ",
        ingredients: ["blé ","eau "],
        duration: 12,
        ustensile: ["casserole de blé "]
    },
    {
        type: "assaisonnement",
        nom: "curry ",
        ingredients: ["épice curry "],
        duration: 1,
        ustensile: []
    },
    {
        type: "assaisonnement",
        nom: "piment ",
        ingredients: ["piment "],
        duration: 2,
        ustensile: []
    },
    {
        type: "assaisonnement",
        nom: "coco ",
        ingredients: ["lait de coco "],
        duration: 2,
        ustensile: []
    },
    {
        type: "plat",
        nom: "boeuf ",
        ingredients: ["viande de boeuf ","huile "],
        duration: 9,
        ustensile: ["poele "]
    },
    {
        type: "plat",
        nom: "porc ",
        ingredients: ["viande de porc ","huile "],
        duration: 9,
        ustensile: ["poele "]
    },
    {
        type: "plat",
        nom: "poulet ",
        ingredients: ["viande de poulet ","huile "],
        duration: 7,
        ustensile: ["poele "]
    },
]



var tableau_recette =
{
    recette : []
}


for (var i=0; i<data.length; i++)


{
    var filtre_nom_plat = data.filter(function(data){return data.type == "plat";});
    var filtre_nom_assai = data.filter(function(data){return data.type == "assaisonnement";});
    var filtre_nom_accomp = data.filter(function(data){return data.type == "accompagnement";});
    var nbrAlea = [Math.round( Math.random()*((filtre_nom_plat.length-1)-0)+0)]    
    
    tableau_recette.recette.push({
          
                
        nom: filtre_nom_plat[nbrAlea].nom + filtre_nom_assai[nbrAlea].nom + filtre_nom_accomp[nbrAlea].nom,
        ingredients: filtre_nom_plat[nbrAlea].ingredients + filtre_nom_assai[nbrAlea].ingredients + filtre_nom_accomp[nbrAlea].ingredients,
        duration: filtre_nom_plat[nbrAlea].duration + filtre_nom_assai[nbrAlea].duration + filtre_nom_accomp[nbrAlea].duration,
        ustensile: filtre_nom_plat[nbrAlea].ustensile + filtre_nom_assai[nbrAlea].ustensile + filtre_nom_accomp[nbrAlea].ustensile
    })
}

console.log(tableau_recette)