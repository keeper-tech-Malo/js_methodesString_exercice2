let prenom = prompt("donne votre prenom");
// Affiche uniquement la premiere lettre du prénom
let justp = prenom.slice(0,1)
alert(justp)
// . Affiche la dernière lettre du prénom de la personne
let dernier = prenom.charAt(prenom.length -1)
alert(dernier);

let renom = prenom.slice(1)
alert(renom)

let maj = prenom.substring(0,1)+prenom.substring(1,2).toUpperCase()+prenom.substring
alert(maj)

