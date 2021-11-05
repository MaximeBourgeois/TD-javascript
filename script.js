let prenom = id1.value;

function cacheBloc() {
    bloc2.style.display = "none";

}
cacheBloc();

function afficheBloc(){
    bloc2.style.display = "flex";
}
document.getElementById("valider").addEventListener("click", afficheBloc);

function afficheNom() {
    let prenom = id1.value;
    document.getElementById("texte").innerHTML = "Bonjour " + id1.value;
}
document.getElementById("valider").addEventListener("click", afficheNom);


function cacheBloc2() {
    bloc3.style.display = "none";
}
cacheBloc2();

function afficheBloc2() {
    bloc3.style.display = "flex";
}
document.getElementById("valider2").addEventListener("click", afficheBloc2);


function envoieMail() {
    let eMail = document.getElementById("adresseMail").value;
    document.getElementById("texte2").innerHTML="Merci " + id1.value + ", nous te confirmons que tu seras informé sur ton email : " + eMail;
}
document.getElementById("valider2").addEventListener("click", envoieMail);

