#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 2005;

console.log("your balance is " + myBalance)
const answers = await inquirer.prompt([
    {
        message: "enter your pin number: ",
        type: "number",
        name: "pin"
    },
]);

if (answers.pin !== myPin) {
    console.log("invalid pin");
} else if (answers.pin === myPin) {
    console.log("welcome to banking system");
    const atmAction = await inquirer.prompt([
        {
            message: "what do you want to do",
            type: "list",
            choices: ["withdraw", "check balance"],       
            name: "action"
        }
    ]); 
    if (atmAction.action === "check balance") {
                console.log("your balance is " + myBalance);
            } else if (atmAction.action === "withdraw") {
                const withdrawalAmount = await inquirer.prompt({
                    message: "enter amount to withdraw: ",
                    type: "number",
                    name: "Amount"
                })
                if (withdrawalAmount.Amount > myBalance){
                    console.log("insufficient balance");
                }else {
                myBalance -= withdrawalAmount.Amount;
                console.log("your remaining amount is "  + myBalance );
                }
            }
            console.log("thankyou for banking with us!");            
}; 