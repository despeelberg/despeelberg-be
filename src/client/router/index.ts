const routes = [
    {
        url: '404',
        html: require('./views/404.html'),
        title: "Error"
    },
    {
        url:'/',
        html: require('./views/index.html'),
        title: "Speelplein De Speelberg vzw | Home"
    },
    {
        url: '/voorouders',
        html: require('./views/parentinfo.html'),
        title: "Info voor ouders | Speelplein De Speelberg vzw"
    },
    {
        url: '/vooranimatoren',
        html: require('./views/animator.html'),
        title: "Info voor animatoren | Speelplein De Speelberg vzw"
    },
    {
        url: '/visie',
        html: require('./views/visie.html'),
        title: "Onze visie | Speelplein De Speelberg vzw"
    },
    {
        url: '/pit',
        html: require('./views/pit.html'),
        title: "De PIT | Speelplein De Speelberg vzw"
    },
    {
        url: '/vakanties',
        html: require('./views/vacation.html'),
        title: "Vakanties 2020 | Speelplein De Speelberg vzw"
    }
    ,
    {
        url: '/evenementen',
        html: require('./views/events.html'),
        title: "Evenementen | Speelplein De Speelberg vzw"
    }
];

window.addEventListener('load', route);
window.addEventListener('hashchange', route);

function route() {
    const hash = window.location.pathname;
    let found = false;

    for(let i = 0; i < routes.length; i++) {
        const route = routes[i];
        if(route.url == hash) {
            document.querySelector('.js-output').innerHTML = route.html;
            document.querySelector('#page-title').innerHTML = route.title;
            document.title = `Speelplein de Speelberg | ${route.title}`;
            found = true;
            break;
        }
    }

    console.log(found);

    if (!found) {
        document.querySelector('.js-output').innerHTML = routes[0].html;
        document.querySelector('#page-title').innerHTML = routes[0].title;
    }
}