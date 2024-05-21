const _ = require("lodash");
const { faker } = require('@faker-js/faker/locale/fr');

let tab_articles = []
let articles_cher_stock = []
let articles_pas_cher_stock = []
let articles_rupture = []
let articles_stock_faible = []

function round(nombre) {
    const nombreArrondi = _.round(nombre, 2);
    const nombreFormate = nombreArrondi.toFixed(2);
    return parseFloat(nombreFormate);
}

var nb_element = 100
var price_min = 5
var price_max = 6
var stock_min = 0
var stock_max = 10
var price_interval = 5.5
var stock_alerte = 3
let cat = {}

for (var i = 0; i < nb_element; i++) {

    
    var name = faker.commerce.product()
    var description = faker.commerce.productDescription()
    var department = faker.commerce.department()
    var prix = round(_.random(price_min,price_max,2))
    var stock = _.random(stock_min,stock_max)
    
    
    tab_articles.push(
        {
        name,
        description,
        department,
        prix,
        stock
        })


    if (tab_articles[i].stock > stock_min && tab_articles[i].prix > price_interval) 
        {
        articles_cher_stock.push(tab_articles[i])
        }
        else if (tab_articles[i].stock > stock_min && tab_articles[i].prix < price_interval) 
        {
        articles_pas_cher_stock.push(tab_articles[i])
        }
        else if (tab_articles[i].stock == stock_min)
        {
        articles_rupture.push(tab_articles[i])
        }
    if (tab_articles[i].stock < stock_alerte)
        {
        articles_stock_faible.push(tab_articles[i])
        }



if  (cat[department])
        {cat[department]++}
else    {cat[department]=1}

}

//Affichage des produits superieurs au prix et en stock
console.log(`\nEn stock et plus de 5e50 ; Il y a ${articles_cher_stock.length} articles :`)
for (var i = 0; i < articles_cher_stock.length; i++) {
    console.log(`Produit : ${articles_cher_stock[i].name}, ${articles_cher_stock[i].department}, Prix : ${articles_cher_stock[i].prix}, Stock : ${articles_cher_stock[i].stock}`)
    }

//Affichage des produits inferieurs au prix et en stock
console.log(`\nEn stock et moins de 5e50 ; Il y a ${articles_pas_cher_stock.length} articles :`)
for (var i = 0; i < articles_pas_cher_stock.length; i++) {
    console.log(`Produit : ${articles_pas_cher_stock[i].name}, ${articles_pas_cher_stock[i].department}, Prix : ${articles_pas_cher_stock[i].prix}, Stock : ${articles_pas_cher_stock[i].stock}`)
    }

//Affichage produits en rupture
console.log(`\nEn rupture de stock; Il y a ${articles_rupture.length} articles :`)
for (var i = 0; i < articles_rupture.length; i++) {
    console.log(`Produit : ${articles_rupture[i].name}, ${articles_rupture[i].department}, Prix : ${articles_rupture[i].prix}, Stock : ${articles_rupture[i].stock}`)
    }

//Affichage rupture de stock proche
console.log(`\nBientot en rupture de stock; Il y a ${articles_stock_faible.length} articles :`)
for (var i = 0; i < articles_stock_faible.length; i++) {
    console.log(`Produit : ${articles_stock_faible[i].name}, ${articles_stock_faible[i].department}, Prix : ${articles_stock_faible[i].prix}, Stock : ${articles_stock_faible[i].stock}`)
    }

console.log("\n")
let tab_cat = Object.keys(cat)

for (var i = 0; i < tab_cat.length; i++)

console.log(`${tab_cat[i]} - ${tab_cat[i].length} produit(s) dans cette catégorie`)