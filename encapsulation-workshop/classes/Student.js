class Student {
    constructor(name, year, form) {
        this.name = name;
        this.year = year;
        this.form = form;
    }
    getName() {
        return this.name;
    }
    getYear() {
        return this.year;
    }
    getForm() {
        return this.form;
    }
}

module.exports = Student