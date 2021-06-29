const express = require("express")

const app = express()
const PORT = process.env.PORT || 8080

// Promis //
// const catsError = {
//     message: "This cat is an error, there has been a mistake with your query. No such user",
//     status: 401,
//     response: "error"
// }
// const catsSuccess = {
//     message: "This is the most fluffy cat of all timer",
//     status: 200,
//     response: "Success"
// }


// function getCat(obj){
//     return new Promise((resolve, reject) => {
//         const keyArr = Object.values(obj)

//         switch (keyArr.includes("Success")) {
//             case false:
//                 reject(obj)
                
//                 break;
//             case true:
//                 resolve(obj)
                
//                 break;
        
//             default:
//                 break;
//         }


//     })
// }

// getCat(catsError).then(data => console.log(data)).catch(err => console.log(err))

let arrArr = [1,4,5,6,7,8,9,0,4,3,6,5,7,8,"g"]

async function getCat(obj){ // this will not settle undile data is reseaved

    const data = await arrArr.filter(item => item === "g")
    console.log(data)
    console.log(1)
   


}

getCat()


app.listen(PORT, function(){
    console.log(PORT)
})



// 
// async await

