const chai = require('chai');
const expect = chai.expect;

const YearGroup = require('../classes/YearGroup');

describe('YearGroup', () => {
    let myYearGroup;
    before(() => {
        myYearGroup = new YearGroup(2000, "John Doe")
    })
    it('should allow an object to be instantiated from the class', () => {
        expect(myYearGroup).to.be.an.instanceOf(YearGroup);
    })
    it('should take 2 arguments', () => {
        expect(myYearGroup).to.be.an.instanceOf(YearGroup);
        expect(myYearGroup.year).to.equal(2000);
        expect(myYearGroup.headOfYear).to.equal("John Doe");
    })
    it('should return year when getYear is called', () => {
        expect(myYearGroup.getYear()).to.equal(2000);
    })
    it('should return the head of year when getHeadOfYear is called', () => {
        expect(myYearGroup.getHeadOfYear()).to.equal("John Doe");
    })
})