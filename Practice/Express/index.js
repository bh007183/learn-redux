const { static } = require("express")
const express = require("express")
const fs = require("fs")
var uniqid = require('uniqid');


const PORT = process.env.PORT || 8080
const app = express()


app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




app.post("/api/notes", (req, res)=>{
    fs.readFile("./db.json", "utf-8", (err, data)=>{
        if(err) console.log(err)
        let parsed = JSON.parse(data)
        req.body.id = uniqid()
        parsed.push(req.body)
        fs.writeFile("./db.json", JSON.stringify(parsed), (err)=>{
            if(err){
                console.log(err)
            }else{
                fs.readFile("./db.json", "utf-8", (err, data)=>{
                    res.json(JSON.parse(data))
                })
            }
        })
    })
})

app.get("/api/notes", (req, res)=>{
    fs.readFile("./db.json", "utf-8", (err, data)=>{
        res.json(JSON.parse(data))
    })
})

app.get("/notes", (req, res)=>{
    console.log(req.body)

    res.sendFile(__dirname + "/public/notes.html")

})

app.delete("/api/notes/:id", (req, res)=>{
 console.log(req.params.id)
    fs.readFile("./db.json", "utf-8", (err, data)=>{
        let parsed = JSON.parse(data)
        let newArr = parsed.filter(obj => obj.id !== req.params.id)
        fs.writeFile("./db.json", JSON.stringify(newArr), (err)=>{
            if(err){
                console.log(err)
            }else{
                fs.readFile("./db.json", "utf-8", (err, data)=>{
                    res.json(JSON.parse(data))
                })
            }
    })
    
})
})

app.listen(PORT, function(){
    console.log(`app is lestening http://localhost:${PORT}`)
})
