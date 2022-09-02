// window.addEventListener('scroll', function () {
//     console.log({
//         pageYOffset: window.pageYOffset,
//         scrollTop: document.documentElement.scrollTop,
//         clientTop: document.documentElement.clientTop
//     });
// });

// const gra = function (min, max) {
//     return Math.random() * (max - min) + min;
// }

// const gri = function (min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const init = function () {
//     let items = document.querySelectorAll('section');
//     for (let i = 0; i < items.length; i++) {
//         items[i].style.minHeight = gra(20, 30) + 'vh';
//         items[i].style.background = randomColor({ luminosity: 'light' });
//     }
//     cssScrollSnapPolyfill()
// }
// init();

const pg_header = document.querySelector('header');
const hero_img = document.getElementById('#hero-img');
window.onscroll = () =>{
    if (window.scrollY) {
        pg_header.classList.add('hide-header')
    }

    // hero_img.style.cssText = `

    // `
};

const onScrollStop = callback => {
    let isScrolling;
    window.addEventListener(
        'scroll',
        (e) => {
            clearTimeout(isScrolling);
            isScrolling = setTimeout(() => {
                callback();
            }, 150);
        },
        false
    );
};

onScrollStop(() => {
    pg_header.classList.remove('hide-header')
});

