let employees = [
  {name:"ashish1", age:20, city:"City1", salary:10000},
  {name:"ashish2", age:22, city:"City2", salary:20000},
  {name:"ashish3", age:24, city:"City3", salary:30000},
  {name:"ashish4", age:26, city:"City4", salary:40000},
  {name:"ashish5", age:28, city:"City5", salary:50000}
];


function searchByName(){
  let searchTextValue = document.getElementById('name').value;
  // let searchByNameEmployees = [];
  // employees.forEach(function (element) {
  //   if(element.name == searchTextValue){
  //     searchByNameEmployees.push(element);
  //   }
  // })
  
  let searchByNameEmployees = employees.filter(function (employee) {
    return (
      employee.name.toUpperCase().indexOf(searchTextValue.toUpperCase()) != -1
    );
  });
  display(searchByNameEmployees);
}

function searchByCity(){
  let searchTextValue = document.getElementById('city').value;
  let searchByCityEmployees = employees.filter(function (employee) {
    return (
      employee.city.toUpperCase().indexOf(searchTextValue.toUpperCase()) != -1
    );
  });
  display(searchByCityEmployees);
}

function deleteEmployeeByName(index){
  console.log(index);
  let employeesAfterDelete = [];

  //1st way
  // employees.forEach(function (element, ind) {
  //   if(ind != index-1){
  //     employeesAfterDelete.push(element); 
  //   }
  // })
  // display(employeesAfterDelete);
 
  //2nd way
  // employees.filter(function (emp, ind){
  //   if(ind != index-1){
  //     employeesAfterDelete.push(emp);
  //   }
  // })
  // display(employeesAfterDelete);

  //3rd way
  // delete employees[index -1];
  // display(employees);

  //4th way
  employees.splice(index, 1);
  display(employees);
}


function display(employees){
  let tableBody ="";
  let srNo = 1;
  employees.forEach(function (element) {
    let currentRow = `<tr>
        <td>${srNo}</td>
        <td>${element.name}</td>
        <td>${element.age}</td>
        <td>${element.city}</td>
        <td>${element.salary}</td>
        <td><button onclick="deleteEmployeeByName(${srNo - 1})">Delete</button></td>
        </tr>`;

    tableBody = tableBody + currentRow;
    srNo++;
  });
  document.getElementById('tbody').innerHTML = tableBody;
}

display(employees);