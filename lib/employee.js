class employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    }
    // printData(){
    //     console.log(`Name: ${this.name}, id: ${this.id}. email: ${this.email}`);
    // }
    getName() {
        console.log(`Name: ${this.name}`);
    }
    getId() {
        console.log(`Id: ${this.Id}`);
    }
    getId() {
        console.log(`Id: ${this.Id}`);
    }
    getRole() {
        console.log(`Role: ${this.role}`);
    }
}
module.exports = employee;