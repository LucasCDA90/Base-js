const { faker } = require('@faker-js/faker');
const _ = require("lodash")

var users = []
var number_users = 25;

for (var i = 0; i < number_users; i++) {
    let firstName = faker.person.firstName()
    let lastName = faker.person.lastName()
    users.push({
        id: _.uniqueId(),
        username: faker.internet.userName({
            firstName: firstName,
            lastName: lastName
        }),
        firstName: firstName,
        lastName: lastName,
        email: faker.internet.email({
            firstName: firstName,
            lastName: lastName
        }),
    })
}

var price_min = 5.0
var price_max = 6.0
var stock_min = 0
var stock_max = 10

var products = []
var number_products = 25

for (var i = 0; i < number_products; i++) {
    products.push({
        id: _.uniqueId(),
        nom: faker.commerce.product(),
        description: faker.commerce.productDescription(),
        price: Number(_.random(price_min, price_max, true).toFixed(2)),
        stock: _.random(stock_min, stock_max),
        departement: faker.commerce.department()
    })
}


const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(getLogRequest)

function getLogRequest(req, res, next) {
    req.id_request = _.uniqueId('REQUEST_')
    console.log(`${(new Date()).toISOString()}: ${req.method} - ${req.url} (${req.id_request}) - Body: ${_.isEmpty(req.body) ? "Non" : "Oui"}`)
    next()
}

function printLogMessage(req, msg) {
    console.log(`${(new Date()).toISOString()}: ${req.method} - ${req.url}  (${req.id_request}) - Body: ${_.isEmpty(req.body) ? "Non" : "Oui"} - ${msg}`)
}


app.get('/users', function (req, res) {
    res.send(users)
})


app.get('/products', function (req, res) {
    res.send(products)
})

var UserFieldAuthorized = ["firstName", "lastName", "email", "username"]
var UserFieldRequired = ["firstName", "lastName", "username"]
var ProductFieldAuthorized = ["nom", "description", "price", 'stock', 'departement']
var ProductFieldRequired = ["nom", "description", "price"]


function checkKeys(obj, fieldAuthorized) {
    var tab = Object.keys(obj)
    var tab_res = []
    for (var i = 0; i < tab.length; i++) {
        if (fieldAuthorized.indexOf(tab[i]) == -1)
            tab_res.push(tab[i])
    }
    return tab_res
    // return _.filter(tab, function(e)  { return fieldAuthorized.indexOf(e) == -1 })
    /* for (var i = 0; i < tab.length; i++) {
        if (String(tab[i]) !== "firstName" && String(tab[i]) !== "lastName" && String(tab[i]) !== "email" && String(tab[i]) !== "username") {
            console.log(tab[i])
            return false
        }
    }
    return true */
}

function checkObjRequiredKey(obj, fieldRequired) {
    var tab = Object.keys(obj)
    var tab_res = []
    for (var i = 0; i < fieldRequired.length; i++) {
        if (tab.indexOf(fieldRequired[i]) == -1)
            tab_res.push({ field: fieldRequired[i], type_error: "Not found" })
        else if (!obj[fieldRequired[i]]) {
            tab_res.push({ field: fieldRequired[i], type_error: "Found but empty" })
        }
    }
    return tab_res
}

app.get('/user/:id', function (req, res) {
    var id = req.params.id
    var user = _.find(users, ["id", String(id)])

    if (user && id) {
        printLogMessage(req, "Utilisateur trouvé.")
        res.send(user)
    }
    else if (!id) {
        printLogMessage(req, "Il manque le params 'id' trouvé.")
        res.statusCode = 405
        res.send({ msg: "Argument non valide." })
    }
    else {
        printLogMessage(req, "Utilisateur non trouvé.")
        res.statusCode = 404
        res.send({ msg: "Utilisateur not found." })
    }
})

function checkKeyRequiredIsNotEmpty(obj, fieldRequired) {
    var fieldEmpty = []
    var key_obj = Object.keys(obj)
    for (var i = 0; i < fieldRequired.length; i++) {
        if (key_obj.indexOf(fieldRequired[i]) > -1 && !obj[fieldRequired[i]]) {
            fieldEmpty.push(fieldRequired[i])
        }
    }
    return fieldEmpty
}

app.put('/user/:id', middlewareCheckBodyKeysAuthorizedAndRequiredToPut(users, UserFieldAuthorized, UserFieldRequired), function (req, res) {
    var user_to_edit = req.body
    var user_to_edit_index = req.index_element
    users[user_to_edit_index] = { ...users[user_to_edit_index], ...user_to_edit }
    res.send(users[user_to_edit_index])
})

function middlewareBodyIsArray(req, res, next) {
    var users_to_add = req.body
    if (_.isArray(users_to_add)) {
        next()
    }
    else {
        res.statusCode = 405
        res.send({ msg: "Le body n'est pas un tableau d'object." })
    }
}

app.post('/users', middlewareBodyIsArray, middlewareCheckBodyKeysAuthorizedAndRequiredArray(UserFieldAuthorized, UserFieldRequired), function (req, res) {
    var users_to_add = req.body
    users_to_add = _.map(users_to_add, (e) => {
        e.id = _.uniqueId();
        return e
    })
    users = [...users, ...users_to_add]
    res.send(users_to_add)
})

var middlewareCheckBodyKeysAuthorizedAndRequired = (fieldAuthorized, fieldRequired) => (req, res, next) => {
    var user = req.body
    var fieldNotAuthorized = checkKeys(user, fieldAuthorized)
    var fieldNoRequiredNotMissing = checkObjRequiredKey(user, fieldRequired)
    res.statusCode = 405
    var text = ""
    if (fieldNotAuthorized.length > 0 || fieldNoRequiredNotMissing.length > 0) {
        if (fieldNotAuthorized.length > 0) {
            text += `Une des propriétés (${fieldNotAuthorized.join(', ')}) n'est pas autorisé. `
        }
        if (fieldNoRequiredNotMissing.length > 0) {
            text += `Une des propriétés (${fieldNoRequiredNotMissing.map((e) => { return e.field + " : " + e.type_error }).join(', ')}) requis n'est pas completé .`
        }
        res.send({
            msg: text,
            field_not_authorized: fieldNotAuthorized,
            field_require_missing: fieldNoRequiredNotMissing
        })
    } else {
        next()
    }
}

var middlewareCheckBodyKeysAuthorizedAndRequiredToPut = (tab, fieldAuthorized, fieldRequired) => (req, res, next) => {
    var id = req.params.id
    var user_body = req.body
    var user_to_edit = {}
    for (var i = 0; i < fieldAuthorized.length; i++) {
        if (_.has(user_body, fieldAuthorized[i]))
            user_to_edit[fieldAuthorized[i]] = user_body[fieldAuthorized[i]]
    }
    var field_required_empty = checkKeyRequiredIsNotEmpty(user_to_edit, fieldRequired)
    var user_to_edit_index = _.findIndex(tab, ["id", String(id)])
    if (user_to_edit_index == -1) {
        res.statusCode = 404
        res.send({ msg: "Element à modifier not found." })
    }
    else if (field_required_empty.length > 0) {
        res.statusCode = 405
        res.send({
            msg: `Les champs requis (${field_required_empty.join(', ')}) sont vides, impossible d'effectué la modification.`,
            field_required_empty: field_required_empty
        })
    } else {
        req.body = user_to_edit
        req.index_element = user_to_edit_index
        next()
    }
}

var middlewareCheckBodyKeysAuthorizedAndRequiredArray = (fieldAuthorized, fieldRequired) => (req, res, next) => {
    var users_to_add = req.body
    var error_element = []
    for (var i = 0; i < users_to_add.length; i++) {
        var user = users_to_add[i]
        var fieldNotAuthorized = checkKeys(user, fieldAuthorized)
        var fieldNoRequiredNotMissing = checkObjRequiredKey(user, fieldRequired)
        var text = `L'element à la position ${i} :`
        if (fieldNotAuthorized.length > 0) {
            text += `Une des propriétés (${fieldNotAuthorized.join(', ')}) n'est pas autorisé. `
        }
        if (fieldNoRequiredNotMissing.length > 0) {
            text += `Une des propriétés (${fieldNoRequiredNotMissing.map((e) => { return e.field + " : " + e.type_error }).join(', ')}) requis n'est pas completé .`
        }
        if (fieldNotAuthorized.length > 0 || fieldNoRequiredNotMissing.length > 0)
            error_element.push({
                msg: text,
                index: i,
                field_not_authorized: fieldNotAuthorized,
                field_require_missing: fieldNoRequiredNotMissing
            })
    }
    if (error_element.length > 0) {
        res.statusCode = 405
        res.send(error_element)
    } else {
        next()
    }
}

app.post('/user', middlewareCheckBodyKeysAuthorizedAndRequired(UserFieldAuthorized, UserFieldRequired), function (req, res) {
    var user = req.body
    user.id = _.uniqueId()
    users.push(user)
    res.send(user)

})


app.post('/product', middlewareCheckBodyKeysAuthorizedAndRequired(ProductFieldAuthorized, ProductFieldRequired), function (req, res) {
    var product = req.body
    product.id = _.uniqueId()
    products.push(product)
    res.send(product)

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})