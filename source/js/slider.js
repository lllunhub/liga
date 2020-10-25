(() => {
  const partnerList = document.querySelector(`.partner__list-wrap`);
  const recallList = document.querySelector(`.recall__list-wrap`);

  let slider1 = new Swiper(partnerList, {
    slidesPerView: 1,
    spaceBetween: 20,
    a11y: false,
    // loop: true,
    navigation: {
      nextEl: `.partner__button-next`,
      prevEl: `.partner__button-prev`,
    },
    breakpoints: {
      1376: {
        slidesPerView: 4
      },
      1058: {
        slidesPerView: 3
      },
      740: {
        slidesPerView: 2
      }
    }
  });

  let slider2 = new Swiper(recallList, {
    slidesPerView: 1,
    spaceBetween: 20,
    a11y: false,
    loop: true,
    navigation: {
      nextEl: `.recall__button-next`,
      prevEl: `.recall__button-prev`,
    }
  });
})();
