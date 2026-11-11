const form = document.getElementById('mon-formulaire');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const erreurEmail = document.getElementById('erreur-email');
const erreurPassword = document.getElementById('erreur-password');

form.addEventListener('submit', function(e) {
  
    e.preventDefault();

    let isValid = true;


    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!regexEmail.test(emailInput.value)) {
        erreurEmail.textContent = "Veuillez entrer une adresse email valide.";
        isValid = false;
    } else {
        erreurEmail.textContent = "";
    }

   
    const regexPassword = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!regexPassword.test(passwordInput.value)) {
        erreurPassword.textContent = "Le mot de passe doit contenir 8 caractères, 1 majuscule et 1 chiffre.";
        isValid = false;
    } else {
        erreurPassword.textContent = "";
    }

   
    if (isValid) {
        alert("Formulaire validé avec succès ! 🎉");
        form.reset();
    }
});