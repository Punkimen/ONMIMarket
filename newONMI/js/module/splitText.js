export const splitText = (el) => {
	el.innerHTML = el.textContent.trim().replace(/(\S*)/g, (m) => {
		return (
			`<span class="word">` +
			m.replace(/(-|#|@)?\S(-|#|@)?/g, "<span class='letter'>$&</span>") +
			`</span>`
		);
	});
	return el;
};

