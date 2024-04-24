var people = [{                                                                 // Recursivité en Javascript "parent-enfant"
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

function affichageFamille(tab, indent, origin){
    let tabulation = ""

    for ( y = 0; y < indent; y++){
    tabulation += " "
}
    for (let i = 0; i < tab.length; i++){
        console.log(`${tabulation}nom : ${tab[i].lastName} / prénom : ${tab[i].firstName} / origin : ${origin}`)

        if (tab[i].children && tab[i].children.length > 0)
        {
        affichageFamille(tab[i].children, indent + 1, origin + `${tab[i].firstName} ${tab[i].lastName} - `)
        }
    }
}

affichageFamille(people, 0, "- ")