let produit = {
    nom: "Pommes",
    prix: 2,
    stock: 20,
    nb_vendu: 10
}
console.log(produit)                                                                                                //Affichage des données
produit.gain = produit.prix*produit.nb_vendu                                                                        //Création du gain       
console.log(produit)                                                                                                //Affichage des caracteristiques du produit
produit.valeur_stock = produit.stock*produit.prix                                                                   //Création de la valeur du stock
console.log("Produit :", produit.nom, " / Stock :", produit.valeur_stock, " / Gain :", produit.gain)                //Affichage des données

produit.cost = 1                                                                                                    //Initialisation du cout d'une pomme
produit.total_cost = produit.cost*(produit.nb_vendu + produit.stock)                                                //Création de l'achat de produit
console.log("Somme d'achat des produits :", produit.total_cost)                                                     //Affichage du cout total

let benefice_par_produit = produit.prix - produit.cost                                                              //Création du bénéfice par produit
console.log("Bénéfice par produit :", benefice_par_produit)                                                         //Calcul du bénéfice

let pourcentage_benefice = 100*(benefice_par_produit/produit.prix)                                                  //Création du pourcentgae de bénéfice
console.log("Pourcentage bénéfice par produit", pourcentage_benefice+"% ~", Math.round(pourcentage_benefice)+"%")   //Affichage du pourcentage ainsi que l'arrondi du pourcentage