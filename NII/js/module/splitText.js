export const splitText = (el) => {
	el.innerHTML = el.textContent.trim().replace(/(\S*)/g, (m) => {
		return (
			`<div class="word">` +
			m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='letter'>$&</div>") +
			`</div>`
		);
	});
	return el;
};
