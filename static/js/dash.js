const oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "/api/v1.0/data");
oReq.send();


const darkModeButton = document.querySelector(".dark-mode-button");
const visList = document.querySelectorAll(".vis");
const dropdownMenu = document.querySelector(".dropdown-menu");
const table = document.querySelector("tbody");

darkModeButton.addEventListener("click", (event) => {
    const button = event.target
    if (button.classList.contains("btn-dark")) {
        button.classList.remove("btn-dark");
        button.classList.add("btn-light");
        button.innerHTML = "Light Mode";
        document.body.style.backgroundColor = "black";

    } else {
        button.classList.remove("btn-light");
        button.classList.add("btn-dark");
        button.innerHTML = "Dark Mode";
        document.body.style.backgroundColor = "white";


    }
})
function dropDown() {
    let html = ``
    for (let vis of visList) {
        html += `<a class="dropdown-item" href="#">${vis.textContent}</a>`
    }
    dropdownMenu.innerHTML = html;
    const dropdownItems = document.querySelectorAll(".dropdown-item");
    for (let item of dropdownItems) {
        item.addEventListener("click", (event) => {
            showVis(event.target.textContent);
        })
    }
}
function showVis(visText) {
    for (let vis of visList) {
        if (visText === vis.textContent) {
            vis.parentElement.classList.remove("d-none");
        } else {
            vis.parentElement.classList.add("d-none");
        }
    }
}
function reqListener() {


    const json = JSON.parse(this.response);
    buildTable(json["data"]);
    

}

function buildTable(json) {

    html = '';

    for (let row of json) {
        
        console.log(row);
        html += 
        `
            <tr>
            <th scope="row">${row[0] + 1}</th>
            <td>${row[1]}</td>
            </tr>
        `
    }
    
    table.innerHTML = html;
}

dropDown();