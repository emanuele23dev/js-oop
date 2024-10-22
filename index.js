// In questo esercizio, dovrai creare una classe in JavaScript chiamata "Veicolo" con alcune proprietà e metodi.
// La classe "Veicolo" dovrebbe avere le seguenti caratteristiche:
// marca
// anno
// colore
// porte
// carburante

class Veicolo {
  marca;
  anno;
  colore;
  porte;
  carburante;

  constructor(marca, anno, colore, porte, carburante) {
    this.marca = marca;
    this.anno = anno;
    this.colore = colore;
    this.porte = porte;
    this.carburante = carburante;
  }

  // Creiamo una nuova istanza di veicolo che rappresenti una Fiat 2019 blu.

  // Otteniamo le informazioni della vettura utilizzando il metodo informazioni()

  informazioni() {
    return `${this.marca} ${this.anno} ${this.colore}`;
  }

  // Calcoliamo l'età della vettura utilizzando il metodo calcolaEta()

  calcolaEta() {
    const date = new Date();
    const currentYear = date.getFullYear();
    const age = currentYear - this.anno;
    return `Età vettura: ${age} anni`;
  }
}

const vettura_fiat = new Veicolo("Fiat", 2019, "blu");

// Stampiamo i risultati in console 
console.log(vettura_fiat.informazioni());

console.log(vettura_fiat.calcolaEta());
