let input = document.getElementById("text-input");

let lowerReplaced = input.value.toLowerCase().replace(/[^a-z0-9]/g, "");

function isPalindrome(str) {
    const processedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const len = processedStr.length;
    for (let i = 0; i < len / 2; i++) {
        if (processedStr[i] !== processedStr[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
function display() {
    let input = document.getElementById("text-input");

    if (input.value.length == 0) {
        alert("Please input a value");
    } else if (isPalindrome(input.value)) {
        document.getElementById("result").innerHTML = `${input.value} is a palindrome`; 
    } else {
        document.getElementById("result").innerHTML = `${input.value} is not a palindrome`; 
    }
}


