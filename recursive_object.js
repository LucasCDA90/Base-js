var obj = {
    a: 1,
    b: 3,
    c: { e : { f: { z: { y: 23 } } } }
}

function returnEveryKey(object) {
    var result = []
    var keys = Object.keys(object)
    for (var i =0; i < keys.length; i++){
        var key = keys[i]
        result.push(key)
        console.log(key, object[key])

        if (typeof object[key] === "object") {
            var tab_sublevel = returnEveryKey(object[key])
            result = [...result, ...tab_sublevel]
        }
    }
    return result

}

returnEveryKey(obj)

