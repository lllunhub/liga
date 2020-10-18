(() => {
  const body = document.querySelector(`body`);
  const header = document.querySelector(`.header`);
  const main = document.querySelector(`.main`);
  const footer = document.querySelector(`.footer`);

  const headerLogo = header.querySelector(`.header__logo`);
  const headerPageWrap = header.querySelector(`.header__page-wrap`);
  const headerPhone = header.querySelector(`.header__phone`);
  const headerPopup = header.querySelector(`.header__popup`);

  const headerNavOpen = header.querySelector(`.header__nav-open`);
  const nav = header.querySelector(`.nav`);
  const navClose = nav.querySelector(`.nav__close-nav`);

  nav.inert = true;

  function onMenuEscPress(e) {
    if (e.key === `Escape`) {
      e.preventDefault();
      closeMenu();
    }
  }

  function openMenu() {
    nav.classList.remove(`nav--closed`);
    nav.classList.add(`nav--opened`);
    nav.inert = false;
    headerLogo.inert = true;
    headerPageWrap.inert = true;
    headerPhone.inert = true;
    headerPopup.inert = true;
    main.inert = true;
    footer.inert = true;
    body.classList.add(`body-inert`);
    document.addEventListener(`keydown`, onMenuEscPress);
  }

  function closeMenu() {
    nav.classList.remove(`nav--opened`);
    nav.classList.add(`nav--closed`);
    nav.inert = true;
    headerLogo.inert = false;
    headerPageWrap.inert = false;
    headerPhone.inert = false;
    headerPopup.inert = false;
    main.inert = false;
    footer.inert = false;
    body.classList.remove(`body-inert`);
    document.removeEventListener(`keydown`, onMenuEscPress);
  }

  headerNavOpen.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (nav.classList.contains(`nav--closed`)) {
      openMenu();
    }
  });

  navClose.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (nav.classList.contains(`nav--opened`)) {
      closeMenu();
    }
  });
})();
