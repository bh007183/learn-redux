const inquirer = require("inquirer")
const wrighter = require("./wrighter")

let state;

inquirer.prompt([
    {
        type: "input",
        message: "What is the primary technology in this app?",
        name: "Technology"
    },
    {
        type: "input",
        message: "What is the primary purpose of this app?",
        name: "Purpose"
    }

]).then(res => {

 
    
    wrighter(res)

}).catch( err => {
    console.log(err)
})