import { Slide } from "../types/slideshow";
import '../assets/landing0.jpg';
import '../assets/landing1.jpg';
import '../assets/landing2.jpg';
import '../assets/landing3.jpg';
import '../assets/landing4.jpg';

export const slides: Slide[] = [
    {
        image: {
            url: './assets/landing3.jpg',
            xoff: 'center',
            yoff: 'center',
            size: 'cover'
        },
        text: {
            text: 'Open in de paasvakantie!<br>Van 6 tot en met 10 april 2020'
        }
    },
    {
        image: {
            url: './assets/landing0.jpg',
            xoff: 'center',
            yoff: 'center'
        },
        text: {
            text: 'Tomberg 21A, Beveren-Leie'
        }
    },
    {
        image: {
            url: './assets/landing2.jpg',
            xoff: 'center',
            yoff: 'center'
        },
        text: {
            text: 'Voor iedereen tussen 3 en 15 jaar!'
        }
    },
    {
        image: {
            url: './assets/landing4.jpg',
            xoff: 'center',
            yoff: 'center'
        },
        text: {
            text: 'Nieuwtjesverwelkoming op 21 maart 2020!'
        }
    }
];