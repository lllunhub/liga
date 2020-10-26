(() => {
  const partnerList = document.querySelector(`.partner__list-wrap`);
  const recallList = document.querySelector(`.recall__list-wrap`);
  const stageList = document.querySelector(`.stage__slider`);
  const dotsList = document.querySelector(`.stage__array`);

  let dots = [];

  for (let i = 0; i < dotsList.children.length; i++) {
    dots.push(dotsList.children[i].innerHTML);
  }

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

  let slider3 = new Swiper(stageList, {
    slidesPerView: 1,
    spaceBetween: 20,
    a11y: false,
    navigation: {
      nextEl: `.stage__button-next`,
      prevEl: `.stage__button-prev`,
    },
    pagination: {
      el: `.stage__dots`,
      clickable: `true`,
      renderBullet: function(index, className) {
        return `<li class="` + className + `">` + (dots[index]) + `</li>`;
      }
    }
  });
})();
