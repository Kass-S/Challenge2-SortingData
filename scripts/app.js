import { FetchJson } from "./fetch.js";

let idSortBtn = document.getElementById("idSortBtn");
let firstNameSortBtn = document.getElementById("firstNameSortBtn");
let lastNameSortBtn = document.getElementById("lastNameSortBtn");
let heightSortBtn = document.getElementById("heightSortBtn");
let ageSortBtn = document.getElementById("ageSortBtn");

let tableBodyText = document.getElementById("tableBodyText");


const SortById = async () => {
    let data = await FetchJson();

    data.forEach(person => {
        let trContainer = document.createElement('tr');

        trContainer.innerHTML = `<th scope="row" class="px-6 py-4"> ${person.Id} </th> <td class="px-6 py-4"> ${person.FirstName} </td> <td class="px-6 py-4"> ${person.LastName} </td> <td class="px-6 py-4"> ${person.Height} </td> <td class="px-6 py-4"> ${person.Age} </td>` 
        trContainer.className = 'bg-white dark:bg-gray-800';
    
        tableBodyText.appendChild(trContainer);
    });   
}

const SortByFirstName = async () => {
    let data = await FetchJson();
    console.log(data);
    

    data.forEach(person => {
        let trContainer = document.createElement('tr');

        trContainer.innerHTML = `<th scope="row" class="px-6 py-4"> ${person.Id} </th> <td class="px-6 py-4"> ${person.FirstName} </td> <td class="px-6 py-4"> ${person.LastName} </td> <td class="px-6 py-4"> ${person.Height} </td> <td class="px-6 py-4"> ${person.Age} </td>` 
        trContainer.className = 'bg-white dark:bg-gray-800';
    
        tableBodyText.appendChild(trContainer);
    });
}


idSortBtn.addEventListener('click', () => {
    SortById();
})


firstNameSortBtn.addEventListener('click', () => {
    SortByFirstName();
})