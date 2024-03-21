document.addEventListener("contextmenu", (event) =>
  event.preventDefault()
); /* Désactiver le clic droit */
document.addEventListener("keydown", (event) => {
  /* Désactiver les raccourcis clavier pour le copier-coller */
  if (event.ctrlKey || event.metaKey) {
    switch (event.key) {
      case "c":
      case "C":
      case "x":
      case "X":
        event.preventDefault();
        break;
      default:
        break;
    }
  }
});

// Créez un nouvel élément script
var script = document.createElement('script');
// Ajoutez le src et les attributs nécessaires
script.src = "https://unpkg.com/react-stackai@latest/dist/vanilla/vanilla-stackai.js";
script.setAttribute('data-project-url', "https://www.stack-ai.com/embed/f745e3ca-0b65-4b34-aaed-0e4c3666e5cb/c9ac25dd-fb37-4c2d-a3db-288ec7dfb888/65fbf8a4037b7d770d31ed45");

// Attendez que le document soit chargé pour ajouter le script
document.addEventListener('DOMContentLoaded', function() {
    // Ajoutez le script à l'élément head
    document.head.appendChild(script);
});

