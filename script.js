document.addEventListener('DOMContentLoaded', chargerMenu);

async function chargerMenu() {
  try {
    const header = document.getElementById('header');
    const reponse = await fetch('/HTML/header.html');

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
}


const footer = document.getElementById('footer');
fetch('/html/footer.html')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erreur lors du chargement du menu');
    }
    return response.text();
  })
  .then(data => {
    footer.innerHTML = data;
  })
  .catch(error => {
    console.error('Erreur :', error);
  });

  var menu = document.getElementById("menu-list");
  var menuToggle = document.getElementById("menu-toggle");
  menuToggle.addEventListener("click", change);
  function change(){
    menu.classList.toggle("active");
  }