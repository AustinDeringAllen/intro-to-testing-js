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