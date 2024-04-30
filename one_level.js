const { last } = require("lodash")

var peoples = [
    {
        _id: 1001,
        username: "jeandupont",
        firstName: "Jean",
        lastName: "Dupont"
    },
    {
        _id: 1002,
        username: "louisbrocante",
        firstName: "Louis",
        lastName: "Brocante",
        parent: 1001
    },
    {
        _id: 1003,
        username: "julienrouget",
        firstName: "Julien",
        lastName: "Rouget",
        parent: 1002
    },
]

var tab = [{
    username: peoples.username,
    firstName: peoples.firstName,
    lastName: peoples.lastName,
    children: peoples._id
}
]