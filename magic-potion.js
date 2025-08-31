// 🧪 Magic Potion Shop

function startGame() {
    // --- 1. Start Game ---
    let name = prompt("What is your name?");
    let age = Number(prompt("How old are you?"));
    let element = prompt("What is your favorite element (fire, water, earth, air)?");

    // ✅ Greeting with ternary operator
    let ageMessage = (age >= 18) 
        ? "You’re old enough to be a potion master!" 
        : "You’re still young but powerful!";
    
    alert(`Welcome ${name}! At ${age}, you’re just the right age to master the powers of ${element}!`);
    alert(ageMessage);

    // --- 2. Stock Setup ---
    let potions = ["Healing Potion", "Mana Elixir", "Invisibility Draft", "Fire Resistance"];

    let potionStock = {
        "Healing Potion": { quantity: 5, price: 10 },
        "Mana Elixir": { quantity: 3, price: 15 },
        "Invisibility Draft": { quantity: 2, price: 25 },
        "Fire Resistance": { quantity: 4, price: 20 }
    };

    let gold = 0;

    // --- 3. Customer Orders ---
    for (let i = 0; i < 3; i++) {
        let hasCustomer = prompt("A customer is here! Take their order? (yes/no)");

        if (hasCustomer && hasCustomer.toLowerCase() === "yes") {
            // ✅ Show potion menu using map()
            let menu = potions.map((p, index) => `${index + 1}. ${p}`).join("\n");
            let choiceIndex = Number(prompt("Which potion would you like?\n" + menu)) - 1;
            let choice = potions[choiceIndex];

            if (choice && potionStock[choice] && potionStock[choice].quantity > 0) {
                potionStock[choice].quantity--;
                gold += potionStock[choice].price;
                alert(`You sold one ${choice}!`);
            } else {
                alert("Sorry, that potion is out of stock or invalid choice.");
            }
        } else {
            alert("No customer this time.");
        }
    }

    // --- 4. Brewing Potions ---
    function brewPotion(potionName, amount) {
        if (potionStock[potionName]) {
            potionStock[potionName].quantity += amount;
            alert(`You brewed ${amount} ${potionName}(s).`);
        } else {
            alert("That potion does not exist!");
        }
    }

    let brewCount = 0;
    while (brewCount < 3) {
        let menu = potions.map((p, index) => `${index + 1}. ${p}`).join("\n");
        let potionIndex = Number(prompt("Which potion do you want to brew?\n" + menu)) - 1;
        let potionToBrew = potions[potionIndex];
        brewPotion(potionToBrew, 1);
        brewCount++;
    }

    // --- 5. End of Day Report ---
    let report = "📜 End of Day Report:\n";
    for (let potion in potionStock) {
        report += `${potion}: ${potionStock[potion].quantity} left\n`;
    }
    report += `You earned ${gold} gold today!`;
    alert(report);

    // --- 6. Bonus Features ---

    // ⏳ Magical Clock
    let currentTime = new Date();
    alert(`The magical clock shows: ${currentTime.toLocaleTimeString()}`);

    // 📖 Magic Book (Spells)
    let magicBook = {
        fireball: () => alert("🔥 You cast Fireball!"),
        heal: () => alert("✨ You cast Heal!"),
        shield: () => alert("🛡️ You cast Shield!")
    };

    let spell = prompt("Choose a spell from the magic book: (fireball / heal / shield)");
    if (magicBook[spell]) {
        magicBook[spell]();
    } else {
        alert("That spell does not exist!");
    }

    alert("🌟 Game Over! Thanks for playing, apprentice!");
}
