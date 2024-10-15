//1 je crée ma classe

class CompteEpargne {
  constructor(tauxInteret, soldeInitial) {
    this.tauxInteret = tauxInteret;
    this.solde = soldeInitial;
    this.historiqueOperations = [];
  }
  //2je je crée ma méthode pour gérer le dépot d'argent
  depot(montant) {
    this.solde += montant;
    this.historiqueOperations.push(`Dépôt de ${montant} euros`);
    console.log(
      `Vous avez déposé ${montant} euros. Nouveau solde : ${this.solde} euros.`
    );
  }
  //3 je crée ma méthode pour le retrait d"argent en oubliant pas la condition de vérifier si le solde est >= au montant de retrait
  retrait(montant) {
    if (this.solde >= montant) {
      this.solde -= montant;
      this.historiqueOperations.push(`Retrait de ${montant} euros`);
      console.log(
        `Vous avez retiré ${montant} euros. Nouveau solde : ${this.solde} euros.`
      );
    } else {
      console.log("Solde insuffisant pour effectuer ce retrait.");
    }
  }
  //4 je fcréela methode pour calculé les interêts basé sur le taux et le les ajoute au solde
  calculInterets() {
    const interets = this.solde * this.tauxInteret;
    this.solde += interets;
    this.historiqueOperations.push(
      `Intérêts de ${interets.toFixed(2)} euros ajoutés`
    );
    console.log(
      `Intérêts annuels de ${
        this.tauxInteret * 100
      }% ajoutés. Nouveau solde : ${this.solde.toFixed(2)} euros.`
    );
  }
}
const compte = new CompteEpargne(0.03, 1000);
compte.depot(200);
compte.retrait(150);
compte.depot(500);
compte.retrait(800);
compte.calculInterets();
