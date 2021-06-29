
let startButton = document.querySelector("#start")
let Question = [{question: "What is Bens name", options:["frank", "lilly", "ted", "ben"], answer: "ben"}, {question: "What is el Doggos name", options:["frank", "twuill", "ted", "ben"], answer: "twuill"}]

let startTime = 60
let index = 0

function Renderer(index, timmer){
    if(index > Question.length - 1){
        document.querySelector("#question").innerHTML = "End Game"
        clearInterval(timmer)
        
    }
    document.querySelector("#question").innerHTML = Question[index].question || "End Game"
for(let i = 0; i < Question[index].options.length; i++){
    let button = document.createElement("button")
    console.log(button)
    button.setAttribute("data-id", Question[index].options[i])
    button.textContent = Question[index].options[i]
    button.addEventListener("click", (event) => {
        if(event.target.getAttribute("data-id") === Question[index].answer){
            let element = document.querySelector("#optionContain")
            while(element.firstChild){
                element.removeChild(element.firstChild)
            }
            Renderer(index = 1 + index, timmer)
        }else{
            startTime = startTime - 10  
        }
    })
    console.log(button)
    document.querySelector("#optionContain").appendChild(button)

}

}



startButton.addEventListener("click", function(){

    
    let timmer = setInterval(myTimmer, 1000)
    function myTimmer(event){
        document.querySelector("#timer").innerHTML = startTime
        startTime --

        if(startTime <= -1){
            clearInterval(timmer)
        }
    }
    Renderer(index, timmer)



})