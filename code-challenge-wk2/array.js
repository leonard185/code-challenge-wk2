
function generateArray(start, end) {
    let array = [];
    if (start <= end) {
        for (let i = start; i <= end; i++) {
            array.push(i);
        }
    } else {
        for (let i = start; i >= end; i--) {
            array.push(i);
        }
    }
    return array;
}

function generateAndDisplayArray() {
    let start = parseInt(document.getElementById("startNumber").value);
    let end = parseInt(document.getElementById("endNumber").value);
    
    if (!isNaN(start) && !isNaN(end)) {
        let result = generateArray(start, end);
        document.getElementById("result").innerHTML = result.join(', ');
    } else {
        document.getElementById("result").innerHTML = "Please enter valid numbers.";
    }
}
