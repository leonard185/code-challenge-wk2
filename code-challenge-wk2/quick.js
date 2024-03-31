let inputString = 'The Quick Brown Fox';
let swappedString = swapCase(inputString);
document.write(swappedString);
function swapCase(inputString) {
    let result = '';
    for (let i = 0; i < inputString.length; i++) {
        let char = inputString.charAt(i);
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }
    return result;
}

