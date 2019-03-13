class Farmer {
    constructor(userName) {
        this._field = null
        this._userName = userName
        this._image = loadImage('./images/farmer.png')
        this._x = 100
        this._y = 100
        this._width = 60
        this._height = 60
    }

    getField() {
        return this._field;
    }
    getUsername() {
        return this._userName;
    }
    getImage() {
        return this._image;
    }
    getX() {
        return this._x;
    }
    getY() {
        return this._y;
    }
    getWidth() {
        return this._width;
    }
    getHeight() {
        return this._height;
    }
    setField(field) {
        this._field = field;
    }
    setUsername(userName) {
        this._userName = userName;
    }
    setImage(image) {
        this._image = image;
    }
    setX(x) {
        this._x = x;
    }
    setY(y) {
        this._y = y;
    }
    setWidth(width) {
        this._width = width;
    }
    setHeight(height) {
        this._height = height;
    }

    speak(words) {
        alert(words)
    }

    setActiveField(field) {
        this._field = field
    }

    update() {
        if (keyIsDown(RIGHT_ARROW)) {
            this.setX(this.getX() + 3);
        }
        if (keyIsDown(LEFT_ARROW)) {
            this.setX(this.getX() - 3);
        }
        if (keyIsDown(DOWN_ARROW)) {
            this.setY(this.getY() + 3);
        }
        if (keyIsDown(UP_ARROW)) {
            this.setY(this.getY() - 3);
        }
    }

    farmerKeyPressed() {
        if (keyCode == ENTER) {
            this.getField().plant(this.getX(), this.getY())
        }
    }

    draw() {
        var bobAmount = Math.sin(millis() / 60) * 3

        image(
            this.getImage(),
            this.getX(),
            this.getY() + bobAmount,
            this.getWidth(),
            this.getHeight()
        )
    }
} // End of the Farmer class oooarrr
