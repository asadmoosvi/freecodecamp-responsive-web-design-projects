const menuBtn = document.querySelector('.main-header__menu');
const navBar = document.querySelector('.nav');
menuBtn.onclick = function() {
  navBar.classList.toggle('nav-opened');
  let spanElem = menuBtn.querySelector('span');
  if (spanElem.textContent === 'menu') {
    spanElem.textContent = 'close';
  } else {
    spanElem.textContent = 'menu';
  }
}

// setup highlightjs
hljs.highlightAll();

const sections = document.querySelectorAll('.main-section');
const links = document.querySelectorAll('.nav__link');

window.onscroll = function() {
  sections.forEach(section => {
    if (pageYOffset >= section.offsetTop - 100) {
      links.forEach(link => {
        link.classList.remove('link-active');
        if (link.getAttribute('href').includes(section.getAttribute('id'))) {
          link.classList.add('link-active');
        }
      });
    }
  });
}
