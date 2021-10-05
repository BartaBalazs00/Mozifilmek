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
    } else if(isNaN(kiadasiev)){
        document.getElementById("kiadasiEvError").innerHTML="A kiadási év szám kell hogy legyen";
        hiba = true;
    } else if(kiadasiev>date.getFullYear()+1){
        document.getElementById("kiadasiEvError").innerHTML="Nem lehet a kiadási év nagyobb mint az aktuális dátum";
        hiba = true;
    } else if(kiadasiev<1888){
        document.getElementById("kiadasiEvError").innerHTML="Ilyenkor még nem is csináltak filmeket XD";
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
    let tablazat = "<table><tr><th>Név</th><th>Rendező</th><th>Kiadási év</th></tr>";
        for (let i = 0; i < filmek.length; i++) {
            tablazat+="<tr> <td>"+filmek[i].nev+"</td>";
            tablazat+="<td>"+filmek[i].rendezo+"</td>";
            tablazat+="<td>"+filmek[i].kiadasiev+"</td></tr>";
        }
        tablazat+="</table>";
        document.getElementById("tablazat").innerHTML = tablazat;
}

document.getElementById("kuld").addEventListener("click", felvesz);