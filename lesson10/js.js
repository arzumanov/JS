'use strict';

class Options {
    constructor (height = 100, width = 100, bg = '#ebe', fontSize = 28, textAlign = 'center'){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    newDiv() {
        let div = document.createElement('div');
            div.textContent = 'Hello World!';
            div.style.cssText = `height:${this.height}px; width:${this.width}px; 
            background:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
            document.body.appendChild(div);
    }
}

const div = new Options(50, 200);
div.newDiv();

