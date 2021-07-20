const navBar = document.querySelector(".header__nav");
const menuBtn = document.querySelector(".header__btn");
menuBtn.onclick = function () {
  const span = menuBtn.querySelector('span');
  if (span.textContent === 'menu') {
    navBar.style.display = 'block';
    span.textContent = 'close';
    menuBtn.style.height = '50%';
  } else {
    span.textContent = 'menu';
    navBar.style.display = 'none';
    menuBtn.style.height = '100%';
  }
};
