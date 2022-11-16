import * as inquirer from 'inquirer';
const prompt = inquirer.createPromptModule();
let number1: number;
let number2: number;
let operator: "+"|"-"|"*"|"/";


console.log(`
    S I M P L E   C A L C U L A T O R
`)
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
                number1 = parseInt(answer["num1"])
                operatorFunc();
            } else {
                console.error(`only numbers are allowed`);
                operand1();
            }
        } else {
            console.log("invalid operation")
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
        if(answer["operator"] != ""){
            operator = answer["operator"]
            operand2();
        } else {
            console.log("enter valid")
            operand1();
        }
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
                number2 = parseInt(answer["num2"])
                console.log(calculator(number1, number2, operator));
            } else {
                console.error(`only numbers are allowed`);
                operand1();
            }
            
            operand1();
        } else {
            console.log("invalid operation")
        }
    })
}

function calculator(num1: number, num2: number, operator: string) {
    switch (operator) {
        case "+":
            return num1 + num2
            break;
        case "-":
            return num1 - num2
            break;
        case "*":
            return num1 * num2
            break;
        case "/":
            return num1 / num2
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