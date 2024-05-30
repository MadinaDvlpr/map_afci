// Sélectionner tous les éléments avec la classe '.ville'
var villes = document.querySelectorAll('.ville');

// Créer un élément div pour le popover
var popover = document.createElement('div');

// Ajouter la classe 'popover' à l'élément div popover
popover.classList.add('popover');

// Ajouter l'élément popover au corps du document
document.body.appendChild(popover);

// Fonction pour afficher le popover au survol
function showPopoverOnHover(ville, event) {
	// Obtenir les attributs data-* de l'élément '.ville'
	const name = ville.getAttribute('data-name');
	const details = ville.getAttribute('data-details');
	const contactName = ville.getAttribute('data-contact');
	const emailCentre = ville.getAttribute('data-email');
	const address = ville.getAttribute('data-address');
	const phone = ville.getAttribute('data-tel');
	const centerSlug = ville.getAttribute('data-slug');

	// Définir le contenu HTML du popover avec les données obtenues
	popover.innerHTML = `
        <h4>${name}</h4>
        <p><strong>Adresse:</strong> ${address}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
        <p class="popover-email"><strong>Email:</strong> ${emailCentre}</p>
        <p><strong>Contact:</strong> ${contactName}</p>
        <p><strong>Détails:</strong> ${details}</p>
		 <!--<a href="${centerSlug}-afci.html" class="btn btn-primary">Découvrir</a> Lien vers la page spécifique du centre -->
    `;

	// Positionner le popover près de l'élément survolé
	const popoverWidth = popover.offsetWidth;
	const popoverHeight = popover.offsetHeight;
	const pageWidth = window.innerWidth;
	const pageHeight = window.innerHeight;

	let left = event.pageX + 10;
	let top = event.pageY + 10;

	if (left + popoverWidth > pageWidth) {
		left = pageWidth - popoverWidth - 10;
	}

	if (top + popoverHeight > pageHeight) {
		top = pageHeight - popoverHeight - 10;
	}

	popover.style.left = `${left}px`;
	popover.style.top = `${top}px`;

	// Afficher le popover en le rendant visible
	popover.style.display = 'block';
}

// Fonction pour masquer le popover lorsque le curseur quitte la zone de survol
function hidePopoverOnLeave() {
	popover.style.display = 'none';
}

// Parcourir tous les éléments '.ville' et ajouter des événements de survol
villes.forEach((ville) => {
	ville.addEventListener('mouseover', function (event) {
		showPopoverOnHover(ville, event);
	});

	ville.addEventListener('mouseout', function (event) {
		hidePopoverOnLeave();
	});
});
