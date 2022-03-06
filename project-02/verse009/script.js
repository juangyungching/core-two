const fade = document.querySelector('.fade');
const raven = document.querySelector('.raven-pop-up')

setTimeout(() => {
    fade.classList.add('hide');
}, 1000);


setTimeout(() => {
    raven.classList.remove('hide');
}, 2000);

