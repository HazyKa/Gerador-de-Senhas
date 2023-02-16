const btnGenerate = document.getElementById("btnGenerate");
const btnCopy = document.getElementById("btnCopy");

const result = document.getElementById("result");
const upperCase = document.getElementById("upperCase");
const lowerCase = document.getElementById("lowerCase");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const passLenght = document.getElementById("passLenght");

function getRandomLower () {
    const charLower = "abcdefghijlmnopqrstuvwxyz";
    return charLower[Math.floor(Math.random() * charLower.length)];
}

function getRandomUpper () {
    const charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return charUpper[Math.floor(Math.random() * charUpper.length)];
}

function getRandomNumber () {
    const charNumber = "123456789";
    return charNumber[Math.floor(Math.random() * charNumber.length)];
}

function getRandomSymbol () {
    const charSymbol = "!@#$%^&*()[]{}=<>/,.";
    return charSymbol[Math.floor(Math.random() * charSymbol.length)];
}

const randomChar = {
    
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
}

btnGenerate.addEventListener("click", ()=>{
    const length = passLenght.value;
    const hasLower = lowerCase.checked;
    const hasUpper = upperCase.checked;
    const hasNumber = number.checked;
    const hasSymbol = symbol.checked;

    result.value = generatePasswd (hasLower, hasNumber, hasSymbol, hasUpper, length); 
}) 

const generatePasswd = (lower, upper, number, symbol, lenght) => {
    let gPasswd = "";
  
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
      (item) => {
        return Object.values(item)[0];
      }
    );
  
    for (let i = 0; i < lenght; i++) {
      typesArr.forEach((type) => {
        const funcName = Object.keys(type)[0];
        gPasswd += randomChar[funcName]();
      });
    }
  
    const finalyPasswd = gPasswd.slice(0, lenght);
    return finalyPasswd;
}

btnCopy.addEventListener("click", () => {
    navigator.clipboard.writeText(result.value);
    alert("texto copiado " + result.value);
});