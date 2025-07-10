document.addEventListener('DOMContentLoaded', chargerMenu);

async function chargerMenu() {
  try {
    const header = document.getElementById('header');
    const reponse = await fetch('/composants/header/header.html');

    if (!reponse.ok) {
      throw new Error('Erreur lors du chargement du menu');
    }

    const html = await reponse.text();
    header.innerHTML = html;

  } catch (erreur) {
    console.error('Erreur :', erreur);
  }
   // je déclare la variable menuBtn = l'id "menu-btn" dans mon html
  let menuToggle = document.getElementById("menu-toggle");
  // je déclare la variable menuMobile = l'id "menu-mobile" dans mon html
  let menuburger = document.getElementById("menu-list");
   // j'ajoute un écouteur d'événement "click" sur le bouton menuBtn et j'utilise une fonction anonyme pour gérer l'événement
  menuToggle.addEventListener("click", function() {
   // je bascule la classe "hidden" sur l'élément menuMobile, ce qui permet de l'afficher ou de le masquer
   menuburger.classList.toggle("active");
    // je bascule la classe "expanded" sur le bouton menuBtn, ce qui permet de changer son apparence
    menuToggle.classList.toggle("expanded");
});

const title = document.querySelector('h1').textContent;
console.log(title);
const baliseTitle = document.createElement('title');
document.head.appendChild(baliseTitle);
baliseTitle.textContent = title;
}
