document.addEventListener('DOMContentLoaded', chargerFooter);

async function chargerFooter() {
  try {
    const footer = document.getElementById('footer');
    const reponseFooter = await fetch('/composants/footer/footer.html');

    if (!reponseFooter.ok) {
      throw new Error('Erreur lors du chargement du menu');
    }

    const html = await reponseFooter.text();
    footer.innerHTML = html;

  } catch (erreur) {
    console.error('Erreur :', erreur);
  }
  
}