const inquirer = require("inquirer")
const view = require("./view")
const add = require("./add")
const del = require("./delete")
const up = require("./update")

function initialPrompt(connection){

    inquirer.prompt([
        {
            name: "Initial",
            message: "What would you like to do?",
            type: "list",
            choices: ["Update", "Add", "View", "Delete", "Quit"]

        }
    ]).then(data => {
        switch (data.Initial) {
            case "Update":
                
                up(connection, initialPrompt)
                break;
            case "Add":
                add(connection, initialPrompt)
                break;
            case "View":
                view(connection, initialPrompt)
                break;
            case "Delete":
                del(connection, initialPrompt)
                
                break;
            case "Quit":
                console.log("Have a nice day!")
                connection.end()
                break;
        
            default:
                break;
        }
    })

}

module.exports = initialPrompt