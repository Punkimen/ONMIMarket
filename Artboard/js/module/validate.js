export const validate = () => {
	const phoneInputs = document.querySelectorAll('input[name="phone"]');
	phoneInputs.forEach((el) => {
		const mask = IMask(el, {
			mask: "+{7}(000)00-00-00",
		});
	});
};
