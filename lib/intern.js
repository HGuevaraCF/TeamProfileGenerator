const employee = require('./employee');
const inquirer = require('inquirer');

class intern extends employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = 'Intern';
    }
    getSchool() {
        console.log(`School: ${this.school}`);
    }
    generateCard(){
        const internCard = `
        <div class="card m-2" style="width: 18rem;">
            <div class="card-body info">
            <h3 class="card-title">${this.name}</h3>
            <h6>${this.role}</h6>
            </div>
            <div class="m-3">
                <ul class="list-group">
                    <li class="list-group-item">ID: <span>${this.id}</span></li>
                    <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
                    <li class="list-group-item">School: <span>${this.school}</span></li>
                </ul>
            </div>
        </div>`;
        // console.log(internCard);
        return internCard;
    }

    inquireIntern() {
        return new Promise(resolve => {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Enter name',
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Enter ID',
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Enter email',
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'Enter school',
                },
            ])
                .then((response) => {
                    const student = new intern(response.name, response.id, response.email, response.school);
                    // student.getName();
                    // student.getRole();
                    // student.getId();
                    // student.getSchool();
                    resolve(student.generateCard());
                })
        })
    }
}

module.exports = intern;