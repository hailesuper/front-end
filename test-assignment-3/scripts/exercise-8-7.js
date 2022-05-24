let employees = [];
let employeeID = 0;
function Employee(name, age, email, work) {
    this.id = ++employeeID;
    this.name = name;
    this.age = age;
    this.email = email;
    this.work = work;
}

let firstEmployee = new Employee("Hai", 18, "hai@gmail.com", "Full-time");
employees.push(firstEmployee);

let secondEmployee = new Employee("Hai", 19, "hai@gmail.com", "Full-time");
employees.push(secondEmployee);

// READ
let employeeListTableBody = document.querySelector(".employeeListTable tbody")
showEmployee();

// CREATE
let addEmployeeButton = document.querySelector("#addEmployeeButton");
addEmployeeButton.addEventListener("click", () => {
    let employeeName = document.querySelector("#employeeName").value;
    let employeeAge = Number(document.querySelector("#employeeAge").value);
    let employeeEmail = document.querySelector("#employeeEmail").value;
    let employeeWork = document.querySelector("#employeeWork").value;
    let newEmployee = new Employee(employeeName, employeeAge, employeeEmail, employeeWork);
    employees.push(newEmployee);
    showEmployee();
})

// DELETE
let deleteButtons = document.querySelectorAll(".deleteEmployeeButton");
for (let deleteButton of deleteButtons) {
    deleteButton.addEventListener("click", () => {
        let employeeID = Number(deleteButton.getAttribute("employeeID"));
        deleteEmployeeByID(employeeID);
        showEmployee();
    });
}


function showEmployee() {
    while (employeeListTableBody.firstChild) {
        employeeListTableBody.removeChild(employeeListTableBody.firstChild);
    }
    for (let employee of employees) {
        let newRow = document.createElement("tr");
        let tdName = document.createElement("td");
        let tdAge = document.createElement("td");
        let tdEmail = document.createElement("td");
        let tdWork = document.createElement("td");
        let deleteCell = document.createElement("td");
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Xóa";
        deleteCell.setAttribute("class", "deleteEmployeeButton");
        deleteCell.setAttribute("employeeID", employee.id);
        deleteCell.appendChild(deleteButton);
        tdName.textContent = employee.name;
        tdAge.textContent = employee.age;
        tdEmail.textContent = employee.email;
        tdWork.textContent = employee.work;
        employeeListTableBody.appendChild(newRow);
        employeeListTableBody.appendChild(tdName);
        employeeListTableBody.appendChild(tdAge);
        employeeListTableBody.appendChild(tdEmail);
        employeeListTableBody.appendChild(tdWork);
        employeeListTableBody.appendChild(deleteCell);
    }
}

function deleteEmployeeByID(employeeID) {
    for (let i=0; i<(employees.length - 1); i++) {
        if (employeeID === employees[i].id)
            employees.splice(i,1);
    }
}




// Source: https://bbbootstrap.com/snippets/bootstrap-5-sidebar-menu-toggle-button-34132202
document.addEventListener("DOMContentLoaded", function (event) {

    const showNavbar = (toggleId, navId, bodyId, headerId) => {
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId),
            bodypd = document.getElementById(bodyId),
            headerpd = document.getElementById(headerId)

// Validate that all variables exist
        if (toggle && nav && bodypd && headerpd) {
            toggle.addEventListener('click', () => {
// show navbar
                nav.classList.toggle('show')
// change icon
                toggle.classList.toggle('bx-x')
// add padding to body
                bodypd.classList.toggle('body-pd')
// add padding to header
                headerpd.classList.toggle('body-pd')
            })
        }
    }

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')

    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')

    function colorLink() {
        if (linkColor) {
            linkColor.forEach(l => l.classList.remove('active'))
            this.classList.add('active')
        }
    }

    linkColor.forEach(l => l.addEventListener('click', colorLink))

    // Your code to run since DOM is loaded and ready
});