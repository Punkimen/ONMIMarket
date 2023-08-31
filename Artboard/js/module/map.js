export const initMap = (id) => {
	ymaps.ready(function () {
		const myMap = new ymaps.Map(
				`${id}`,
				{
					center: [56.099677, 37.048725],
					zoom: 15,
				},
				{
					searchControlProvider: "yandex#search",
				},
			),
			// Создаём макет содержимого.
			// MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
			// 	'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>',
			// ),
			myPlacemarkWithContent = new ymaps.Placemark(
				[56.099677, 37.048725],
				{
					// hintContent: "Собственный значок метки с контентом",
					balloonContent: "56.099677, 37.048725",
					iconContent: "",
				},
				{
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: "default#imageWithContent",
					// Своё изображение иконки метки.
					iconImageHref: "./img/icons/map_marker.svg",
					// Размеры метки.
					iconImageSize: [51, 73],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-26, -74],
					// Макет содержимого.
					// iconContentLayout: MyIconContentLayout,
				},
			);

		myMap.geoObjects.add(myPlacemarkWithContent);
		myMap.behaviors.disable("scrollZoom");
	});
};
