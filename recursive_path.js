const { faker } = require('@faker-js/faker');
const _ = require("lodash")
const path = require("path")

var files = []

for (var i = 0; i < 100; i++) {
    var file_path = faker.system.filePath()
    var ext = path.extname(file_path)
    var filename = path.basename(file_path)
    var dirname = path.dirname(file_path)
    files.push({
        name: filename,
        extension: ext,
        global_path: file_path,
        dirname: dirname,
        dirname_tab: dirname.replace('/', '').split('/')
    })
}



var files_recursive = []


function files_recursive_construction(path_dir, index, file, tab_recur) {
    const path = path_dir[index];
    var create = false
    let e = _.find(tab_recur, ['name', path])

    if (!e) {
        create = true
        console.log("Le dossier", path, "n'existe pas, je le crée et l'ajoute au tableau de resultat.", "Je suis au niveau :", index)
        e = {
            name: path,
            type: 'D',
            children: []
        };
        tab_recur.push(e);
    }
    else
    console.log("Le dossier", path, "n'existe déja.", "Il a déja",e.children.length,'fichier ou dossier dedans.', "Je suis au niveau :", index)
  

    if (index === path_dir.length - 1) {
        console.log("J'ai fini de crée tous les dossier pour le fichier", file.global_path, "je peux ajouter le fichier le fichier au dossier et passé au suivant.")
        e.children.push({
            name: file.name,
            type: 'F',
            extension: file.extension,
            global: file.global_path
        });
        return e;
    } else {
        if (create)
            console.log("J'ai crée le dossier", path, "qui n'existait pas pour le fichier avec le chemin", file.global_path)
        else
            console.log("J'ai deja crée le dossier", path, "avant je vais ajouter la fichier des dossiers ou fichier dans ses enfants pour le fichier avec le chemin", file.global_path)
        return files_recursive_construction(path_dir, index + 1, file, e.children);
    }
}

for (let i = 0; i < files.length; i++) {
    const file = files[i];
    console.log("Je suis en train de m'occuper du fichier", file.global_path, "en position", i)
    files_recursive_construction(file.dirname_tab, 0, file, files_recursive);
    console.log("J'ai fini de m'occuper du fichier", file.global_path, "en position", i)

}






function printPath(obj, level, parent) {
    var space = ""
    if (level > 0) {
        for (var i = 0; i < level; i++) {
            space += "    "
        }
    }
    for (var i = 0; i < obj.length; i++) {
        var keys = ["name", 'global']
        var text = space + "- "
        for (var key_number = 0; key_number < keys.length; key_number++) {
            if (obj[i][keys[key_number]]) {
                text += `${keys[key_number]} : ${obj[i][keys[key_number]]}`
                if (key_number + 1 != keys.length)
                    text += " / "
            }
        }
        // text += " / Origine : " + parent
        console.log(text)
        // var myParent = parent + " " + obj[i]['firstName'] + " " + obj[i]['lastName'] + "-"
        if (obj[i].children) {
            printPath(obj[i].children, level + 1, '')
        }
    }
}

//console.log(JSON.stringify(files_recursive, null, 4))
//printPath(files_recursive, 0, '-')
