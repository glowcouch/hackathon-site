document.querySelectorAll<HTMLElement>("[data-encoded]").forEach((elem) => {
	// get and decrypt data
	const encoded = elem.dataset.encoded;
	if (!encoded) return;
	const decrypted = atob(encoded);

	// get attribute to update
	const attr = elem.dataset.encodedAttr;

	if (attr) {
		// update that attribute
		elem.setAttribute(attr, decrypted);
	} else {
		// update the content if there is no `data-encoded-attr`
		elem.textContent = decrypted;
	}
});
