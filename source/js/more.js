(() => {
  const recallPosts = document.querySelectorAll(`.recall__post`);
  const recallPostsDiv = document.querySelectorAll(`.recall__post div`);
  const recallMore = document.querySelectorAll(`.recall__more`);

  for (let i = 0; i < recallPosts.length; i++) {
    recallMore[i].addEventListener(`click`, () => {
      recallMore[i].style.display = `none`;
      recallPostsDiv[i].style.height = `100%`;
    });

    document.addEventListener(`click`, (e) => {
      if (e.target.classList.contains(`recall__button`)) {
        recallPostsDiv[i].style.height = `160px`;
        recallMore[i].style.display = `block`;
      }
    });
  }
})();
