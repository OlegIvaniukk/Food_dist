function button() {
    return 'button';
}

class Slider {
    constructor(width, height, count) {
        this.width = width;
        this.height = height;
        this.count = count;
    }
    nextSlide() {
        console.log('moving forward')
    }
    prevSlide() {
        console.log('moving back')
    }
    whoAmI () {
        console.log(this.width, this.height, this.count)
    }
}

class AutoSlider extends Slider {
    constructor(width, height, count, auto) {
        super(width, height, count);
        this.auto = auto;
    }
    play() {
        console.log(`Autoplay: ${this.auto}`)
    }
}

const autoSlider = new AutoSlider(500, 500, 4, true);
autoSlider.whoAmI();
autoSlider.play();

export {button, Slider};



