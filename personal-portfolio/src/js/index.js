// menu button
const menu = document.querySelector('.menu');
const header = document.querySelector('.header');

let animationApplied = false;
menu.addEventListener('click', () => {
  header.classList.toggle('show');
  if (!animationApplied) {
    header.classList.add('animate');
    animationApplied = true;
  }
});
