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
    let date = new Date();
    let nev = document.getElementById("nev").value;
    let nevhiba = false;
    let rendezo = document.getElementById("rendezo").value;
    let rendeziHiba = false;
    let kiadasiev = document.getElementById("kiadasiEv").value;
    let kiadasiEvHiba = false;
    if(nev == ""){
        document.getElementById("nevError").innerHTML="A név nem lehet üres";
        nevhiba = true;
    } else {
        document.getElementById("nevError").innerHTML="";
        nevhiba = false;
    }

    if(rendezo == ""){
        document.getElementById("rendezoError").innerHTML="A rendező nem lehet üres";
        rendeziHiba = true;
    } else {
        document.getElementById("rendezoError").innerHTML="";
        rendeziHiba = false;
    }

    if(kiadasiev == ""){
        document.getElementById("kiadasiEvError").innerHTML="A kiadási év nem lehet üres";
        kiadasiEvHiba = true;
    } else if(isNaN(kiadasiev)){
        document.getElementById("kiadasiEvError").innerHTML="A kiadási év szám kell hogy legyen";
        kiadasiEvHiba = true;
    } else if(kiadasiev>date.getFullYear()){
        document.getElementById("kiadasiEvError").innerHTML="Nem lehet a kiadási év nagyobb mint az aktuális dátum";
        kiadasiEvHiba = true;
    } else if(kiadasiev<1888){
        document.getElementById("kiadasiEvError").innerHTML="Ilyenkor még nem is csináltak filmeket XD";
        kiadasiEvHiba = true;
    } else {
        document.getElementById("kiadasiEvError").innerHTML="";
        kiadasiEvHiba = false;
    }

    if(!nevhiba && !rendeziHiba && !kiadasiEvHiba){
        let obj = new Film(nev,rendezo,kiadasiev);
        filmek.push(obj);
        document.getElementById("nev").value="";
        document.getElementById("rendezo").value="";
        document.getElementById("kiadasiEv").value="";
        
    }
    let tablazat = "<table class='table table-striped table-hover align-middle'>";
    tablazat+="<thead class='table-dark align-middle'><tr><th>Név</th><th>Rendező</th>";
    tablazat+="<th>Kiadási év</th></tr></thead><tbody>";
        for (let i = 0; i < filmek.length; i++) {
            tablazat+="<tr> <td>"+filmek[i].nev+"</td>";
            tablazat+="<td>"+filmek[i].rendezo+"</td>";
            tablazat+="<td>"+filmek[i].kiadasiev+"</td></tr>";
        }
        tablazat+="</tbody></table>";
        document.getElementById("tablazat").innerHTML = tablazat;
}

document.getElementById("kuld").addEventListener("click", felvesz);