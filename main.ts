#! /usr/bin/env node
//SHABANG

import inquirer from "inquirer";

let mybalance: number = 10000;
let mypin: number = 1234;

let pinAns = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin code",
    type: "number",
  },
]);

if (pinAns.pin === mypin) {
  console.log("Correct pin code!!!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select Option",
      type: "list",
      choices: ["withdraw", "check balance"],
    },
  ]);

  console.log(operationAns);

  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter your amount",
        type: "number",
      },
    ]);

    mybalance -= amountAns.amount;
    console.log("your remaining balance is " + mybalance);
  } else if (operationAns.operation === "check balance") {
    console.log("your current balance is " + mybalance);
  }
} else {
  console.log("Incorrect Pin Code");
}
console.log ("\n=====> Thank you for choosing HBL <===== \n")