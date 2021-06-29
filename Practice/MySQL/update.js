const inquirer = require("inquirer")

function up(connection, initialPrompt){
    console.log("started")

    inquirer.prompt([
        {
            
            type: "list",
            message: "What department you like to update?",
            choices: ["Department", "Role", "Employee"],
            name: "Catigory"

        }
    ]).then(data => {
        switch (data.Catigory) {
            case "Department":
                connection.query("SELECT name FROM departments", (err, data) => {
                    if(err){
                        console.log(err)
                    }else{
                        inquirer.prompt([
                            {
                                name: "Department",
                                type: "list",
                                message: "Which would you like to update?",
                                choices: data
                    
                            },
                            {
                                name: "Updated",
                                type: "input",
                                message: "What would you like this department to be called now?",
                            },
                        ]).then(selected => {
                            connection.query("UPDATE departments SET name = ? WHERE name = ?", [selected.Updated, selected.Department], (err, data) => {
                                if(err){
                                console.log(err)
                            }else{
                                console.log("Department Updated")
                                initialPrompt(connection)
                            }
                            })

                        })
                    }
                })
                
                break;
            case "Role":
                console.log("Cannot Update Role at this time!")
                initialPrompt(connection)
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
                          name: "Employee",
                          message: "What is the first name of the employee whos role you want to change?",
                          type: "list",
                          choices: empArr.map(item => item.first_name + " " + item.last_name)
                        },
                        {
                          name: "Role",
                          message: "What role would you like this employee to be in now?",
                          type: "list",
                          choices: roleArr.map(item => item.title)
                        }
                      ]).then((data) => {

                        let val = roleArr.find(item => item.title === data.Role)
                        console.log(val.id)
                       

                        connection.query(
                          "UPDATE employee SET role_id = ? WHERE first_name = ? AND last_name = ?",
                          [val.id, data.Employee.split(" ")[0], data.Employee.split(" ")[1]],
                          (err, data) => {
                            if (err) console.log(err);
                            console.log("Employee Role Updated");
                            initialPrompt(connection);
                          }
                        );
                      });
                  }
                  getRoles(connection, getEmp, promp)
                
                break;
        
            default:
                break;
        }
    })
}

module.exports = up




