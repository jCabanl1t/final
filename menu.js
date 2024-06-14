$(document).ready(function() {
    let menu = {
        ramen: [
            { food: "Miso Ramen", description: "pork, chicken, miso broth with chashu pork, menma, bean sprout, scallion, wakame, and egg", price: "$10" },
            { food: "Tonkotsu Ramen", description: "pork & chicken broth with chashu pork, menma, bean sprout, scallion, egg, and black garlic oil", price: "$7" },
            { food: "Shoyu Ramen", description: "pork, chicken, shoyu broth with kurobuta pork, menma, bean sprout, scallion, wakame, and egg", price: "$10" },
            { food: "Kurobuta Ramen", description: "pork & chicken broth with mild spicy, kurobuta pork, menma, bean sprout, scallion, wakame, and egg", price: "$8"},
            { food: "Karai Gyuniku", description: "spicy beef broth with egg, bean sprout, gyuniku beef, and scallions", price: "$10"},
            { food: "Tan Tan Ramen", description: "pork & chicken spicy broth with spicy ground pork, scallion, and egg", price: "$10"}
        ],
        drinks: [
            { drink: "Coke", price: "$3" },
            { drink: "Pepsi", price: "$3" },
            { drink: "Fanta", price: "$3" },
            { drink: "Dr. Pepper", price: "$3"},
            { drink: "Mtn Dew", price: "$3"},
            { drink: "Sprite", price: "$3"},
            { drink: "Mug Root Beer", price: "$3"}
        ],
        appetizers: [
            { appetizer: "Pork Gyoza", description: "pork & vegetable dumpling, pan or deep fried", price: "$5" },
            { appetizer: "Calamari Tempura", description: "deep fried calamari", price: "$5" },
            { appetizer: "Lumpia", description: "deep fried pork & vegetable roll", price: "$4" },
            { appetizer: "Aloha Fries", description: "fries topped with kalua pork, kewpie mayo, gochujang aioli, furikake, and sunnyside up egg", price: "$5" },
            { appetizer: "Sizzling Sisig", description: "deep fried chopped pork belly with onion & peppers", price: "$5" },
            { appetizer: "Takoyaki", description: "deep fried ball filled with octopus", price: "$5" },
            { appetizer: "Spam Musubi", description: "grilled spam with a touch of teriyaki sauce, furikake, on rice, wrapped in nori", price: "$4"}
        ],
        bar: [
            { alcohol: "draft beer", price: "$" },
            { alcohol: "sake", price: "$" },
            { alcohol: "craft cocktails", price: "$" }
        ]
    };

    function addMenuItems(section, items, itemType) {
        const sectionBody = $(`#${section}-section tbody`);
        items.forEach(item => {
            const row = $("<tr>");
            const cell1 = $("<td>").addClass("left").html(item[itemType] + (item.description ? `<br><small>${item.description}</small>` : ''));
            const cell2 = $("<td>").addClass("right").text(item.price);
            row.append(cell1, cell2);
            sectionBody.append(row);
        });
    }

    addMenuItems("ramen", menu.ramen, "food");
    addMenuItems("drinks", menu.drinks, "drink");
    addMenuItems("appetizers", menu.appetizers, "appetizer");
    addMenuItems("bar", menu.bar, "alcohol");

    // Initially hide all sections except headers
    $("#ramen-section tr:not(#ramen-header)").hide();
    $("#drinks-section tr:not(#drinks-header)").hide();
    $("#appetizers-section tr:not(#appetizers-header)").hide();
    $("#bar-section tr:not(#bar-header)").hide();

    // Add click event to headers
    $("#ramen-header").click(function() {
        $("#ramen-section tr:not(#ramen-header)").slideToggle();
    });

    $("#drinks-header").click(function() {
        $("#drinks-section tr:not(#drinks-header)").slideToggle();
    });

    $("#appetizers-header").click(function() {
        $("#appetizers-section tr:not(#appetizers-header)").slideToggle();
    });

    $("#bar-header").click(function() {
        $("#bar-section tr:not(#bar-header)").slideToggle();
    });

    alert("Welcome to the online restaurant menu!");
});
