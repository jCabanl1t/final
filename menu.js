// Define JSON Payload
let menu = {
    ramen: [
        { food: "Miso Ramen", price: "$10" },
        { food: "Tonkotsu Ramen", price: "$7" },
        { food: "Shoyu Ramen", price: "$10" }
    ],

    drinks: [
        { drink: "coke", price: "$3" },
        { drink: "pepsi", price: "$3" },
        { drink: "fanta", price: "$3" }
    ]
}

let jsonString = JSON.stringify(menu);
menu = JSON.parse(jsonString);

const table = document.getElementById("items");

// Loop through all items in the JSON and extract data --> into a table

const ramen_Header = document.createElement("tr");
const header1 = document.createElement("th")
header1.classList.add("left")
header1.textContent = "Ramen";

ramen_Header.appendChild(header1);

const header2 = document.createElement("th")
header2.classList.add("right")
header2.textContent = "Price";

ramen_Header.appendChild(header2);
table.appendChild(ramen_Header);

for (let i = 0; i < menu.ramen.length; i++) {
    const row = document.createElement("tr");

    const cell1 = document.createElement("td");
    cell1.classList.add("left")
    cell1.textContent = menu.ramen[i].food;
    row.appendChild(cell1);

    const cell2 = document.createElement("td");
    cell2.classList.add("left")
    cell2.textContent = menu.ramen[i].price;
    row.appendChild(cell2);

    table.appendChild(row);
}

const drink_Header = document.createElement("tr");
const header3 = document.createElement("th")
header3.classList.add("left")
header3.textContent = "Drinks";

drink_Header.appendChild(header3);

const header4 = document.createElement("th")
header4.classList.add("right")
header4.textContent = "Price";

drink_Header.appendChild(header4);
table.appendChild(drink_Header);

for (let i = 0; i < menu.drinks.length; i++) {
    const row = document.createElement("tr");

    const cell1 = document.createElement("td");
    cell1.classList.add("left")
    cell1.textContent = menu.drinks[i].drink;
    row.appendChild(cell1);

    const cell2 = document.createElement("td");
    cell2.classList.add("left")
    cell2.textContent = menu.drinks[i].price;
    row.appendChild(cell2);

    table.appendChild(row);
}
