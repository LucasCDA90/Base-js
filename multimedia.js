var data = {
    music: [],
    video: [],
    podcast: []
}
var max = 54596
var min = -1450
for (var i=0; i<500; i++){
    var language = "FR"
    if (i%2 !==0)
        language = "EN"

var chaineAleatoire = String(Math.random().toString(36)).substr(2, Math.floor(Math.random() * 6) + 2);
var chaineAleatoire2 = String(Math.random().toString(36)).substr(2, Math.floor(Math.random() * 6) + 2);
var chaineAleatoire3 = String(Math.random().toString(36)).substr(2, Math.floor(Math.random() * 6) + 2);

    data.music.push(
        {
            titre: chaineAleatoire+i,
            artiste: chaineAleatoire2+i,
            studio: "Studio"+i,
            language: language,
            time: Math.round(Math.random() * (max - min) + min),
            dateRelease: "1970"+i,
            album: chaineAleatoire3+i,
        }
    )
}

for (var i=0; i<data.music.length; i++) {
console.log(`Titre ${data.music[i].titre}, Artiste ${data.music[i].artiste}, Studio ${data.music[i].studio}, Language ${data.music[i].language}, Time ${data.music[i].time}, Date release ${data.music[i].dateRelease}, Album ${data.music[i].album}`)
}
