addLayer("g", {
    name: "Generators", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "G", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#6458E8",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Protons", // Name of prestige currency
    baseResource: "Atoms", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1);
        if (hasUpgrade("g", 12))  mult = mult.mul(upgradeEffect("g", 12));
        if (hasUpgrade("g", 22)) mult = mult.mul(upgradeEffect("g", 22));
        return exp;
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "g", description: "G: Reset for Protons", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        rows: 2,
        cols: 2,//<Row><Column> start at 1
        11: {
            title: "Postive Power",
            effect: new Decimal(1000),
            description: "Boost Atom Production",
            cost: new Decimal(10),
        },
        12: {
            title: "++",
            effect: new Decimal(10000),
            description: "Increase them gains",
            cost: new Decimal(100),
        },
        21: {
            title: "Positivity Works",
            effect: new Decimal(100000),
            description: "So what it works",
            cost: new Decimal(1000),
        },
        22: {
            title: "Postive Finally",
            effect: new Decimal(1e8),
            description: "Proton Booster II",
            cost: new Decimal(10000),
        },
    }
})
addLayer("i", {
    name: "Ionizer", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "I", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#E87B6F",
    requires: new Decimal(100), // Can be a function that takes requirement increases into account
    resource: "Electrons", // Name of prestige currency
    baseResource: "Protons", // Name of resource prestige is based on
    baseAmount() {return player.g.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "i", description: "I: Reset for Electrons", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})
addLayer("n", {
    name: "Neutralizer", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "N", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#4DE895",
    requires: new Decimal(1000), // Can be a function that takes requirement increases into account
    resource: "Neutrons", // Name of prestige currency
    baseResource: "Protons", // Name of resource prestige is based on
    baseAmount() {return player.g.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "n", description: "N: Reset for Neutrons", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})
addLayer("q", {
    name: "Quarkifier", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Q", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#4F41E8",
    requires: new Decimal(10000), // Can be a function that takes requirement increases into account
    resource: "Quarks", // Name of prestige currency
    baseResource: "Electrons", // Name of resource prestige is based on
    baseAmount() {return player.i.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "q", description: "Q: Reset for Quarks", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})

