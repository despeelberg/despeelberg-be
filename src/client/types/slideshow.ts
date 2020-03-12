interface slideText {
    text: string;
    size?: number;
};

interface background {
    url: string;
    xoff?: number|string;
    yoff?: number|string;
    size?: string
}

export interface Slide {
    image: background;
    text: slideText;
};