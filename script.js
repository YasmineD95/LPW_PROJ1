//1
const tauxInteret = 0.03;

let solde = 1000;
let depot = 200;
let retrait = 150;

//2
solde += depot;
console.log(
  "Vous avez déposé " + depot + " euros. Nouveau solde : " + solde + " euros."
);

//3
if (solde >= retrait) {
  solde -= retrait;
  console.log(
    "Vous avez retiré " +
      retrait +
      " euros. Nouveau solde : " +
      solde +
      " euros."
  );
} else {
  console.log("Solde insuffisant pour effectuer ce retrait.");
}

//4

solde += solde * tauxInteret;
console.log(
  "Intérêts annuels de 3% ajoutés. Nouveau solde : " + solde + " euros."
);

//5
let nouveauDepot = 500;
let nouveauRetrait = 800;

solde += nouveauDepot;
console.log(
  "Vous avez déposé " +
    nouveauDepot +
    " euros. Nouveau solde : " +
    solde +
    " euros."
);

if (solde >= nouveauRetrait) {
  solde -= nouveauRetrait;
  console.log(
    "Vous avez retiré " +
      nouveauRetrait +
      " euros. Nouveau solde : " +
      solde +
      " euros."
  );
} else {
  console.log("Solde insuffisant pour effectuer ce retrait.");
}

solde += solde * tauxInteret;
console.log(
  "Intérêts annuels de 3% ajoutés. Nouveau solde : " + solde + " euros."
);

//ex bonus
let historiqueOperations = [];

//// cours 10/10

///boucle for
for (let i = 0; i <= 5; i++) {
  console.log(i);
}
for (let i = 5; i >= 0; i--) {
  console.log(i);
}
//boucle while

while (i <= 5) {
  console.log(i);
  /*i++
  i+=1   tous ça c'est pareil
  i =i+1*/
}

//tableu
let noms = ["yasmine", "dhif", "jean"];

let nom_1 = ["h", "o", "u"];
nom_1[0] = "h";

let nom = "hamza";
if (nom[0] == "h") {
  for (let i = 0; i <= noms.length; i++) {
    console.log(noms[1]);
  }
}

//si je veux afficher mon nom à l'envers
for (let i = nom.length; i >= 0; i--) {
  console.log(nom[i]);
}

//lesfonctions
let reversedString = reversedString(nom);
function nomDeLaFunction(nom) {
  let reversedString;
  for (let i = nom.length; i >= 0; i--) {
    reversedString = reversedString + nom[i];
  }
  return reversedString;
}
