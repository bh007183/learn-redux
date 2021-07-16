const express = require("express")

const app = express()
const PORT = process.env.PORT || 8080

function printDog(){
    console.log("Dog")
}



function fetch(res){
    
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(res){
                    resolve(res)
                }else{
                    reject(res)
                }  
                
            }, 4000);
            
        })
}

fetch(true).then(res => console.log(res + " success")).catch(err => console.log(err + " error"))






// 
// async await

