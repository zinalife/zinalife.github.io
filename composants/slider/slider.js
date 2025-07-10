document.addEventListener('DOMContentLoaded', chargerSlider);

async function chargerSlider() {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'composants/slider/slider.css';
  document.head.appendChild(link);

  try {
    const slider = document.getElementById('slider');
    const response = await fetch('/composants/slider/slider.html');

    if (!response.ok) {
      throw new Error('Erreur lors du chargement du slider');
    }

    const html = await response.text();
    slider.innerHTML = html;
    let slideIndex = 1;
    showSlides(slideIndex);

    // Fonction pour naviguer entre les slides (précédent/suivant)
    // Cette fonction est attachée à l'objet window pour être accessible globalement
    // depuis les attributs onclick du HTML
    window.plusSlides = function(n) {
      // n = -1 pour slide précédente, n = 1 pour slide suivante
      // slideIndex += n : ajoute n à slideIndex et met à jour la variable
      // Puis appelle showSlides avec le nouvel index
      showSlides(slideIndex += n);
    }
  

    // Fonction pour naviguer directement vers une slide spécifique
    // Utilisée quand on clique sur les vignettes (thumbnails)
    window.currentSlide = function(n) {
      // slideIndex = n : définit directement l'index de la slide à afficher
      // Puis appelle showSlides avec ce nouvel index
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("demo");
      let captionText = document.getElementById("caption");
      if (n > slides.length) { slideIndex = 1 }
      if (n < 1) { slideIndex = slides.length }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      console.log(slides);
      dots[slideIndex - 1].className += " active";
      captionText.innerHTML = dots[slideIndex - 1].alt;
    }
  } catch (error) {
    console.error('Erreur :', error);
  }


}

