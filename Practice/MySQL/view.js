const inquirer = require("inquirer");
const initialPrompt = require("./initialPrompt")

function view(connection, initialPrompt) {
  inquirer
    .prompt([
      {
        message: "What Would You Like TO View?",
        type: "list",
        choices: ["Departments", "Roles", "Employees"],
        name: "Base",
      },
    ])
    .then((data) => {
      switch (data.Base) {
        case "Departments":
          connection.query("SELECT * FROM departments", function (err, data) {
            if (err) console.log(err);
            console.table(data);
            initialPrompt(connection)
          });

          break;
        case "Roles":
          connection.query("SELECT * FROM role", function (err, data) {
            if (err) console.log(err);
            console.table(data);
            initialPrompt(connection)
          });

          break;
        case "Employees":
          connection.query("SELECT * FROM employee", function (err, data) {
            if (err) console.log(err);
            console.table(data);
            initialPrompt(connection)
          });

          break;

        default:
          break;
      }
    });
}

module.exports = view
