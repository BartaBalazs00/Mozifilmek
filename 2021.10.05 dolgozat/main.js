class Film {
    nev;
    rendezo;
    kiadasiev;
    constructor(nev, rendezo, kiadasiev){
        this.nev = nev;
        this.rendezo = rendezo;
        this.kiadasiev = kiadasiev;
    }
}
const filmek = [];
let obj1 = new Film("aztakurva","kurvaannya","2000");
filmek.push(obj1);

console.log(filmek[0].nev);




document.getElementById("kuld").addEventListener("click", felvesz);