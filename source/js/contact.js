(() => {
  const contactList = document.querySelector(`.contact__list`);
  const contactItems = document.querySelectorAll(`.contact__item`);
  const contactItemWraps = document.querySelectorAll(`.contact__item-wrap`);
  const contactItemTitles = document.querySelectorAll(`.contact__item-title`);
  const contactItemTitlesH = document.querySelectorAll(`.contact__item-title h3`);
  const contactIconRights = document.querySelectorAll(`.contact__icon-right`);
  const contactIconLefts = document.querySelectorAll(`.contact__icon-left`);
  const contactMapFirst = document.querySelectorAll(`.contact__map-first`);
  const contactMapSecond = document.querySelectorAll(`.contact__map-second`);
  const contactYandex = document.querySelector(`.contact__yandex`);

  function init() {

    var myMap = new ymaps.Map("map", {
      center: [window.mapFirst, window.mapSecond],
      zoom: 16
    });
    var myPlacemarkWithContent = new ymaps.Placemark([55.784061, 37.450099], {
      hintContent: 'Компания REFmotors' // balloonContent: 'А эта — новогодняя',

    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      // iconImageHref: $('#path').val() + '/assets/img/map-pin.svg',
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

  for (let i = 0; i < contactItems.length; i++) {
    contactItemWraps[i].inert = true;

    document.addEventListener(`click`, (e) => {
      if (e.target === contactItemTitles[i] || e.target === contactItemTitlesH[i]) {
        e.preventDefault();

        window.mapFirst = contactMapFirst[i].innerText;
        window.mapSecond = contactMapSecond[i].innerText;
        ymaps.ready(init);

        if (contactItemTitles[i].classList.contains(`contact__item-title--closed`)) {
          for (let k = 0; k < contactItems.length; k++) {
            contactItems[k].classList.add(`visually-hidden`);
            contactItems[k].inert = true;
            contactItemWraps[k].classList.add(`visually-hidden`);
          }
          while (contactYandex.firstChild) {
            contactYandex.removeChild(contactYandex.firstChild);
          }
          contactList.classList.remove(`contact__list--scroll`);
          contactItemTitles[i].classList.remove(`contact__item-title--closed`);
          contactItemTitles[i].classList.add(`contact__item-title--opened`);
          contactItems[i].classList.remove(`visually-hidden`);
          contactItems[i].inert = false;
          contactItemWraps[i].inert = false;
          contactItemWraps[i].classList.remove(`visually-hidden`);
          contactIconRights[i].classList.add(`visually-hidden`);
          contactIconLefts[i].classList.remove(`visually-hidden`);
        } else if (contactItemTitles[i].classList.contains(`contact__item-title--opened`)) {
          for (let k = 0; k < contactItems.length; k++) {
            contactItems[k].inert = false;
            contactItemWraps[k].inert = true;
            contactItems[k].classList.remove(`visually-hidden`);
            contactItemWraps[k].classList.add(`visually-hidden`);
            contactIconRights[i].classList.remove(`visually-hidden`);
            contactIconLefts[i].classList.add(`visually-hidden`);
          }
          contactList.classList.add(`contact__list--scroll`);
          contactItemTitles[i].classList.add(`contact__item-title--closed`);
          contactItemTitles[i].classList.remove(`contact__item-title--opened`);
        }
      }
    });
  }
})();
