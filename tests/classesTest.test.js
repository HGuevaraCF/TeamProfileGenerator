const employee = require('../lib/employee');
const engineer = require('../lib/engineer');
const intern = require('../lib/intern');
const manager = require('../lib/manager');

test("Employee has 'Employee' role", () => {
    let role = 'Employee';
    let result = new employee().role;

    expect(result).toEqual(role);
});

test("Manager has 'Manager' role", () => {
    let role = 'Manager';
    let result = new manager().role;

    expect(result).toEqual(role);
});

test("Manager returns an HTML snippet of a card", () => {
    const expectedSnippet = `
        <div class="card m-2" style="width: 18rem;">
            <div class="card-body info">
            <h3 class="card-title">John</h3>
            <h6>Manager</h6>
            </div>
            <div class="m-3">
                <ul class="list-group">
                    <li class="list-group-item">ID: <span>1</span></li>
                    <li class="list-group-item">Email: <a href="mailto:mail@mail.com">mail@mail.com</a></li>
                    <li class="list-group-item">Office Number: <span>2</span></li>
                </ul>
            </div>
        </div>`;
    const man = new manager('John', '1', 'mail@mail.com', '2');
    const result = man.generateCard();

    expect(result).toEqual(expectedSnippet);
});

test("Engineer has 'Enginner' role", () => {
    let role = 'Engineer';
    let result = new engineer().role;

    expect(result).toEqual(role);
});

test("Enginner returns an HTML snippet of a card", () => {
    const expectedSnippet = `
        <div class="card m-2" style="width: 18rem;">
            <div class="card-body info">
            <h3 class="card-title">John</h3>
            <h6>Engineer</h6>
            </div>
            <div class="m-3">
                <ul class="list-group">
                    <li class="list-group-item">ID: <span>1</span></li>
                    <li class="list-group-item">Email: <a href="mailto:mail@mail.com">mail@mail.com</a></li>
                    <li class="list-group-item">Username: <a href ="https://github.com/username" target="_blank">username</a></li>
                </ul>
            </div>
        </div>`;
    const eng = new engineer('John', '1', 'mail@mail.com', 'username');
    const result = eng.generateCard();

    expect(result).toEqual(expectedSnippet);
});

test("Intern has 'Intern' role", () => {
    let role = 'Intern';
    let result = new intern().role;

    expect(result).toEqual(role);
});

test("Intern returns an HTML snippet of a card", () => {
    const expectedSnippet = `
        <div class="card m-2" style="width: 18rem;">
            <div class="card-body info">
            <h3 class="card-title">John</h3>
            <h6>Intern</h6>
            </div>
            <div class="m-3">
                <ul class="list-group">
                    <li class="list-group-item">ID: <span>1</span></li>
                    <li class="list-group-item">Email: <a href="mailto:mail@mail.com">mail@mail.com</a></li>
                    <li class="list-group-item">School: <span>Tec</span></li>
                </ul>
            </div>
        </div>`;
    const student = new intern('John', '1', 'mail@mail.com', 'Tec');
    const result = student.generateCard();

    expect(result).toEqual(expectedSnippet);
});