import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue("\n\t\t===={wellcome in MURTAZA ALI word cunter application}====\n"));
let word_count = await inquirer.prompt([
    {
        name: "word",
        message: chalk.greenBright("Enter your word that you are wany to count "),
        type: "input"
    }
]);
let words = word_count.word.trim().split(" ");
console.log(chalk.yellow(`totel words are in your sentence: ${[words.length]}`));
