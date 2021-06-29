const fs = require("fs")
const aprentice = require("./Aprentice")
const engineer = require("./Engineer")


function a(fact){
    fs.readFile('./index.html', {encoding:'utf8'}, function (err, data) {
        if (err) throw err;
        console.log(data)
        
        if(fact.Position === "Apprentice"){
           data = data.replace("{{ team }}", aprentice(fact))
           fs.writeFile("./index.html", data, (err)=>{
               if(err){
                   console.log(err)
               }else{
                   console.log("success")
               }
           })
        }else{
            data = data.replace("{{ team }}", engineer(fact))
           fs.writeFile("./index.html", data, (err)=>{
               if(err){
                   console.log(err)
               }else{
                   console.log("success")
               }
           })

        }
        
      });
      

}
module.exports = a


