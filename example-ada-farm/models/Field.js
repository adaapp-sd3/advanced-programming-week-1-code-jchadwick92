class Field {
    constructor(name, health, x, y, width, height) {
        this._name = name
        this._health = health
        this._x = x
        this._y = y
        this._width = width
        this._height = height
        this._crops = []
    }

    getName() {
        return this._name;
    }
    getHealth() {
        return this._health;
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
    getCrops() {
        return this._crops;
    }

    setName(name) {
        this._name = name;
    }
    setHealth(health) {
        this._health = health;
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
    setCrops(crops) {
        this._crops = crops;
    }

    draw() {
        stroke('#7c4011')
        strokeWeight(10)
        fill('#b58969')
        rect(this.getX(), this.getY(), this.getWidth(), this.getHeight(), 10)
        for (var crop of this.getCrops()) {
            crop.draw()
        }
    }

    plant(x, y) {
        // Get the crop name from the field name
        var cropName = this.getName().split(' ') // => e.g. "Wheat"
        console.log(`new ${cropName[0]}`)
        // Add a new crop to the field's list of crops
        //this.getCrops().push(new Crop(cropName[0], this, x, y))
        this.getCrops().push(this.createCropByType(this, x, y))
    }

    containsPoint(x, y) {
        var top = this.getY()
        var bottom = this.getY() + this.getHeight()
        var left = this.getX()
        var right = this.getX() + this.getWidth()

        var isInVerticalRange = y > top && y < bottom
        var isInHorizontalRange = x > left && x < right

        return isInHorizontalRange && isInVerticalRange
    }

    createCropByType(field, x, y) {
        if (field == "Carrot field") {
            return new Carrot(this, x, y)
        } else if (field == "Wheat field") {
            return new Wheat(this, x, y)
        } else if (field == "Pumpkin field") {
            return new Pumpkin(this, x, y)
        }
        
        else {
            return new Crop(this.getName().split(' ')[0], this, x, y)
        }
    }
}
