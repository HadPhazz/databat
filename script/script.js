"use strict";

function darkModeActivation() { // For darkMode
  let decider = document.getElementById('switch');
  let input = document.getElementsByTagName("input");
  if(decider.checked){
    document.body.style.backgroundImage = 'linear-gradient(to right top, #000, #000)';
  } else {
    document.body.style.backgroundImage = 'linear-gradient(to right top, #f3d7b2, #f3d7b2)';
  }
}

function imageOpen(){
  let div = document.getElementById("img_div");
    if (div.style.display === "block") {
      div.style.display = "none";
    }
    else {
      div.style.display = "block";
    }
}

function helpOpen(){
  let div = document.getElementById("help_div");
    if (div.style.display === "block") {
      div.style.display = "none";
    }
    else {
      div.style.display = "block";
    }
}

function errorGenerator(taxon, sexe, field){
  if(sexe == "M")
    sexe = "Mâle";
  else if(sexe == "F")
    sexe = 'Femelle';
  let erreur = "Erreur potentielle : " + field + " pour " + taxon + " " + sexe + ".";
  if(confirm(
    erreur + "\n" +
    "\n" +
    "Voulez-vous corriger la valeur " + field + " ?\n" + "\n" +
    "Oui / OK : Retour aux entrées pour modification \n" + "\n" +
    "Non / Cancel : Forçage de la valeur et téléchargement du fichier.")){
    console.log("Modification de valeur suite à la détection")
  }
  else{
    console.log("Téléchargement du fichier")
    saveFile();
  }
}

/*
window.addEventListener("load", ChangeColor, false);

function ChangeColor() {
  let colorpicker = document.getElementById("colorpicker");
  let defaultColor = "#f3d7b2";
  colorpicker.value = defaultColor;
  colorpicker.addEventListener("input", OnTouch, false);
  colorpicker.select();
}

function OnTouch(event) {
  let body = document.querySelector("body");
  if(true){
    body.style.backgroundColor = event.target.value;
  }
}
*/
