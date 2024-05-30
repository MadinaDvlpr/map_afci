// Var qui contient la map
var map = document.querySelector("#map");

// Selectionne les différents paths (formes géométriques)
var paths = map.querySelectorAll(".map__image a");

var links = map.querySelectorAll(".map__list a");

// Polyfill pour rendre le forEach accessible partout:
if (NodeList.prototype.forEach === undefined) {

    NodeList.prototype.forEach = function (callback) {
        [].forEach.call(this, callback);
    }
}

var activeArea = function (id) {
    // Enlève la class is-active sur tous les éléments
    map.querySelectorAll(".is-active").forEach(function (item) {
        item.classList.remove("is-active");
    })

    if (id !== undefined) {
        // Désigne le lien qui est directement actif
        document.querySelector("#list-" + id).classList.add("is-active");

        document.querySelector("#region-" + id).classList.add("is-active");
    }
}

// Sélectionne tous les chemins, puis pour chacun de ces chemins, appelle une fonction 
// qui prendra ce chemin comme paramètre et y ajoutera un événement.
paths.forEach(function (path) {
    path.addEventListener("mouseenter", function (e) {
        // debugger;
        // console.log("Salut");

        // On enlève region- et on le remplace par rien, pour se retrouver seulement avec l'id
        var id = this.id.replace("region-", "");

        activeArea(id);

    })
});

links.forEach(function (link) {
    link.addEventListener("mouseenter", function (e) {
        // debugger;
        // console.log("Salut");
        var id = this.id.replace("list-", "");

        activeArea(id);
    })
});

map.addEventListener('mouseover', function () {
    activeArea()
})

