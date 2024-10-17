// -----Data types-----//
// strings "hello"
// number 5
// boolean true false
//undefied -- literally undefined
// null -- empty or non existence
//object--
//array

// ------------Variable-----------------//
// var keyword -- its global scope 
//let keyword -- preferred, its block scope
//const keyword-- can't be changed
const prompt = require("prompt-sync")()  
const name = prompt("Whats your name?:  ")
console.log("Hello", name, "welcome to our game")

const shouldWeplay = prompt("Do you want to play?: ")
const condition = shouldWeplay.toLowerCase() === "yes"

if (condition) {
    //Game logic
    const leftOrRight = prompt("You enter a maze, do you want to go left or right?: ")
    if(leftOrRight === "left"){
        console.log("You go left and see a bridge...")
        const cross = prompt("Do you want to cross the bridge?: ").toLowerCase()
        if(cross == "yes" || cross ==="y" || cross ==="cross" || cross === "okay"){
            console.log("You cross but the bridge was weak, it broke and you fell. You lost....LOL ")
        }else{
            console.log("Good choice...You win!")
        }
    }
    else{
        console.log("You go right and fall off a cliff...")
    }
    
}
else if(shouldWeplay === "no" ){
    console.log("okay :(")
}
else{
   console.log("Invalid input...")
}



//---------------------Logical operators--------------///
// && - and
// || - or
// ! - not