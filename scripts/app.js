import { FetchJson } from "./fetch.js";

let idBtn = document.getElementById("idBtn");

let tableBodyText = document.getElementById("tableBodyText");
let b = 10
let k = 9

const SortById = async () => {
    let data = await FetchJson();

    let trContainer = document.createElement('tr');

    trContainer.innerHTML = `<th scope="row" class="px-6 py-4"> ${data[0].Id} </th> <td class="px-6 py-4"> ${data[0].FirstName} </td> <td class="px-6 py-4"> ${data[0].LastName} </td> <td class="px-6 py-4"> ${data[0].Height} </td> <td class="px-6 py-4"> ${data[0].Age} </td>` 
    trContainer.className = 'bg-white dark:bg-gray-800';

    tableBodyText.appendChild(trContainer);

}


idBtn.addEventListener('click', () => {
    SortById();
})
