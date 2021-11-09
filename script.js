let prenom = id1.value;

function cacheBloc() {
    bloc2.style.display = "none";

}
cacheBloc();

function afficheBloc() {
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
    document.getElementById("texte2").innerHTML = "Merci " + id1.value + ", nous te confirmons que tu seras informé sur ton email : " + eMail;
}
document.getElementById("valider2").addEventListener("click", envoieMail);

function cachePage() {
    bloc4.style.display = "none";
}
cachePage();

function affichePage() {
    bloc4.style.display = "flex";
    bloc1.style.display = "none";
    bloc2.style.display = "none";
    bloc3.style.display = "none";
    texte.style.display = "none";
    document.getElementById("merci").innerHTML = "Merci " + id1.value + " et à bientôt !";
}
document.getElementById("ok").addEventListener("click", affichePage);

//disparition boite modale
function stopCookie() {
    cookie.style.display = "none";
}
document.getElementById("bCookie1").addEventListener("click", stopCookie);

// apparition boite modale
function blockPerso() {
    grandPopin.style.display = "flex";
    grandPopin.style.zIndex = "1";
}
document.getElementById("bCookie2").addEventListener("click", blockPerso);

function stopPopin() {
    grandPopin.style.display = "none";
}
document.getElementById("button_popin").addEventListener("click", stopPopin);

// change de couleur de fond en vert lorqu'on clique sur Accepter du popin
function changeColorValidate() {
    this.style.backgroundColor = "green";
    let reverse = this.getAttribute("data-deline");
    document.getElementById(reverse).style.backgroundColor = "#cecece";
    //pour bloquer le bouton non-choisi
    this.setAttribute("disabled", "")
    localStorage.setItem("contenuValidate", "green");

}
document.getElementById("contenuValidate").addEventListener("click", changeColorValidate);

function changeColorPubValidate() {
    this.style.backgroundColor = "green";
    let reverse = this.getAttribute("data-deline");
    document.getElementById(reverse).style.backgroundColor = "#cecece";
    //pour bloquer le bouton non-choisi
    this.setAttribute("disabled", "")
    localStorage.setItem("pubValidate", "green");

}
document.getElementById("pubValidate").addEventListener("click", changeColorPubValidate);

function changeColorAudValidate() {
    this.style.backgroundColor = "green";
    let reverse = this.getAttribute("data-deline");
    document.getElementById(reverse).style.backgroundColor = "#cecece";
    //pour bloquer le bouton non-choisi
    this.setAttribute("disabled", "")
    localStorage.setItem("audValidate", "green");

}
document.getElementById("audValidate").addEventListener("click", changeColorAudValidate);


// change de couleur de fond en rouge lorqu'on clique sur Refuser du popin

function changeColorRefused() {
    this.style.backgroundColor = "red";
    let reverse = this.getAttribute("data-deline");
    document.getElementById(reverse).style.backgroundColor = "#cecece";
    this.setAttribute("disabled", "")
    localStorage.setItem("contenuRefused", "red");
}
document.getElementById("contenuRefused").addEventListener("click", changeColorRefused);

function changeColorPubRefused() {
    this.style.backgroundColor = "red";
    let reverse = this.getAttribute("data-deline");
    document.getElementById(reverse).style.backgroundColor = "#cecece";
    this.setAttribute("disabled", "")
    localStorage.setItem("pubRefused", "red");
}
document.getElementById("pubRefused").addEventListener("click", changeColorPubRefused);

function changeColorAudRefused() {
    this.style.backgroundColor = "red";
    let reverse = this.getAttribute("data-deline");
    document.getElementById(reverse).style.backgroundColor = "#cecece";
    this.setAttribute("disabled", "")
    localStorage.setItem("audRefused", "red");
}
document.getElementById("audRefused").addEventListener("click", changeColorAudRefused);

// sauvegarder couleurs des bouttons choisis dans le navigateur
function resultatContenuValidate() {
    let saveColorContenuValidate = localStorage.getItem("contenuValidate")
    if (saveColorContenuValidate != null) {
        document.getElementById("contenuValidate").style.backgroundColor = saveColorContenuValidate;
    }
    else {
        document.getElementById("contenuValidate").style.backgroundColor = "#4d4d4d";
    }
}
resultatContenuValidate()

function resultatValidate2() {
    let saveColorPubValidate = localStorage.getItem("pubValidate")
    if (saveColorPubValidate != null) {
        document.getElementById("pubValidate").style.backgroundColor = saveColorPubValidate;
    }
    else {
        document.getElementById("pubValidate").style.backgroundColor = "#4d4d4d";
    }
}
resultatValidate2()

function resultatValidate3() {
    let saveColorAudValidate = localStorage.getItem("audValidate")
    if (saveColorAudValidate != null) {
        document.getElementById("audValidate").style.backgroundColor = saveColorAudValidate;
    }
    else {
        document.getElementById("audValidate").style.backgroundColor = "#4d4d4d";
    }
}
resultatValidate3()

function resultatRefused() {
    let saveColorContenuRefused = localStorage.getItem("contenuRefused")
    if (saveColorContenuRefused != null) {
        document.getElementById("contenuRefused").style.backgroundColor = saveColorContenuRefused;
    }
    else {
        document.getElementById("contenuRefused").style.backgroundColor = "#4d4d4d";
    }
}
resultatRefused()

function resultatRefused2() {
    let saveColorPubRefused = localStorage.getItem("pubRefused")
    if (saveColorPubRefused != null) {
        document.getElementById("pubRefused").style.backgroundColor = saveColorPubRefused;
    }
    else {
        document.getElementById("pubRefused").style.backgroundColor = "#4d4d4d";
    }
}
resultatRefused2()

function resultatRefused3() {
    let saveColorAudRefused = localStorage.getItem("audRefused")
    if (saveColorAudRefused != null) {
        document.getElementById("audRefused").style.backgroundColor = saveColorAudRefused;
    }
    else {
        document.getElementById("audRefused").style.backgroundColor = "#4d4d4d";
    }
}
resultatRefused3()