
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

