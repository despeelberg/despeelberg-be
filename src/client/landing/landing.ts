import { Slide } from "../types/slideshow";

export class Slideshow {
    private landing: Element = document.querySelector('.landing');
    private textfield: Element = document.querySelector('.welcome__text');
    private slides: Slide[];
    private time: number;
    private currentSlide: number = -1;
    private interval: NodeJS.Timer;

    constructor(slides: Slide[], time: number = 7000) {
        this.slides = slides;
        this.time = time;
    }

    private nextSlide() {
        this.currentSlide++;

        if(this.currentSlide >= this.slides.length) {
            this.currentSlide = 0;
        }

        this.textfield.innerHTML = this.slides[this.currentSlide].text.text;
        let size: number = this.slides[this.currentSlide].text.size || 36;
        this.textfield.setAttribute("style", `font-size: ${size}px;`);

        this.landing.setAttribute('style', `background: url('${this.slides[this.currentSlide].image.url}') ${this.slides[this.currentSlide].image.xoff || 0} ${this.slides[this.currentSlide].image.yoff || 0} no-repeat; background-size: ${this.slides[this.currentSlide].image.size || 'cover'};`);
    }

    start() {
        this.nextSlide();
        this.interval = setInterval(() => {
            this.nextSlide();
        }, this.time);
    }

    stop() {
        clearInterval(this.interval);
    }
}