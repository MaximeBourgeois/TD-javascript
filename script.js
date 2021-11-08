let prenom = id1.value;

function cacheBloc() {
    bloc2.style.display = "none";

}
cacheBloc();

function afficheBloc(){
    bloc1.style.display = "none";
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
    bloc3.style.zIndex = "1";
    
}
document.getElementById("valider2").addEventListener("click", afficheBloc2);


function envoieMail() {
    let eMail = document.getElementById("adresseMail").value;
    document.getElementById("texte2").innerHTML="Merci " + id1.value + ", nous te confirmons que tu seras informé sur ton email : " + eMail;
}
document.getElementById("valider2").addEventListener("click", envoieMail);

function cachePage(){
    bloc4.style.display = "none";
}
cachePage();

function affichePage(){
    bloc4.style.display = "flex";
    bloc1.style.display = "none";
    bloc2.style.display = "none";
    bloc3.style.display = "none";
    texte.style.display = "none";
    document.getElementById("merci").innerHTML="Merci "+id1.value+" et à bientôt !";
}
document.getElementById("ok").addEventListener("click", affichePage);

//disparition boite modale
function stopCookie(){
    cookie.style.display = "none";
}
document.getElementById("bCookie1").addEventListener("click", stopCookie);

// apparition boite modale
function blockPerso(){
    grandPopin.style.display = "flex";
    grandPopin.style.zIndex = "1";
}
document.getElementById("bCookie2").addEventListener("click", blockPerso);

function stopPopin(){
    grandPopin.style.display = "none";
}
document.getElementById("button_popin").addEventListener("click", stopPopin);

// change de couleur de fond en vert lorqu'on clique sur Accepter du popin
document.querySelectorAll(".popVal").forEach(function(e) {
    e.addEventListener("click", function() {
      this.style.backgroundColor = "green";
    })
  });

// change de couleur de fond en rouge lorqu'on clique sur Refuser du popin
document.querySelectorAll(".popRef").forEach(function(e) {
    e.addEventListener("click", function() {
      this.style.backgroundColor = "red";
    })
  });
