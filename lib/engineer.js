const employee = require('./employee');
const inquirer = require('inquirer');

class engineer extends employee {
    constructor(name, id, email, username) {
        super(name, id, email);
        this.username = username;
        this.role = 'Engineer';
    }
    getGithub() {
        console.log(`Github account: ${this.username}`);
    }
    generateCard(){
        const engineerCard = `
        <div class="card m-2" style="width: 18rem;">
            <div class="card-body info">
            <h3 class="card-title">${this.name}</h3>
            <h6>${this.role}</h6>
            </div>
            <div class="m-3">
                <ul class="list-group">
                    <li class="list-group-item">ID: <span>${this.id}</span></li>
                    <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
                    <li class="list-group-item">Username: <a href ="https://github.com/${this.username}" target="_blank">${this.username}</a></li>
                </ul>
            </div>
        </div>`;
        // console.log(engineerCard);
        return engineerCard;
    }

    inquireEnginner() {
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
                    name: 'username',
                    message: 'Enter username',
                },
            ])
                .then((response) => {
                    const inge = new engineer(response.name, response.id, response.email, response.username);
                    // inge.getName();
                    // inge.getRole();
                    // inge.getId();
                    // inge.getGithub();
                    resolve(inge.generateCard());
                })
        })
    }
}





module.exports = engineer;