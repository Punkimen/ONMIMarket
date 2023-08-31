{
	const token = document.querySelector("#token").value;
	const copyBtn = document.querySelector("#copy-token");
	const notification = document.querySelector("#modal-copyed");

	copyBtn.addEventListener("click", (e) => {
		notification.classList.add("show");
		setTimeout(() => {
			notification.classList.remove("show");
		}, 2000);
		navigator.clipboard.writeText(token);
	});
}

{
	const circle = document.querySelector("#circle");
	const percent = document.querySelector(".loader-circle__percent");
	const descr = document.querySelector(".loader-circle__descr");
	const tokenomicsStats = document.querySelectorAll(".tokenomics-stat");

	const setCircle = (percentVal, descrVal) => {
		percent.textContent = `${percentVal}%`;
		descr.textContent = descrVal;
		const percentCss = (880 * percentVal) / 100 - 880;
		circle.style.strokeDashoffset = percentCss;
	};

	removeAllClasses = (arr, className) => {
		arr.forEach((element) => {
			element.classList.remove(className);
		});
	};
	tokenomicsStats.forEach((el) => {
		el.addEventListener("click", (e) => {
			removeAllClasses(tokenomicsStats, "current");
			const percent = parseFloat(
				el.querySelector(".tokenomics__row-value").textContent
			);
			const descr = el.querySelector(".tokenomics__row-label").textContent;
			el.classList.add("current");
			setCircle(percent, descr);
		});
	});
}
