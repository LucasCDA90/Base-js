let total_livre_vendu = 600                                     //Initialisation du nombre de livres vendus
total_livre_vendu += 50                                         //Ajout de 50 livres
moyenne_par_jour = total_livre_vendu/7                          //Calcul de la moyenne
let message = "Le nombre de livres vendus par jour est :"       //Message
console.log(message + Math.round(moyenne_par_jour))             //Affichage