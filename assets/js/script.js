const body = document.body;

let counter = document.createElement("div");
counter.className = "counter";
counter.innerHTML = 0;
body.prepend(counter);

const buttonsDiv = document.createElement("div");
buttonsDiv.className = "buttons";
counter.after(buttonsDiv);

const plusOneButton = document.createElement("button");
plusOneButton.classList.add("circular-button", "plus-one");
plusOneButton.innerHTML = "+";
buttonsDiv.append(plusOneButton);

const resetButton = document.createElement("button");
resetButton.className = "reset";
resetButton.innerHTML = "AC";
buttonsDiv.append(resetButton);

const minusOneButton = document.createElement("button");
minusOneButton.classList.add("circular-button", "minus-one");
minusOneButton.innerHTML = "-";
buttonsDiv.append(minusOneButton);

const plusCustomNumberButton = document.createElement("button");
plusCustomNumberButton.classList.add("long-button", "plus-custom-number");
plusCustomNumberButton.innerHTML = "+100";
buttonsDiv.append(plusCustomNumberButton);

const minusCustomNumberButton = document.createElement("button");
minusCustomNumberButton.classList.add("long-button", "minus-custom-number");
minusCustomNumberButton.innerHTML = "-100";
buttonsDiv.append(minusCustomNumberButton);

const customNumberButton = document.createElement("button");
customNumberButton.classList.add("very-long-button", "custom-number");
customNumberButton.innerHTML = "Set a custom number to add/subtract!";
buttonsDiv.append(customNumberButton);

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
