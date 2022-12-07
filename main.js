morseCodeTable = {
    A: "·−",
    B: "−···",
    C: "−·−·",
    D: "−··",
    E: "·",
    F: "··−·",
    G: "−−·",
    H: "····",
    I: "··",
    J: "·−−−",
    K: "−·−",
    L: "·−··",
    M: "−−",
    N: "−·",
    O: "−−−",
    P: "·−−·",
    Q: "−−·−",
    R: "·−·",
    S: "···",
    T: "−",
    U: "··−",
    V: "···−",
    W: "·−−",
    X: "−··−",
    Y: "−·−−",
    Z: "−−··"
};



function translateToMorseCode(inputString){
    inputString = inputString.toUpperCase();
    let textarray = inputString.split("");
    let convertedtext = "";
    for(let i = 0; i<textarray.length; i++){
        if(morseCodeTable.hasOwnProperty(textarray[i])){
            convertedtext += morseCodeTable[textarray[i]];
        }
    }
    return convertedtext;
}

console.log(translateToMorseCode("Was geht ab"))


//create a variable called inputtext and assign it the value of the input field
let inputtext = document.getElementById("inputtext");

//set the id output to the return value of the function translateToMorseCode with the inputtext as parameter
document.getElementById("output").innerHTML = translateToMorseCode(inputtext.value);

