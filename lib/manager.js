const employee = require('./employee');
const inquirer = require('inquirer');

class manager extends employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }
    getofficeNumber() {
        console.log(`Office Number: ${this.officeNumber}`);
    }
    generateCard(){
        const managerCard = `
        <div class="card m-2" style="width: 18rem;">
            <div class="card-body info">
            <h3 class="card-title">${this.name}</h3>
            <h6>${this.role}</h6>
            </div>
            <div class="m-3">
                <ul class="list-group">
                    <li class="list-group-item">ID: <span>${this.id}</span></li>
                    <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
                    <li class="list-group-item">Office Number: <span>${this.officeNumber}</span></li>
                </ul>
            </div>
        </div>`;
        // console.log(managerCard);
        return managerCard;
    }
    inquireManager() {
        return new Promise(resolve => {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "Enter team manager's name",
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Enter employee ID',
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Enter email',
                },
                {
                    type: 'input',
                    name: 'office',
                    message: 'Enter office Number',
                },
            ])
                .then((response) => {
                    const man = new manager(response.name, response.id, response.email, response.office);
                    // man.getName();
                    // man.getRole();
                    // man.getId();
                    // man.getofficeNumber();
                    resolve(man.generateCard())
                })
        })
    }
}

module.exports = manager;