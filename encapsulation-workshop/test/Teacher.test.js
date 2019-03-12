const chai = require('chai');
const expect = chai.expect;

const Teacher = require('../classes/Teacher');

describe('Teacher', () => {
    let testTeacher;
    before(() => {
        testTeacher = new Teacher(10, "Jim", "JB", "Maths")
    })
    it('should allow an object to be instantiated from the class', () => {
        expect(testTeacher).to.be.an.instanceOf(Teacher);
    })
    it('should take 3 arguments', () => {
        expect(testTeacher).to.be.an.instanceOf(Teacher);
        expect(testTeacher.yearsOfService).to.equal(10);
        expect(testTeacher.name).to.equal("Jim");
        expect(testTeacher.initials).to.equal("JB");
        expect(testTeacher.subject).to.equal("Maths");
    })
    it('should return years of service when getYearsOfService is called', () => {
        expect(testTeacher.getYearsOfService()).to.equal(10);
    })
    it('should return name when getName is called', () => {
        expect(testTeacher.getName()).to.equal("Jim");
    })
    it('should return initials when getInitials is called', () => {
        expect(testTeacher.getInitials()).to.equal("JB");
    })
    it('should return subject when getSubject is called', () => {
        expect(testTeacher.getSubject()).to.equal("Maths");
    })
})