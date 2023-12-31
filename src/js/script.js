const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close')
    hideElem = document.querySelector('.menu__overlay')

hamburger.addEventListener('click', () => {
    menu.classList.add('active')
});

closeElem.addEventListener('click', () => {
    hideContent();
});

hideElem.addEventListener('click', () => {
    hideContent();
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      hideContent();
    }
  });

function hideContent () {
    menu.classList.remove('active')
}
 
const procent = document.querySelectorAll('.scale__procent')
    line = document.querySelectorAll('.scale__line-front')

procent.forEach( (item, i) => {
    line[i].style.width = item.innerHTML;
});