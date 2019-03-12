const chai = require('chai');
const expect = chai.expect;

const Student = require('../classes/Student');

describe('Student', () => {
    let testStudent;
    before(() => {
        testStudent = new Student("Jeff", 10, "A")
    })
    it('should allow an object to be instantiated from the class', () => {
        expect(testStudent).to.be.an.instanceOf(Student);
    })
    it('should take 3 arguments', () => {
        expect(testStudent).to.be.an.instanceOf(Student);
        expect(testStudent.name).to.equal("Jeff");
        expect(testStudent.year).to.equal(10);
        expect(testStudent.form).to.equal("A");
    })
    it('should return name when getName is called', () => {
        expect(testStudent.getName()).to.equal("Jeff");
    })
    it('should return year when getYear is called', () => {
        expect(testStudent.getYear()).to.equal(10);
    })
    it('should return form when getForm is called', () => {
        expect(testStudent.getForm()).to.equal("A");
    })
})