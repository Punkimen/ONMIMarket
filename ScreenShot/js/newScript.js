"use strict";
let validateForms = function (selector, rules, succesModal, yaGoal) {
	new window.JustValidate(selector, {
		rules: rules,
		messages: {
			email: {
				required: "The field is required.",
				email: "Enter a valid Email",
			},
			text: "The field is required.",
			myField: "The field is required.",
		},

		submitHandler: function (form) {
			let formData = new FormData(form);
			let xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function () {
				// Тестовый вариант локально (без отправки на сервер)
				let modal = document.getElementById("notifications_success");
				modal.style.opacity = 1;
				setInterval(function () {
					modal.style.opacity = 0;
				}, 3000);
				// Тестовый вариант локально (без отправки на сервер) Конец!

				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						console.log("Отправлено");

						let modal = document.getElementById("notifications_success");
						modal.style.opacity = 1;
						setInterval(function () {
							modal.style.opacity = 0;
						}, 4000);
					}
				}
			};

			xhr.open("POST", "mail.php", true);
			xhr.send(formData);
			form.reset();
		},
	});
};

validateForms(
	"#form",
	{
		text: {
			required: true,
		},
		email: {
			required: true,
			email: true,
		},
		myField: {
			required: true,
		},
	},
	".modal",
	"send goal"
);
