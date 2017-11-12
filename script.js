
/*
to do:
- Make beautiful
-Figure out blank input error handling
*/

console.log('js sourced');

$(document).ready(onReady);

function onReady() {
    $('#inputlist').on('click', '#newEmployeeButton', submitNewEmployee);
    $('#remove').on('click', removeEmployee);
}

var employeeArray = [];

function Employee(firstName, lastName, employeeID, jobTitle, annualSalary) {
    this.firstName = $('#firstNameInput').val();
    this.lastName = $('#lastNameInput').val();
    this.employeeID = $('#employeeIDInput').val();
    this.jobTitle = $('#jobTitleInput').val();
    this.annualSalary = $('#annualSalaryInput').val();
}

function submitNewEmployee() {
    console.log('in new employee')

    // if($('#inputlist').val() == ''){
    //     alert('Please complete all fields');
    //     return;
    // }
    //this doesnt work, it still fires if the fields are all complete. Likely, can resolve by checking each field individually but prefer to avoid this

    var newEmployee = new Employee();
    employeeArray.push(newEmployee);
    console.log(employeeArray);
    $('#employeeTable').append(
        '<tr>' +
        '<td class="firstName">' + newEmployee.firstName + '</td>' +
        '<td class="lastName">' + newEmployee.lastName + '</td>' +
        '<td class="employeeID">' + newEmployee.employeeID + '</td>' +
        '<td class="jobTitle">' + newEmployee.jobTitle + '</td>' +
        '<td class="annualSalary">' + newEmployee.annualSalary + '</td>' +
        '</tr>')
    //row added

    var yearlyCost = 0;
    for (var i = 0; i < employeeArray.length; i++) {
        var currentEmployee = employeeArray[i];
        yearlyCost = Number(yearlyCost + Number(employeeArray[i].annualSalary));
    }
    var monthlyCost = (yearlyCost / 12).toFixed(2);
    console.log(yearlyCost + ' is the yearly cost ' + monthlyCost + ' is the monthly cost')
    $('#calculations').replaceWith('<p id="calculations">The total monthly gross wages for these employees is $' + monthlyCost + '</p>')
    //cost calculated

    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#employeeIDInput').val('');
    $('#jobTitleInput').val('');
    $('#annualSalaryInput').val('');
    //input cleared
}// end submit new employee 

function removeEmployee() {
    $('tr').last().remove();
    employeeArray.pop();
    var yearlyCost = 0;
    for (var i = 0; i < employeeArray.length; i++) {
        var currentEmployee = employeeArray[i];
        yearlyCost = Number(yearlyCost + Number(employeeArray[i].annualSalary));
    }
    var monthlyCost = ((yearlyCost / 12).toFixed(2));
    console.log(yearlyCost + ' is the yearly cost ' + monthlyCost + ' is the monthly cost')
    $('#calculations').replaceWith('<p id="calculations">The total monthly gross wages for these employees is $' + monthlyCost + '</p>')
}


