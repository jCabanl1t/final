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
    ],

    appetizers: [
        { appetizer: "Pork Gyoza", price: "$5" },
        { appetizer: "calamari Tempura", price: "$5" },
        { appetizer: "Lumpia", price: "$4" }


    ],

    bar: [
        { alcohol: "draft beer", price: "$"},
        { alcohol: "sake", price: "$"},
        { alcohol: "craft cocktails", price: "$"}
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

const appetizers_Header = document.createElement("tr");
const header5 = document.createElement("th")
header5.classList.add("left")
header5.textContent = "Appetizers";

appetizers_Header.appendChild(header5);

const header6 = document.createElement("th")
header6.classList.add("right")
header6.textContent = "Price";

appetizers_Header.appendChild(header6);
table.appendChild(appetizers_Header);

for (let i = 0; i < menu.appetizers.length; i++) {
    const row = document.createElement("tr");

    const cell1 = document.createElement("td");
    cell1.classList.add("left")
    cell1.textContent = menu.appetizers[i].appetizer;
    row.appendChild(cell1);

    const cell2 = document.createElement("td");
    cell2.classList.add("left")
    cell2.textContent = menu.appetizers[i].price;
    row.appendChild(cell2);

    table.appendChild(row);
}

const bar_Header = document.createElement("tr");
const header7 = document.createElement("th")
header7.classList.add("left")
header7.textContent = "Alcohol";

bar_Header.appendChild(header7);

const header8 = document.createElement("th")
header8.classList.add("right")
header8.textContent = "Price";

bar_Header.appendChild(header8);
table.appendChild(bar_Header);

for (let i = 0; i < menu.bar.length; i++) {
    const row = document.createElement("tr");

    const cell1 = document.createElement("td");
    cell1.classList.add("left")
    cell1.textContent = menu.bar[i].alcohol;
    row.appendChild(cell1);

    const cell2 = document.createElement("td");
    cell2.classList.add("left")
    cell2.textContent = menu.bar[i].price;
    row.appendChild(cell2);

    table.appendChild(row);
}