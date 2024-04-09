let rectangle = {
    X: 50,
    Y: 120,
    Largeur: 30,
    Longueur: 70
}                                                                                               //Entrée des parametres du rectangle

rectangle.perimetre = ((rectangle.Largeur+rectangle.Longueur)*2)                                //Définition du perimetre
console.log("Le perimetre est :", rectangle.perimetre)                                          //Affichage du perimetre

rectangle.unite = "cm"                                                                          //Ajout de la propriété unité
console.log("Le perimetre est :", rectangle.perimetre, rectangle.unite)                         //Affichage du perimetre en cm

rectangle.area = (rectangle.Largeur*rectangle.Longueur)                                         //Calcul de l'aire
console.log("L'aire du rectangle est:", rectangle.area, rectangle.unite)                        //Affichage de l'aire

rectangle.diagonale = ((Math.pow(rectangle.Largeur, 2) + Math.pow(rectangle.Longueur, 2)))      //Calcul de la diagonale au carrée
console.log(rectangle.diagonale)                                                                //Affichage de la diagonale au carrée

rectangle.diagonale = Math.sqrt(rectangle.diagonale)                                            //Calcul de la diagonale
console.log(rectangle.diagonale)                                                                //Affichage de la diagonale

rectangle.diagonale = Number(rectangle.diagonale.toFixed(2))                                    //Arrondi 2 chiffres apres la virgule
console.log(rectangle.diagonale)                                                                //Affichage du résultat

console.log("\nX :", rectangle.X, rectangle.unite)                                             //Affichage du X
console.log("Y :", rectangle.Y, rectangle.unite)                                               //Affichage du Y
console.log("Perimetre :", rectangle.perimetre, rectangle.unite)                               //Affichage du perimetre
console.log("Aire :", rectangle.area, rectangle.unite, "2")                                    //Affichage de l'aire
console.log("Diagonale :", rectangle.diagonale, rectangle.unite)                               //Affichage de la diagonale