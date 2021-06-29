const inquirer = require("inquirer")

const a = require("./wrighter")

inquirer.prompt([
    {
        type: "input",
        message: "Employee Name?",
        name: "Name",
    },
    {
        type: "list",
        message: "Employee Position?",
        name: "Position",
        choices: ["Engineer", "Apprentice"]
    }
    
]).then(res => {
    a(res)

}).catch(err => console.log(err))