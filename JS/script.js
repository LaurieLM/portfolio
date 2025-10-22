const buttonAccueil = document.getElementById("accueil");
const buttonHtmlCss = document.getElementById("html-css");
const buttonJavascript = document.getElementById("javascript");
const content = document.querySelector("main");

const accueil = `
  <h1>PORTFOLIO</h1>
        <h2>LESPINASSE-MARINI Laurie</h2>
        <section id="presentation">
            <h3>PRESENTATION</h3>
            <p>Bonjour, <br><br>
                Je m'appelle Laurie LESPINASSE-MARINI, j'ai 29 ans et je vis sur Lyon. Je suis passionnée de
                technologies, de sciences et de jeux vidéos. <br>Je suis actuellement en formation de Développeur
                Full-Stack
                à Ada Tech School. <br><br>
                Je m'intéresse beaucoup à la partie Front-End du développement web ainsi qu'à la partie design d'un site
                web ou d'un jeu vidéo. <br>
                Idéalement, après ma formation je souhaiterai travailler dans le développement du jeu vidéo ou dans la
                conception de site web. <br><br>
                Aujourd'hui je vous partage quelqu'uns de mes exercices réalisés pendant ma formation qui pourront, je
                l'espère, vous montrer mon avancée dans le domaine. <br><br>
                Je vous souhaite une bonne visite !
            </p>
        </section>
        <section>
            <h3>COMPETENCES</h3>
            <div id="comp-container">
                <ul class="element1">
                    <li>HTML / CSS</li>
                    <li>JavaScript</li>
                    <li>Terminal</li>
                    <li>Protocol Web</li>
                </ul>
                <ul class="element2">
                    <li>Accessibilité</li>
                    <li>Git / GitHub</li>
                    <li>Responsive Mobil First</li>
                    <li>FIGMA</li>
                </ul>

            </div>

        </section>
        <section>
            <h3>LOISIRS</h3>
            <div id="loisirs-container">
                <ul class="element1">
                    <li>Développement Web</li>
                    <li>Jeux Vidéo</li>
                    <li>Peinture / Dessin</li>
                    <li>Photographie</li>
                </ul>
                <ul class="element2">
                    <li>Musique</li>
                    <li>Cuisine </li>
                    <li>Animaux</li>
                    <li>Nature</li>
                </ul>
            </div>

        </section>
`;
const htmlCSS = `
        <h1>HTML / CSS</h1>
        <section class="container">
            <h3>FLEXBOX</h3>
            <p>
                Exercice où j'ai dû disposer 6 images en utilisant la méthode <strong>FLEX</strong> afin que les images
                se positionnent à
                l'écran en fonction de la taille d'écran.
            </p>
            <div class="container-first">
                <div class="container-second">
                    <img id="flex-1440" src="./ASSETS/Flex_1024px.png" alt="">
                    <img id="flex-1024" src="./ASSETS/Flex_1440px.png" alt="">
                </div>
                <div class="container-second">
                    <img id="flex-html" src="./ASSETS/Flex_HTML.png" alt="">
                    <img id="flex-css" src="./ASSETS/Flex_CSS.png" alt="">
                </div>
            </div>
        </section>
        <section class="container">
            <h3>GRID</h3>
            <p>
                Exercice où j'ai dû disposer 7 blocs en utilisant la méthode <strong>GRID</strong> afin qu'ils
                s'affichent de différentes
                tailles.
            </p>
            <div class="container-first">
                <div class="grid-container-second">
                    <img id="grid-result" src="./ASSETS/Grid.png" alt="">
                    <img id="grid-html" src="./ASSETS/Grid_html.png" alt="">
                </div>
                <div class="grid-container-second">
                    <img id="grid-css1" src="./ASSETS/Grid_css1.png" alt="">
                    <img id="grid-css2" src="./ASSETS/Grid_css2.png" alt="">
                </div>
            </div>
        </section>
        <section class="container">
            <h3>RESPONSIVE</h3>
            <p>
                Exercice où je disposais d'une maquette mobil (375px) et desktop (1440px) que je devais reproduire en
                <strong>Mobil
                    First</strong> afin que le site soit <strong>RESPONSIVE</strong>.
            </p>
            <div class="responsive-container">
                <a id="base-apparel" href="https://baseapparellaurie.netlify.app/">Voir le site</a>
            </div>
        </section>
`;
const javascript = `
        <h1>JAVASCRIPT</h1>
        <section class="container">
            <h3>FONCTIONS</h3>
            <p class="enonce">
                Je vous présente ici 2 façons différentes de réaliser cet exercice sur les <strong>FONCTIONS</strong> où
                la console doit retourner le
                somme d'une addition.
            </p>
            <div class="javascript-container">
                <img id="fonction-1" src="./ASSETS/Fonction_1.png" alt="">
                <p>
                    J'ai procéder de la manière suivante : <br><br>
                    Création d'une <strong>FONCTION</strong> qui ne prend pas de paramètre<br>
                    Ici l'addition se fait dans le <strong>consol.log</strong><br><br>
                    Création d'une <strong>FONCTION</strong> qui prend en paramètre 3 nombres<br>
                    Cela permet de créer directement des variables qui contiennent les nombres à additionner et de
                    pouvoir les changer plus facilement
                </p>
            </div>
            <p class="enonce">
                Je vous présente ici un exercice sur les <strong>FONCTIONS</strong> où
                la console doit retourner dans un premier temps le carré d'un nombre puis dans un deuxième temps le
                résultat précédent multiplié par 10.
            </p>
            <div class="javascript-container" id="fonction-2-container">
                <img id="fonction-2-img" src="./ASSETS/Fonction_2.png" alt="">
                <p id="fonction-2-p">
                    J'ai procéder de la manière suivante : <br><br>
                    Création d'une fonction qui prend en paramètre un nombre <br>
                    Création d'un <strong>"return number**2"</strong> qui permet de faire le carré du nombre donné<br>
                    Création d'une variable qui permet de stocké le résultat de ce premier calcul <br><br>
                    Création d'une nouvelle fonction qui prend en paramètre un nombre <br>
                    Création d'un <strong>"return number*10"</strong> qui permet de multiplier le nombre par 10<br>
                    J'appelle la deuxième fonction en lui passant le nom de la variable contenant le résultat de la
                    première fonction en paramètre, cela récupère bien le carré du nombre donné et le multiplie par 10
                </p>
            </div>
        </section>

        <section class="container">
            <h3>CONDITIONS</h3>
            <p class="enonce">
                Je vous présente ici un exercice sur les <strong>CONDITIONS</strong> où la console doit retourner "Le
                chiffre est : positif" ou "Le chiffre est : négatif" selon le cas.
            </p>
            <div class="javascript-container" id="condition-container">
                <img id="condition-1" src="./ASSETS/Condition_1.png" alt="">
                <p>
                    J'ai procéder de la manière suivante : <br><br>
                    Création d'une <strong>FONCTION</strong> qui prend en paramètre un nombre <br>
                    Création d'une condition <strong>"IF / ELSE"</strong> à l'intérieur de la fonction
                    En mettant <strong>"if (number >= 0)"</strong> cela permet de dire <strong>"Si le nombre est
                        supérieur ou
                        égal alors renvoie ça sinon tu renvoie ceci"</strong>
                </p>
            </div>
        </section>
`;

// HTML
buttonHtmlCss.addEventListener("click", () => {
  content.innerHTML = htmlCSS;
});

// JAVASCRIPT
buttonJavascript.addEventListener("click", () => {
  content.innerHTML = javascript;
});

// ACCUEIL
buttonAccueil.addEventListener("click", () => {
  content.innerHTML = accueil;
});
