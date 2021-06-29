const initialPrompt = require("./initialPrompt");
const inquirer = require("inquirer");

function del(connection, initialPrompt) {
  inquirer
    .prompt([
      {
        name: "Delete",
        type: "list",
        message: "What would you like to delete?",
        choices: ["Department", "Role", "Employee"],
      },
    ])
    .then((data) => {
      switch (data.Delete) {
        case "Department":
          connection.query("SELECT * FROM departments", (err, data) => {
            if (err) {
              console.log(err);
            } else {
              inquirer
                .prompt([
                  {
                    name: "Department",
                    type: "list",
                    message: "Which Department Would you like to delete?",
                    choices: data.map((item) => item.name),
                  },
                ])
                .then((selected) => {
                  connection.query(
                    "DELETE FROM departments WHERE name = ?",
                    selected.Department,
                    (err, data) => {
                      if (err) {
                        console.log(err);
                      } else {
                        console.log("Department Removed");
                        initialPrompt(connection);
                      }
                    }
                  );
                });
            }
          });

          break;
        case "Role":
          connection.query("SELECT * FROM role", (err, data) => {
            if (err) {
              console.log(err);
            } else {
              inquirer
                .prompt([
                  {
                    name: "Role",
                    type: "list",
                    message: "Which Role Would you like to delete?",
                    choices: data.map((item) => item.title),
                  },
                ])
                .then((selected) => {
                  connection.query(
                    "DELETE FROM role WHERE title = ?",
                    selected.Role,
                    (err, data) => {
                      if (err) {
                        console.log(err);
                      } else {
                        console.log("Role Removed");
                        initialPrompt(connection);
                      }
                    }
                  );
                });
            }
          });

          break;
        case "Employee":
          connection.query("SELECT * FROM employee", (err, data) => {
            if (err) {
              console.log(err);
            } else {
              inquirer
                .prompt([
                  {
                    name: "Employee",
                    type: "list",
                    message: "Which employee Would you like to delete?",
                    choices: data.map(
                      (item) => item.first_name + " " + item.last_name
                    ),
                  },
                ])
                .then((selected) => {
                  console.log(selected.Employee.split(" ")[0]);

                  connection.query(
                    "DELETE FROM employee WHERE first_name = ? AND last_name = ?",
                    [
                      selected.Employee.split(" ")[0],
                      selected.Employee.split(" ")[1],
                    ],
                    (err, data) => {
                      if (err) {
                        console.log(err);
                      } else {
                        console.log("Employee Removed");
                        initialPrompt(connection);
                      }
                    }
                  );
                });
            }
          });

          break;

        default:
          break;
      }
    });
}

module.exports = del;
