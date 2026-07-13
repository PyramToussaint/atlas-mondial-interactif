# Atlas Mondial Interactif

Application web responsive développée pour le **Devoir 2 — LOG3500 (Été 2026)**.
L'utilisateur saisit le nom d'un pays ; l'application interroge l'API REST Countries (v3.1) et affiche une fiche d'identité du pays trouvé (drapeau, nom, capitale, population, région, monnaie et langues).

## Structure du projet

- index.html
- css/style.css
- js/app.js
- README.md

## Fonctionnalités

- HTML5 sémantique (header, nav, main, section, footer) et mise en page en Flexbox/CSS Grid.
- Design responsive (media queries pour smartphone, tablette, ordinateur).
- Indicateur de chargement affiché pendant la requête réseau.
- Formulaire validé côté client : event.preventDefault() et .trim() sur la saisie ; aria-invalid="true", message d'erreur relié via aria-describedby, réinitialisation automatique dès correction.
- Appels réseau en fetch() + async/await dans un bloc try...catch.
- Gestion des erreurs :
  - Résultat vide ou statut HTTP en échec → « Aucun résultat trouvé pour cette recherche. Veuillez vérifier l'orthographe. »
  - Erreur réseau → « Connexion impossible. Veuillez vérifier votre accès à internet. »
- Injection des données exclusivement via textContent (aucun innerHTML) pour prévenir les failles XSS.

## Auteur

PyramToussaint — LOG3500, ISTEAH, Été 2026.

## Source des données

Données fournies par l'API REST Countries : https://restcountries.com/v3.1/name/{nom_du_pays}
