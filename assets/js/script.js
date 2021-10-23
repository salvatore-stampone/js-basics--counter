let counter = document.querySelector(".counter");
const plusOneButton = document.querySelector(".plus-one");
const minusOneButton = document.querySelector(".minus-one");
const plusCustomNumberButton = document.querySelector(".plus-custom-number");
const minusCustomNumberButton = document.querySelector(".minus-custom-number");
const resetButton = document.querySelector(".reset");
const customNumberButton = document.querySelector(".custom-number");
let currentNumber;

plusOneButton.addEventListener("click", addOne);
minusOneButton.addEventListener("click", subtractOne);
plusCustomNumberButton.addEventListener("click", addCustomNumber);
minusCustomNumberButton.addEventListener("click", subtractCustomNumber);
resetButton.addEventListener("click", resetCounter);
customNumberButton.addEventListener("click", replaceCustomNumber);

function addOne() {
    currentNumber = parseFloat(counter.innerHTML);
    counter.textContent = currentNumber + 1;
}

function subtractOne() {
    currentNumber = parseFloat(counter.innerHTML);
    if (currentNumber == 0) {
        return;
    } else {
        counter.textContent = currentNumber - 1;
    }
}

function addCustomNumber() {
    let a = plusCustomNumberButton.textContent;
    currentNumber = parseFloat(counter.textContent);
    counter.textContent = currentNumber + parseFloat(a);
}

function subtractCustomNumber() {
    let b = minusCustomNumberButton.textContent;
    currentNumber = parseFloat(counter.innerHTML);
    if (currentNumber + parseFloat(b) < 0) {
        return;
    } else {
        counter.textContent = currentNumber + parseFloat(b);
    }
}

function resetCounter() {
    counter.textContent = 0;
}


function replaceCustomNumber() {
    let customNumber = parseInt(prompt("Write the number you want to add/subtract:"));

    if (!/^[0-9]+$/.test(customNumber)) {
        alert("Invalid number. Try with one between 1 and 999");
    } else {
        plusCustomNumberButton.textContent = `+${customNumber}`;
        minusCustomNumberButton.textContent = `-${customNumber}`;
    }
}
