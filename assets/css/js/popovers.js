// Sélectionner tous les éléments avec la classe '.ville'
var villes = document.querySelectorAll('.ville');

// Créer un élément div pour le popover
var popover = document.createElement('div');

// Ajouter la classe 'popover' à l'élément div popover
popover.classList.add('popover');

// Ajouter l'élément popover au corps du document
document.body.appendChild(popover);

// Fonction pour afficher le popover
function showPopover(ville, event) {
	// Obtenir les attributs data-* de l'élément '.ville'
	const name = ville.getAttribute('data-name');
	const details = ville.getAttribute('data-details');
	const contactName = ville.getAttribute('data-contact');
	const emailCentre = ville.getAttribute('data-email');
	const address = ville.getAttribute('data-address');
	const phone = ville.getAttribute('data-tel');

	// Définir le contenu HTML du popover avec les données obtenues
	popover.innerHTML = `
        <h4>${name}</h4>
        <p><strong>Adresse:</strong> ${address}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${emailCentre}</p>
        <p><strong>Contact:</strong> ${contactName}</p>
        <p><strong>Détails:</strong> ${details}</p>
    `;

	// Positionner le popover près de l'élément cliqué
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

// Parcourir tous les éléments '.ville' et ajouter un événement de clic à chacun
villes.forEach((ville) => {
	ville.addEventListener('click', function (event) {
		event.preventDefault();
		showPopover(ville, event);
	});
});

// Ajouter un événement pour cacher le popover lorsqu'on clique en dehors
document.addEventListener('click', function (event) {
	if (!popover.contains(event.target) && !event.target.closest('.ville')) {
		popover.style.display = 'none';
	}
});
