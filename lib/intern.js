const employee = require('./employee');

class intern extends employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = 'Intern';
    }
    getSchool() {
        console.log(`School: ${this.school}`);
    }
}

module.exports = intern;