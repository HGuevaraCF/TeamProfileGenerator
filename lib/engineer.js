const employee = require('./employee');
class engineer extends employee {
    constructor(name, id, email, username) {
        super(name, id, email);
        this.username = username;
        this.role = 'Engineer';
    }
    getGithub() {
        console.log(`Github account: ${this.username}`);
    }
}

// const inge = new engineer('Juan', 1, 'mail@mail.com', 'holahola');

// inge.getName();
// inge.getRole();
// inge.getId();
// inge.getGithub();


module.exports = engineer;