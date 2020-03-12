if(!window.location.pathname.includes('view')) {
    (() => {
        const header = document.querySelector('.main-nav');

        window.addEventListener('scroll', async () => {
            if(window.scrollY > 600) {
                header.classList.add('main-nav--top');
            } else {
                header.classList.remove('main-nav--top');
            }
        })
    })();
}
(() => {
    const nav = document.querySelector('.js-nav');
    const btn = document.querySelector('.js-menubtn');

    btn.addEventListener('click', () => {
        nav.classList.toggle('main-nav__list--show')
    });
})()
