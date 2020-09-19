function load(){
  let busArray = [
    {name:"Bus1", source:"Source1", destination:"Destination1", plateNo:"Bus1PlateNo", capacity:20},
    {name:"Bus2", source:"Source2", destination:"Destination2", plateNo:"Bus2PlateNo", capacity:25}
  ];
  if (localStorage.getItem("busArray") === "") {
    localStorage.setItem("busArray", JSON.stringify(busArray));
  }
}

function getBusArrayFromLocalStorage(){
  return JSON.parse(localStorage.getItem("busArray"));
}

function addBusArrayIntoLocalStorage(bus){
  let busArray = getBusArrayFromLocalStorage();
  console.log("busArray before pushing --- "+busArray);
  busArray.push(bus);
  console.log("busArray after pushing --- "+busArray);
  localStorage.setItem("busArray", JSON.stringify(busArray));
  display();
}

function display(busArrayVar){
  let busArray;
  if(busArrayVar == null){
    busArray = getBusArrayFromLocalStorage();
  } else {
    busArray = busArrayVar;
  }
  
  let tableBody ="";
  let srNo = 1;
  busArray.forEach(function (element) {
    let currentRow = `<tr>
        <td>${srNo}</td>
        <td>${element.name}</td>
        <td>${element.source}</td>
        <td>${element.destination}</td>
        <td>${element.plateNo}</td>
        <td>${element.capacity}</td>
        </tr>`;

    tableBody = tableBody + currentRow;
    srNo++;
  });
  document.getElementById('tbody').innerHTML = tableBody;
}

display();

function addBus(){
  let name = document.getElementById('name').value;
  let source = document.getElementById('source').value;
  let destination = document.getElementById('destination').value;
  let plateNo = document.getElementById('plateNo').value;
  let capacity = document.getElementById('capacity').value;
  let bus = {name, source, destination, plateNo, capacity}
  addBusArrayIntoLocalStorage(bus);
} 

function searchBySourceDest(){
  let searchSourceValue = document.getElementById('sourceSearch').value;
  let searchDestValue = document.getElementById('destSearch').value;
  let searchBySourceDestRes = [];
  let busArray = getBusArrayFromLocalStorage();

  busArray.forEach(function (element) {
    if(element.source == searchSourceValue && element.destination == searchDestValue){
      searchBySourceDestRes.push(element);
    }
  });  
  display(searchBySourceDestRes);
}
