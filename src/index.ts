import * as inquirer from 'inquirer';
import chalk from "chalk";

const prompt = inquirer.createPromptModule();
let number1: number;
let number2: number;
let operator: "+"|"-"|"*"|"/";
console.log(chalk.cyanBright(`# Command Line Calculator`));
function operand1(): void{
    prompt([
        {
            type: "input",
            name: "num1",
            message: "Enter 1st operand...",
            default: 0
        }
    ]).then(answer => {
        if(answer["num1"] != ""){
            let check: boolean = isNumber(answer["num1"]);
            if(check){
                number1 = parseFloat(answer["num1"])
                operatorFunc();
            } else {
                console.error(chalk.redBright(`only numbers are allowed`));
                operand1();
            }
        } else {
            console.log(chalk.redBright("invalid operation"))
            operand1();
        }
    })
}

function operatorFunc(): void{
    prompt([
        {
            type: 'list',
            name: "operator",
            message: "Enter Operator...",
            choices: ["+", "-", "*", "/"]
        }
    ]).then(answer => {
            operator = answer["operator"]
            operand2();
    })
}

function operand2(): void {
    prompt([
        {
            type: "input",
            name: "num2",
            message: "Enter 2nd operand...",
            default: 0
        }
    ]).then(answer => {
        if(answer["num2"] != ""){
            let check: boolean = isNumber(answer["num2"]);
            if(check){
                number2 = parseFloat(answer["num2"])
                console.log(chalk.green(calculator(number1, number2, operator)));
            } else {
                console.error(chalk.redBright(`only numbers are allowed`));
            }
            operand1();
        } else {
            console.log(chalk.redBright("invalid operation"))
        }
    })
}

function calculator(num1: number, num2: number, operator: string) {
    let result: number;
    switch (operator) {
        case "+":
            result = num1+num2;
            return `${number1} + ${number2} = ${result}`
            break;
        case "-":
            result = num1-num2;
            return `${number1} - ${number2} = ${result}`
            break;
        case "*":
            result = num1*num2;
            return `${number1} x ${number2} = ${result}`
            break;
        case "/":
            result = num1/num2;
            return `${number1} / ${number2} = ${result}`
            break;
        default:
            return "invalid"
            break;
    }

}
function isNumber(num: string): boolean {
    let parse = parseInt(num);
    let check = !isNaN(parse);
    return check;
}
operand1();