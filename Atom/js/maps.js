// Yandex maps

ymaps.ready(function () {
	const map_1 = new ymaps.Map(
			"map_1",
			{
				center: [55.60372, 37.217364],
				zoom: 15,
			},
			{
				searchControlProvider: "yandex#search",
			}
		),
		myPlacemark = new ymaps.Placemark(
			map_1.getCenter(),
			{
				hintContent: "Атомсервис",
				balloonContent: "г. Москва, ул. Пушкина, д. 91, офис 12",
			},
			{
				// Опции.
				// Необходимо указать данный тип макета.
				iconLayout: "default#image",
				// Своё изображение иконки метки.
				// iconImageHref: "images/myIcon.gif",

				// Размеры метки.
				iconImageSize: [30, 42],
				// Смещение левого верхнего угла иконки относительно
				// её "ножки" (точки привязки).
				iconImageOffset: [-5, -38],
			}
		);
	const map_2 = new ymaps.Map(
			"map_2",
			{
				center: [55.046264, 82.934919],
				zoom: 15,
			},
			{
				searchControlProvider: "yandex#search",
			}
		),
		myPlacemark_2 = new ymaps.Placemark(
			map_2.getCenter(),
			{
				hintContent: "Атомсервис",
				balloonContent: "г. Новосибирск, ул. Некрасова, д. 80, офис 10",
			},
			{
				// Опции.
				// Необходимо указать данный тип макета.
				iconLayout: "default#image",
				// Своё изображение иконки метки.
				// iconImageHref: "images/myIcon.gif",

				// Размеры метки.
				iconImageSize: [30, 42],
				// Смещение левого верхнего угла иконки относительно
				// её "ножки" (точки привязки).
				iconImageOffset: [-5, -38],
			}
		);
	map_1.geoObjects.add(myPlacemark);
	map_2.geoObjects.add(myPlacemark_2);
});
