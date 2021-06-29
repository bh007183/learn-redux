const fs = require("fs")


function contentFunction(obj){
    return(
    `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<p>Hello World!<p>
<p>The Primary Technology is ${obj.Technology}!<p>
<p>The Primary Purpose of this app is ${obj.Purpose}
    
</body>
</html>`
    )
    
}


function wrighter(obj){

    fs.writeFile("./index.html", contentFunction(obj), (err) => {
        if(err){
            console.log(err)
        }else{
            console.log("check for success")
    
        }
    } )


}

module.exports = wrighter

