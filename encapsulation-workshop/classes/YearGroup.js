class YearGroup {
    constructor(year, headOfYear) {
        this.year = year;
        this.headOfYear = headOfYear;
    }
    getYear() {
        return this.year;
    }
    getHeadOfYear() {
        return this.headOfYear
    }
}

module.exports = YearGroup;