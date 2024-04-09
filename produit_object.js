let produit = {
    nom: "Pommes",
    prix: 2,
    stock: 20,
    nb_vendu: 10
}
console.log(produit)
produit.gain = produit.prix*produit.nb_vendu
console.log(produit)
produit.valeur_stock = produit.stock*produit.prix
console.log("Produit :", produit.nom, " / Stock :", produit.valeur_stock, " / Gain :", produit.gain)