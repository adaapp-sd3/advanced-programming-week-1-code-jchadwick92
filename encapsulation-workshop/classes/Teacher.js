class Teacher {
    constructor(yearsOfService, name, initials, subject) {
        this.yearsOfService = yearsOfService;
        this.name = name;
        this.initials = initials;
        this.subject = subject;
    }
    getYearsOfService() {
        return this.yearsOfService;
    }
    getName() {
        return this.name;
    }
    getInitials() {
        return this.initials;
    }
    getSubject() {
        return this.subject
    }
}

module.exports = Teacher