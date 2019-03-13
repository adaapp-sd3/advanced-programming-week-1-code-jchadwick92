class Crop {
    constructor(type, field, x, y) {
        this._type = type
        // Get the image based on the name of the field
        this._image = loadImage('./images/'+this.getType().toLowerCase()+'.png') // ./carrot.png
        this._health = 0
        this._field = field
        this._x = x
        this._y = y
        this._birthstamp = millis() / 1000
        this._width = 1
        this._height = 1
        this._healthySize = 30

        // Draw the crop when it's created
        this.draw()
    }

    getType() {
        return this._type;
    }
    getImage() {
        return this._image;
    }
    getHealth() {
        return this._health;
    }
    getField() {
        return this._field;
    }
    getX() {
        return this._x;
    }
    getY() {
        return this._y;
    }
    getBirthStamp() {
        return this._birthstamp;
    }
    getWidth() {
        return this._width;
    }
    getHeight() {
        return this._height;
    }
    getHealthySize() {
        return this._healthySize;
    }
    getAge() {
        // return the amount of time it's been alive
        return millis() / 1000 - this.getBirthStamp();
    }
    setType(type) {
        this._type = type;
    }
    setImage(image) {
        this._image = image;
    }
    setHealth(health) {
        this._health = health;
    }
    setField(field) {
        this._field = field;
    }
    setX(x) {
        this._x = x;
    }
    setY(y) {
        this._y = y;
    }
    setBirthStamp(birthStamp) {
        this._birthstamp = birthStamp;
    }
    setWidth(width) {
        this._width = width;
    }
    setHeight(height) {
        this._height = height;
    }
    setHealthySize(healthySize) {
        this._healthySize = healthySize;
    }

    draw() {
        // set a width for the image based on its age
        if (this.getAge() < this.getHealthySize() ) {
            var width = this.getWidth() * this.getAge()
            var height = this.getHeight() * this.getAge()
        } else {
            var width = 30;
            var height = 30;
        }
 
        image(
            this.getImage(),
            this.getX(),
            this.getY(),
            width,
            height
        )
    }
}