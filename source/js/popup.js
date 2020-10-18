(() => {
  const body = document.querySelector(`body`);
  const header = document.querySelector(`.header`);
  const main = document.querySelector(`.main`);
  const footer = document.querySelector(`.footer`);

  const popup = document.querySelector(`.popup`);
  const popupClose = document.querySelector(`.popup__close`);
  const popupAfter = document.querySelector(`.popup__after`);
  const popupAfterClose = document.querySelector(`.popup__after-close`);

  popup.inert = true;

  function onPopupEscPress(e) {
    if (e.key === `Escape`) {
      e.preventDefault();
      closePopup();
    }
  }

  function openPopup() {
    popup.classList.remove(`visually-hidden`);
    popup.inert = false;
    popupAfter.inert = true;
    header.inert = true;
    main.inert = true;
    footer.inert = true;
    body.classList.add(`body-inert`);
    document.addEventListener(`keydown`, onPopupEscPress);
  }

  function closePopup() {
    popup.classList.add(`visually-hidden`);
    popup.inert = true;
    popupAfter.inert = true;
    header.inert = false;
    main.inert = false;
    footer.inert = false;
    body.classList.remove(`body-inert`);
    document.removeEventListener(`keydown`, onPopupEscPress);
  }

  document.addEventListener(`click`, (e) => {
    if (e.target.classList.contains(`popup-click`)) {
      e.preventDefault();
      openPopup();
    }
  });

  popupClose.addEventListener(`click`, (e) => {
    e.preventDefault();
    closePopup();
  });

  popupAfterClose.addEventListener(`click`, (e) => {
    e.preventDefault();
    closePopup();
  });
})();
