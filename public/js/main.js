// Exercice 2

//1 affiche 1er lettre 
let prenom = prompt('Votre prénom?').toLocaleLowerCase();
// let premsLettre = prenom.charAt(0);
// alert(`Première lettre de ${prenom} = ${premsLettre}`);

//2 affiche dernière lettre
// let derniereLettre = prenom.charAt(prenom.length -1);
// alert(`Derniere lettre ${prenom} = ${derniereLettre} `);

//3 Affiche le prénom sans sa 1er lettre 
// alert(prenom.substring(1))

//4
// alert(prenom.charAt(0) + prenom.charAt(1).toLocaleUpperCase() + prenom.slice(2));

// let upper = prenom.charAt(1)
// alert(prenom.replace(upper, upper.toUpperCase()))

//5
// let lettre = prompt(`Quelle lettre voulez-vous mettre en majuscule dans '${prenom}'`).toLowerCase();
// alert(prenom.replace(lettre, lettre.toUpperCase()));

//6
// let firstUpper = prenom.charAt(0);
// alert(prenom.replace(firstUpper, firstUpper.toUpperCase()));
// alert(prenom.charAt(0).toUpperCase() + prenom.substring(1))


//7
let nbAl = Math.round(Math.random()*prenom.length);

alert(prenom.replace(prenom.charAt(nbAl), ""));
