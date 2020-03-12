import './app.scss';
import { Slideshow } from './landing/landing';
import { slides } from './landing/slides';
import './header/header';

console.log('Speelplein De Speelberg vzw');
console.log('Website by Lenny Claes. https://lennyclaes.be');

if(!window.location.pathname.includes('view')) {
    const slideshow: Slideshow = new Slideshow(slides, 10000);
    slideshow.start();
}
