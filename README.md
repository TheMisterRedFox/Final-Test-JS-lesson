# 🟨 2 Exercices of JS 🟨

## Context

When I was learning JavaScript, my teacher asked us to do two exercises, here they are:

## Exercice 1 : The Tic Tac Toe 🎮

This one was quite difficult, it was made with `vanilla JavaScript`. The principle is simple, even if I think you know Tic Tac Toe game, you play on a 3x3 grid and you must line up 3 identical symbols before your opponent. Here, the adversary is a computer.
#### 🇫🇷 Instructions here (In French) : 
```
## Partie 1 : (5 points)

La partie se déroule entre un joueur et l'ordinateur :

- au début de la partie le joueur entre son nom (il ne devra plus pouvoir le changer par la suite à part s’il recharge la page)
- ensuite il peut cliquer sur une des cases vides lorsque c'est son tour de jouer
- l'ordinateur joue aléatoirement sur une case vide
- lors qu'une partie se finie, le nom du gagnant ou "Egalité" s'affiche
(Note : bien évidemment, lorsque le joueur clique sur une case déjà prise il ne se passe rien)

## Partie 2 : (3 points)

- il y a un compteur pour le score, on peut jouer autant de partie que l'on veut

## Partie 3 : (2 points)

- Le joueur décide au début de chaque partie s'il joue en premier ou si l'ordinateur joue en premier

### Bonus : (1 point)

- Ajoutez un code de triche : si (et seulement si) le joueur s'appelle `LUCA` alors il peut jouer sur une case déjà prise par l'ordinateur

Pas de consignes particulières pour le design, essayez au maximum de faire quelque chose d'agréable à utiliser ***une fois que vous avez un programme qui fonctionne.***

Normalement, vous connaissez déjà mes standards de code mais je vous les remets au cas où :

- Votre HTML et votre CSS doivent passer le W3C validator
- interdit d’utiliser  `float`
- interdit d’utiliser  `!important`
- interdit d’utiliser  `var`
- interdit d’utiliser  `==` et `!=`  à la place de `===` et `!==`
- pas de mots en français dans le code (je précise bien dans le code, pas dans le contenu, votre site peut être en français, pas votre code)
- vous devez formaté/indenté correctement avec Prettier
```

## Exercice 2 : The FilmFinder Website 🎥

I love coding with APIs! This exercise uses the https://www.omdbapi.com/ API to make a site with a search bar that gives us, depending on what we put, the appropriate results (as if you were looking for a film on a cinema site in short!)
#### 🇫🇷 Instructions here (In French) : 
``` ## Consigne

Implémenter le site ci-dessus grâce à l’api [https://www.omdbapi.com/](https://www.omdbapi.com/). Comme vu en classe, le token ne devra pas être dans votre code, j’utiliserais le mien. Le design devra être respecté, pour le bleu il s’agit du **#5e7ce2** et le gris **#c9c9c9**.

## Barème

Il n’y a pas de token dans le code **(1 point)**

Il existe un système simple pour ajouter un token depuis l’interface avec vérification de sa validité **(2 points)**

La recherche fonctionne pour une requête valide (ex: “batman”, “destination”) et affiche les cartes des films correspondants **(3 points)**

Un message (ou un spinner) prévient l’utilisateur que la recherche est en cours **(1 points)**

Un message prévient l’utilisateur lorsqu’il n’y a pas de résultat **(1 points)**

Le design est respecté **(2 points)**

### Bonus

Vous affichez la description du film dans les cards

```

### How To use ? 🤩🎥

You need an https://www.omdbapi.com/ API Free Key, then you enter with the button "API KEY", then you can use the website !


## How to go to the website ?
### FilmFinder : https://themisterredfox.github.io/Final-Test-JS-lesson/FilmFinder/
### Tic Tac Toe : https://themisterredfox.github.io/Final-Test-JS-lesson/Morpion
