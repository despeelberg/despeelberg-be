const blocks = [
    {
        title: 'Maatregelen i.v.m. het coronavirus (Covid-19)',
        id: 'covid',
        cards: [
            {
                title: 'Maatregelen',
                content: 'Ook wij zijn genoodzaakt om maatregelen te nemen tegen het coronavirus. <br> Bekijk hier hoe wij dit aanpakken.',
                type: 'alert',
                clickable: true
            }
        ]
    },
    {
        title: "Info",
        id: "info",
        cards: [
        {
            title: 'Voor ouders',
            content: 'Alle informatie voor ouders. <br> Waar ligt het speelplein? Mag mijn kind al komen spelen? Hoeveel kost een dag op het speelplein?',
            type: 'info',
            clickable: true
        },
        {
            title: 'Voor animatoren',
            content: 'Ben je 16 jaar of ouder en heb je zin om animator te worden bij ons? Je bent altijd welkom!',
            type: 'info',
            clickable: true
        }]
    },
    {
        title: "Kalender 2020",
        id: "kalender",
        cards: [
        // {
        //     title: 'Paasvakantie: geannuleerd',
        //     content: 'Door de maatregelingen over het coronavrius kan het speelplein niet doorgaan tijdens de paasvakantie.',
        //     type: 'warning',
        //     clickable: false
        // },
        {
            title: 'Zomervakantie',
            content: '1 tot en met 17 juli en van 17 tot en met 28 augustus.',
            type: 'info',
            clickable: true
        }
        ]
    },
    {
        title: "Wie zijn wij?",
        cards: [
        {
            title: 'De PIT',
            content: 'Professioneel, Innovatief en Tof! Onze stuurgroep staat altijd voor jullie klaar!',
            type: 'info',
            clickable: true
        },
        {
            title: 'Onze visie',
            content: 'We willen elk kind een echt vakantiegevoel bezorgen door hen tot intens spelen te laten komen: niet zomaar spelen, maar zo hard spelen dat je alles rond je vergeet.',
            type: 'info',
            clickable: true
        }]
    },
    {
        title: "Foto's",
        id: "fotos",
        cards: [
        {
            title: "Foto's",
            content: "Alle foto's kan je bekijken op onze facebookpagina.",
            type: 'info',
            clickable: true
        }]
    }
    ,
    {
        title: "Contact",
        id: "contact",
        cards: [
        {
            title: 'Via mail',
            content: 'De eenvoudigste manier om ons te bereiken is via e-mail. Dit kan op het adres: info@despeelberg.be',
            type: 'info',
            clickable: true
        },
        {
            title: 'Via Facebook',
            content: 'Je kan ons ook een chatbericht sturen via Facebook Messenger!',
            type: 'info',
            clickable: true
        },
        {
            title: "Bellen en sms'en",
            content: 'Je kan ons bereiken op: 0470 03 16 52. <b>Let op!</b> Al onze vrijwilligers studeren nog. Spreek gerust een boodschap in als je niemand kan bereiken.',
            type: 'info',
            clickable: true
        },
        {
            title: "Brieven",
            content: 'Je mag ons altijd een brief schrijven. Deze mag je posten op: Tomberg 21A, 8791 Beveren-Leie.',
            type: 'info',
            clickable: true
        }
        ]
    }
]

module.exports = blocks;