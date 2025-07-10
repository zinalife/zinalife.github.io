document.addEventListener("DOMContentLoaded", chargerFormContact);

function chargerFormContact() {
    const formContact = document.getElementById("contact");
    fetch("/composants/formulairedecontact/form.html")
        .then(response => response.text())
        .then(html => {
            formContact.innerHTML = html;
            console.log(formContact.innerHTML);
        })
        .catch(error => console.error('Error loading form contact:', error));
}