const employee = require('./employee');

class manager extends employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }
    getofficeNumber() {
        console.log(`Office Number: ${this.officeNumber}`);
    }
}

module.exports = manager;