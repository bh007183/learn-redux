// const express = require("express")
const mysql = require("mysql")
// const app = express()
const initialPrompt = require("./initialPrompt")

// const PORT = process.env.PORT || 8080

const connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "password",
    database: "practice_db"
})

connection.connect(err => {
    if(err) console.log(err)
    console.log("connected as id " + connection.threadId)
    initialPrompt(connection)

})















// app.listen(PORT, ()=> {
//     console.log(PORT)
// })

