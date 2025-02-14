import { FetchJson } from "./fetch.js";

let idSortBtn = document.getElementById("idSortBtn");
let firstNameSortBtn = document.getElementById("firstNameSortBtn");
let lastNameSortBtn = document.getElementById("lastNameSortBtn");
let heightSortBtn = document.getElementById("heightSortBtn");
let ageSortBtn = document.getElementById("ageSortBtn");

let idToggleOrder = document.getElementById('idToggleOrder');
let firstNameToggleOrder = document.getElementById('firstNameToggleOrder');
let lastNameToggleOrder = document.getElementById('lastNameToggleOrder');
let heightToggleOrder = document.getElementById('heightToggleOrder');
let ageToggleOrder = document.getElementById('ageToggleOrder');

let tableBodyText = document.getElementById("tableBodyText");

// let counter = 0;
// let amountShown = 9;

const SortById = async () => {
    let data = await FetchJson();
    //counter = 0;
 
    data.forEach(person => {

        //this if staement doesnt work on the ones that need sorting. which is the all the rest of the functions
        //if(counter <= amountShown){
            let trContainer = document.createElement('tr');

            trContainer.innerHTML = `<th scope="row" class="px-6 py-4"> ${person.Id} </th> <td class="px-6 py-4"> ${person.FirstName} </td> <td class="px-6 py-4"> ${person.LastName} </td> <td class="px-6 py-4"> ${person.Height} </td> <td class="px-6 py-4"> ${person.Age} </td>` 
            trContainer.className = 'bg-white dark:bg-gray-800';
    
            tableBodyText.appendChild(trContainer);
            //counter++;    
        //}
        
    });   
}
SortById();

const IdDescending = async () => {
    let data = await FetchJson();

    data.sort((a, b) => {
        if(a.Id > b.Id){
            return -1;
        }else if(a.Id < b.Id){
            return 1;
        }else{
            return 0;
        }
    });

    data.forEach(person => { 
        let trContainer = document.createElement('tr');
        
        trContainer.innerHTML = `<th scope="row" class="px-6 py-4"> ${person.Id} </th> <td class="px-6 py-4"> ${person.FirstName} </td> <td class="px-6 py-4"> ${person.LastName} </td> <td class="px-6 py-4"> ${person.Height} </td> <td class="px-6 py-4"> ${person.Age} </td>` 
        trContainer.className = 'bg-white dark:bg-gray-800';
        
        tableBodyText.appendChild(trContainer);
          
    })
     
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
    });

    data.forEach(person => {
        let trContainer = document.createElement('tr');
    
        trContainer.innerHTML = `<th scope="row" class="px-6 py-4"> ${person.Id} </th> <td class="px-6 py-4"> ${person.FirstName} </td> <td class="px-6 py-4"> ${person.LastName} </td> <td class="px-6 py-4"> ${person.Height} </td> <td class="px-6 py-4"> ${person.Age} </td>` 
        trContainer.className = 'bg-white dark:bg-gray-800';
        
        tableBodyText.appendChild(trContainer);
    });    
}

const FirstNameDescending = async () => {
    let data = await FetchJson(); 

    data.sort((a, b) => {
        if(a.FirstName > b.FirstName){
            return -1;
        }else if(a.FirstName < b.FirstName){
            return 1;
        }else{
            return 0;
        }
    });

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

const LastNameDescending = async () => {
    let data = await FetchJson();

    data.sort((a, b) => {
        if(a.LastName > b.LastName){
            return -1;
        }else if(a.LastName < b.LastName){
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

const HeightDescending = async () => {
    let data = await FetchJson();

    data.sort((a, b) => {
        if(a.Height > b.Height){
            return -1;
        }else if(a.Height < b.Height){
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

const AgeDescending = async () => {
    let data = await FetchJson();

    data.sort((a, b) => {
        if(a.Age > b.Age){
            return -1;
        }else if(a.Age < b.Age){
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

idToggleOrder.addEventListener('click', () => {
    tableBodyText.innerHTML = '';
    IdDescending();
})

firstNameSortBtn.addEventListener('click', () => {
    tableBodyText.innerHTML = '';
    SortByFirstName();
})

firstNameToggleOrder.addEventListener('click', () => {
    tableBodyText.innerHTML = '';
    FirstNameDescending();
})

lastNameSortBtn.addEventListener('click', () => {
    tableBodyText.innerHTML = '';
    SortByLastName();
})

lastNameToggleOrder.addEventListener('click', () => {
    tableBodyText.innerHTML = '';
    LastNameDescending();
})

heightSortBtn.addEventListener('click', () => {
    tableBodyText.innerHTML = '';
    SortByHeight();
})

heightToggleOrder.addEventListener('click', () => {
    tableBodyText.innerHTML = '';
    HeightDescending();
})

ageSortBtn.addEventListener('click', () => {
    tableBodyText.innerHTML = '';
    SortByAge();
})

ageToggleOrder.addEventListener('click', () => {
    tableBodyText.innerHTML = '';
    AgeDescending();
})