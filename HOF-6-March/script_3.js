/*
    Build a feature for Store's Inventory.
    -> Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
    program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
    use the map higher-order function to create a new object with the converted prices in Rupees.
*/

const pricesInUSD = {
    "Apple": 0.8,
    "Mango": 1.8, 
    "Graphs": 5.5,
    "Milk": 3.0,
    "Bread": 2.5
}

const exchangeRate = 80;

function convertToINR(pricesInUSD, rate){

    const priceInInrArray = Object.entries(pricesInUSD).map(([item, priceInUSD]) => {
        return [item, priceInUSD * rate];
    })

    const pricesInINR = Object.fromEntries(priceInInrArray)

    return pricesInINR
};

const pricesInINR = convertToINR(pricesInUSD, exchangeRate);
console.log("Prices in USD : ", pricesInUSD);
console.log("Prices in INR : ", pricesInINR);