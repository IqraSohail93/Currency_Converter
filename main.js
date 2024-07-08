import inquirer from "inquirer";
let currencyValue = {
    PKR: 278.57,
    UAE: 3.67,
    USD: 1
};
let ans = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        message: "Converting from",
        choices: ["PKR", "UAE", "USD"]
    },
    {
        type: "list",
        name: "to",
        message: "Converting to",
        choices: ["PKR", "UAE", "USD"]
    },
    {
        type: "number",
        name: "amount",
        message: "Your amount to",
    },
]);
console.log(currencyValue[ans.to] / currencyValue[ans.from] * ans.amount);
