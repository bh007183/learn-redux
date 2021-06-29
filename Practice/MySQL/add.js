const inquirer = require("inquirer");

function add(connection, initialPrompt) {
  inquirer
    .prompt([
      {
        message: "What would you like to add?",
        name: "Add",
        type: "list",
        choices: ["Department", "Role", "Employee"],
      },
    ])
    .then((data) => {
      switch (data.Add) {
        case "Department":
          inquirer
            .prompt([
              {
                name: "Name",
                message: "What department would you like to create?",
                type: "input",
              },
            ])
            .then((data) => {
              let selected = data.Name;
              connection.query(
                "INSERT INTO departments SET ?",
                { name: data.Name },
                (err, data) => {
                  if (err) console.log(err);
                  console.log(`You created ${selected}`);
                  initialPrompt(connection);
                }
              );
            });
          break;
        case "Role":
          inquirer
            .prompt([
              {
                name: "Name",
                message: "What Role would you like to create?",
                type: "input",
              },
              {
                name: "Salary",
                message: "What Salary will be paid to this roll?",
                type: "input",
              },
            ])
            .then((data) => {
              let objSet = {
                title: data.Name,
                salary: data.Salary,
              };
              connection.query("SELECT * FROM departments", (err, data) => {
                if (err) {
                  console.log(err);
                } else {
                  let returnedArr = data;
                  inquirer
                    .prompt([
                      {
                        name: "Belongs",
                        message: `What department does ${objSet.title} belong to?`,
                        type: "list",
                        choices: data.map((obj) => obj.name),
                      },
                    ])
                    .then((choice) => {
                      let value = returnedArr.filter(
                        (obj) => obj.name === choice.Belongs
                      );
                      objSet.department_id = value[0].id;
                      connection.query(
                        "INSERT INTO role SET ?",
                        [objSet],
                        (err, data) => {
                          if (err) {
                            console.log(err);
                          } else {
                            console.log("Role Created");
                            initialPrompt(connection);
                          }
                        }
                      );
                    });
                }
              });
            });

          break;
        case "Employee":
          let roleArr;
          let empArr;

          function getRoles(connection, getEmp, promp) {
            connection.query("SELECT * FROM role", (err, data) => {
              if (err) console.log(err);
              roleArr = data;
              getEmp(connection, promp);
            });
          }
          function getEmp(connection, promp) {
            connection.query("SELECT * FROM employee", (err, data) => {
              if (err) console.log(err);
              empArr = data;
              promp(connection, initialPrompt);
            });
          }
          function promp(connection, initialPrompt) {
            inquirer
              .prompt([
                {
                  name: "first_name",
                  message: "What is the first name of the employee?",
                  type: "input",
                },
                {
                  name: "last_name",
                  message: "What is the last name of the employee",
                  type: "input",
                },
                {
                  name: "role_id",
                  message: "What is the role of the employee",
                  type: "list",
                  choices: roleArr.map((obj) => obj.title),
                },
                {
                  name: "manager_id",
                  message: "Who is this employees Manager",
                  type: "list",
                  choices: [
                    "None",
                    ...empArr.map(
                      (obj) => obj.first_name + " " + obj.last_name
                    ),
                  ],
                },
              ])
              .then((data) => {
                let obj = {
                  first_name: data.first_name,
                  last_name: data.last_name,
                };

                let RoleId = roleArr.filter(
                  (obj) => obj.title === data.role_id
                );
                obj.role_id = RoleId[0].id;

                if (data.manager_id !== "None") {
                  let empId;
                  for (let i = 0; i < empArr.length; i++) {
                    if (
                      empArr[i].first_name === data.first_name &&
                      empArr[i].last_name === data.last_name
                    ) {
                      empId = empArr[i].id;
                    }
                  }
                  obj.manager_id = empId;
                } else {
                  obj.manager_id = null;
                }

                connection.query(
                  "INSERT INTO employee SET ?",
                  obj,
                  (err, data) => {
                    if (err) console.log(err);
                    console.log("Employee Added");
                    initialPrompt(connection);
                  }
                );
              });
          }

          getRoles(connection, getEmp, promp);

          break;

        default:
          break;
      }
    });
}

module.exports = add;
