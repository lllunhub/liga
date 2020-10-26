(() => {
  ymaps.ready(init);

  function init() {

    var myMap = new ymaps.Map("map", {
      center: [58.616074, 49.683860],
      zoom: 16
    });
    var myPlacemarkWithContent = new ymaps.Placemark([55.784061, 37.450099], {
      hintContent: 'Компания REFmotors' // balloonContent: 'А эта — новогодняя',

    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/map-pin.svg',
      // Размеры метки.
      iconImageSize: [48, 48],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-24, -24],
      // Смещение слоя с содержимым относительно слоя с картинкой.
      iconContentOffset: [15, 15]
    });
    myMap.geoObjects.add(myPlacemarkWithContent); //отключаем зум колёсиком мышки

    myMap.behaviors.disable('scrollZoom'); //на мобильных устройствах... (проверяем по userAgent браузера)

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      //... отключаем перетаскивание карты
      myMap.behaviors.disable('drag');
    }
  }
})();
