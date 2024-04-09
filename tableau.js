let personnage = {
    firstname : "Lucas",
    lastname : "BERGER",
    username : "LucasCDA90",
    email : "lucas.brg7@gmail.com"
}                                               //Création de l'objet personnage

let voisin = personnage                         //Création de l'objet voisin
console.log(voisin, personnage)                 //Affichage des objets

personnage.username = "LucasCDA"                //Changement du username
console.log(voisin, personnage)                 //Affichage des objets

voisin = {...personnage}                        //Modification de personnage dans voisin
personnage.username = "Jean"                    //avec Jean
console.log(voisin, personnage)                 //Affichage