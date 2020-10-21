(() => {
  const contactList = document.querySelector(`.contact__list`);
  const contactItems = document.querySelectorAll(`.contact__item`);
  const contactItemWraps = document.querySelectorAll(`.contact__item-wrap`);
  const contactItemTitles = document.querySelectorAll(`.contact__item-title`);
  const contactItemTitlesH = document.querySelectorAll(`.contact__item-title h3`);
  const contactIconRights = document.querySelectorAll(`.contact__icon-right`);
  const contactIconLefts = document.querySelectorAll(`.contact__icon-left`);

  for (let i = 0; i < contactItems.length; i++) {
    contactItemWraps[i].inert = true;

    document.addEventListener(`click`, (e) => {
      if (e.target === contactItemTitles[i] || e.target === contactItemTitlesH[i]) {
        e.preventDefault();

        if (contactItemTitles[i].classList.contains(`contact__item-title--closed`)) {
          for (let k = 0; k < contactItems.length; k++) {
            contactItems[k].classList.add(`visually-hidden`);
            contactItems[k].inert = true;
            contactItemWraps[k].classList.add(`visually-hidden`);
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
