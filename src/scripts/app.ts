#! /usr/bin/env node
import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";
import { type } from "os";
import chalk from "chalk";

let welcomeMsg = console.log(chalk.bgBlueBright("Welcome to the ATM"));

interface customerDetails {
    customerName:string;
    password:string | number;
    bankBalance:number;
}
let shahid : customerDetails = {customerName:"shahid", password:1234, bankBalance:Math.round(Math.random() *100000)};
let zohaib : customerDetails = {customerName:"zohaib", password:1234, bankBalance:Math.round(Math.random() *100000)};
let shoaib : customerDetails = {customerName:"shoaib", password:1234, bankBalance:Math.round(Math.random() *100000)};
let rayyan : customerDetails = {customerName:"rayyan", password:1234, bankBalance:Math.round(Math.random() *100000)};

let customerDetails = []
customerDetails.push(shahid, zohaib, shoaib, rayyan);

const inputdetails = async() => {

    let input = await inquirer.prompt([
    {name:"name",
    type:"input",
    message:"Please enter the customer name"
    },
    {name:"password",
    type:"password",
    message:"Please enter your password"
    }
])
if ((input.name == shahid.customerName) || (input.name == zohaib.customerName) || (input.name == shoaib.customerName) || (input.name == rayyan.customerName) ){
    console.log(chalk.bold("User found"));
    if ((input.password == shahid.password) || (input.password == zohaib.password) || (input.password == shoaib.password) || (input.password == rayyan.password)){
        console.log(chalk.bold("Correct password. User logging in...."));
        
        const question =async () => {

            let ask = await inquirer.prompt([
                {name: "question",
                type: "list",
                message: "Please select the action that you want to perform",
                choices: [{name:"transaction", value: 0}, {name:"balance", value: 1} 
                ] 
                
            }])

            if (ask.question === 0){
                console.log("banking transaction in progress")
                const trans =async () => {
                    let say = await inquirer.prompt([
                        {name:"money",
                        type:"number",
                        message:"How much money do you want to withdraw?"
                    }
                    ])
                    if (input.name === "shahid"){
                        console.log(chalk.bgGrey("Transaction done. Your remaining balance is " + (shahid.bankBalance - say.money)))
                    }else if (input.name === "shoaib"){
                        console.log(chalk.bgGray("Transaction done. Your remaining balance is " + (shoaib.bankBalance - say.money)))
                    }else if (input.name === "zohaib"){
                        console.log(chalk.bgGray("Transaction done. Your remaining balance is " + (zohaib.bankBalance - say.money)))
                    }else if (input.name === "rayyan"){
                        console.log(chalk.bgGray("Transaction done. Your remaining balance is " + (rayyan.bankBalance - say.money)))
                    }                    
                }
                trans();
                
                }
            else{
                console.log("bank balance checking...")
                if (input.name === "shahid"){
                    console.log(chalk.green("Your bank balance is " +shahid.bankBalance + " rs"));
                }
                else if (input.name === "shoaib"){
                    console.log(chalk.green("Your bank balance is " +shoaib.bankBalance + " rs"));
                }else if (input.name === "zohaib"){
                    console.log(chalk.green("Your bank balance is " +zohaib.bankBalance + " rs"));
                }
                else if (input.name === "rayyan"){
                    console.log(chalk.green("Your bank balance is " + rayyan.bankBalance + " rs"));
                }
                else{
                    console.log(chalk.red("username could not be fetched"));
                }
 
            }
            
        }
        question();

    }else {
        console.log(chalk.red("Wrong password"));
    }}
else{
    console.log(chalk.red("User not found"));
}
}

inputdetails();