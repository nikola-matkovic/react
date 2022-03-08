class Osobe {
    constructor(ime, prezime, godine){
        this.ime = ime;
        this.prezime = prezime;
        this.godine = godine;
    }
}

let osoba1 = new Osobe("Nikola", "Matković", "19");
let osoba2 = new Osobe("Jovana", "Matković", "19");

console.log(osoba1, osoba2);