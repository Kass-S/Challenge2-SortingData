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

    data.sort((a, b) => {
        if(a.FirstName < b.FirstName){
            return -1;
        }else if(a.FirstName > b.FirstName){
            return 1;
        }else{
            return 0;
        }
    })
    
    data.forEach(person => {
        let trContainer = document.createElement('tr');

        trContainer.innerHTML = `<th scope="row" class="px-6 py-4"> ${person.Id} </th> <td class="px-6 py-4"> ${person.FirstName} </td> <td class="px-6 py-4"> ${person.LastName} </td> <td class="px-6 py-4"> ${person.Height} </td> <td class="px-6 py-4"> ${person.Age} </td>` 
        trContainer.className = 'bg-white dark:bg-gray-800';
    
        tableBodyText.appendChild(trContainer);
    });
}

const SortByLastName = async () => {
    let data = await FetchJson();

    data.sort((a, b) => {
        if(a.LastName < b.LastName){
            return -1;
        }else if(a.LastName > b.LastName){
            return 1;
        }else{
            return 0;
        }
    })
    
    data.forEach(person => {
        let trContainer = document.createElement('tr');

        trContainer.innerHTML = `<th scope="row" class="px-6 py-4"> ${person.Id} </th> <td class="px-6 py-4"> ${person.FirstName} </td> <td class="px-6 py-4"> ${person.LastName} </td> <td class="px-6 py-4"> ${person.Height} </td> <td class="px-6 py-4"> ${person.Age} </td>` 
        trContainer.className = 'bg-white dark:bg-gray-800';
    
        tableBodyText.appendChild(trContainer);
    });
}

const SortByHeight = async () => {
    let data = await FetchJson();

    data.sort((a, b) => {
        if(a.Height < b.Height){
            return -1;
        }else if(a.Height > b.Height){
            return 1;
        }else{
            return 0;
        }
    })
    
    data.forEach(person => {
        let trContainer = document.createElement('tr');

        trContainer.innerHTML = `<th scope="row" class="px-6 py-4"> ${person.Id} </th> <td class="px-6 py-4"> ${person.FirstName} </td> <td class="px-6 py-4"> ${person.LastName} </td> <td class="px-6 py-4"> ${person.Height} </td> <td class="px-6 py-4"> ${person.Age} </td>` 
        trContainer.className = 'bg-white dark:bg-gray-800';
    
        tableBodyText.appendChild(trContainer);
    });
}

const SortByAge = async () => {
    let data = await FetchJson();

    data.sort((a, b) => {
        if(a.Age < b.Age){
            return -1;
        }else if(a.Age > b.Age){
            return 1;
        }else{
            return 0;
        }
    })
    
    data.forEach(person => {
        let trContainer = document.createElement('tr');

        trContainer.innerHTML = `<th scope="row" class="px-6 py-4"> ${person.Id} </th> <td class="px-6 py-4"> ${person.FirstName} </td> <td class="px-6 py-4"> ${person.LastName} </td> <td class="px-6 py-4"> ${person.Height} </td> <td class="px-6 py-4"> ${person.Age} </td>` 
        trContainer.className = 'bg-white dark:bg-gray-800';
    
        tableBodyText.appendChild(trContainer);
    });
}


idSortBtn.addEventListener('click', () => {
    tableBodyText.innerHTML = '';
    SortById();
})


firstNameSortBtn.addEventListener('click', () => {
    tableBodyText.innerHTML = '';
    SortByFirstName();
})

lastNameSortBtn.addEventListener('click', () => {
    tableBodyText.innerHTML = '';
    SortByLastName();
})

heightSortBtn.addEventListener('click', () => {
    tableBodyText.innerHTML = '';
    SortByHeight();
})

ageSortBtn.addEventListener('click', () => {
    tableBodyText.innerHTML = '';
    SortByAge();
})