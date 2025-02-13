import { FetchJson } from "./fetch.js";

let idSortBtn = document.getElementById("idSortBtn");
let firstNameSortBtn = document.getElementById("firstNameSortBtn");
let lastNameSortBtn = document.getElementById("lastNameSortBtn");
let heightSortBtn = document.getElementById("heightSortBtn");
let ageSortBtn = document.getElementById("ageSortBtn");

let tableBodyText = document.getElementById("tableBodyText");


const ShowTable = async () => {
    let data = await FetchJson();

    let trContainer = document.createElement('tr');

    data.forEach(person => {
        trContainer.innerHTML = `<th scope="row" class="px-6 py-4"> ${person.Id} </th> <td class="px-6 py-4"> ${person.FirstName} </td> <td class="px-6 py-4"> ${person.LastName} </td> <td class="px-6 py-4"> ${person.Height} </td> <td class="px-6 py-4"> ${person.Age} </td>` 
        trContainer.className = 'bg-white dark:bg-gray-800';
    
        tableBodyText.appendChild(trContainer);
    });
   
}


idSortBtn.addEventListener('click', () => {
    ShowTable();
})
