const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 14
let passwordOne = []
let passwordTwo = ''


function generateRandom(){
    randomChar = Math.floor(Math.random() * characters.length)
    return randomChar
}

function generatePassword(num){
    for(i = 0; i < num; i++){
        let result = generateRandom()
        // console.log(result)
        passwordOne.push(result)

    }
    for(i = 0; i < passwordOne.length; i++){
        let num = passwordOne[i]
        let passwordTwo = characters[num]
    }
    // for(i = 0; i < passwordOne.length; i++){
    //     let result = characters[i]
    //     console.log(result)
    //     // passwordTwo = passwordTwo + result
    // }
}


generatePassword(10)
console.log(passwordTwo)