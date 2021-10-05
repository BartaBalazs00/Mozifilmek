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
let obj1 = new Film("Harry Potter","J. K. Rowling","1997");
filmek.push(obj1);

console.log(filmek[0].nev);

function felvesz(){
    let hiba = false;
    let nev = document.getElementById("nev").value;
    let rendezo = document.getElementById("rendezo").value;
    let kiadasiev = document.getElementById("kiadasiEv").value;
    if(nev == ""){
        document.getElementById("nevError").innerHTML="A név nem lehet üres";
        hiba = true;
    } else {
        document.getElementById("nevError").innerHTML="";
        hiba = false;
    }

    if(rendezo == ""){
        document.getElementById("rendezoError").innerHTML="A rendező nem lehet üres";
        hiba = true;
    } else {
        document.getElementById("rendezoError").innerHTML="";
        hiba = false;
    }

    if(kiadasiev == ""){
        document.getElementById("kiadasiEvError").innerHTML="A kiadási év nem lehet üres";
        hiba = true;
    } else {
        document.getElementById("kiadasiEvError").innerHTML="";
        hiba = false;
    }

    if(!hiba){
        let obj = new Film(nev,rendezo,kiadasiev);
        filmek.push(obj);
        document.getElementById("nev").value="";
        document.getElementById("rendezo").value="";
        document.getElementById("kiadasiEv").value="";
    }
    
}



document.getElementById("kuld").addEventListener("click", felvesz);