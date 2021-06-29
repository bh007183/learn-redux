DROP DATABASE IF EXISTS practice_db;
CREATE DATABASE practice_db;
USE practice_db;

CREATE TABLE departments(
    id INTEGER AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY(id)
);

CREATE TABLE role(
    id INTEGER AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INTEGER,
    PRIMARY KEY(id),
    FOREIGN KEY (department_id)
        REFERENCES departments(id)
        ON DELETE CASCADE
);

CREATE TABLE employee(
    id INTEGER AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER,
    manager_id INTEGER references employee,
    PRIMARY KEY(id),
	FOREIGN KEY (role_id)
        REFERENCES role(id)
        ON DELETE CASCADE
       

);

INSERT INTO departments(name) value ("Management"), ("Engineers"), ("Quality Control");

INSERT INTO role (title, salary, department_id) value ("Engineering Lead", 70000, 1), ("Project Manager", 80000, 1), ("Test Engineer", 50000, 3), ("Assosiate Engineer", 60000, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) value ("Ben", "Hopkins", 1, 2), ("Sam", "Oberg", 2, null), ("Kevin", "Man", 4, null), ("Andrew", "Dude", 3, 4)

SELECT * FROM departments JOIN role ON departments.id = role.department_id JOIN employee ON role.id = employee.role_id

SELECT * FROM employee JOIN role ON employee.role_id = role.id JOIN departments ON role.departments = departments.id.