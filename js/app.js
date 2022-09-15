//Compteur de visite de la page
//if(localStorage !== "undefined"){
//    let consultation = localStorage.setItem("visites", "0");
//}
//console.log(consultation)
//const nb_visite = document.getElementById('nb_visite');
//consultation = localStorage.getItem("visites");
//consultation++;
//localStorage.setItem('visites', consultation);
//nb_visite.innerHTML += consultation;


//Stocker tableau dans localStorageT
const tableau = [1, 2, "string"];
localStorage.setItem("tableau", tableau);
const tableauP = document.getElementById('tableau');
tableauP.innerHTML = localStorage.getItem("tableau");
console.log(localStorage.getItem("tableau"))