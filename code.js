// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}

const sayHello = function(name) {
    if(typeof name !== "string" || name === "" || !isNaN(parseFloat(name))) {
        return "Hello, World!";
    } else {
        return "Hello, " + name + "!";
    }
}

const isFive = function(num) {
    if(num == 5)
        return true;
    else
        return false;
}

const isEven = function(input) {
    if(typeof input !== 'number') {
        return false;
    } else {
        return input % 2 === 0;
    }
}

function isVowel(input) {
    let returnValue;
    if(typeof input === "string" && input.length === 1) {
        switch (input.toLowerCase()) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                returnValue = true;
                break;
            default:
                returnValue = false;
                break;
        }
    } else {
        return false;
    }
    return returnValue;
}


// const isVowel = function(vowel) {
//     if(vowel.length === 1) {
//     } else {
//         return false;
//     }
// }