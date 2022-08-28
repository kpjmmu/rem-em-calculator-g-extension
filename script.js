// Global Variables
const pxEl = document.querySelector("#px-input-el");
const resultEl = document.querySelector("#result-el");
const calcBtn = document.querySelector("#calculate-el");
const remRadio = document.querySelector("#rem-radio");
const emRadio = document.querySelector("#em-radio");
const inputResult = document.querySelector("#input-result")
const baseContainer = document.querySelector(".base-px-container");
const unitOutput = document.querySelector(".result-text-unit");
const baseValue = document.querySelector("#base-px-input");
const remDivider = 16;

// Enter key click event for calculation
pxEl.addEventListener("keyup", function (e) {
    e.preventDefault();
    if (e.keyCode === 13) {
        calcBtn.click();
    }
})

// Click event for calculation
calcBtn.addEventListener("click", function () {
    let emValue = baseValue.value;
    if (emRadio.checked) {
        console.log(pxEl.value / emValue)
        resultEl.textContent = parseFloat((pxEl.value / emValue).toFixed(4));
        unitOutput.innerHTML = " em";
    } else {
        resultEl.textContent = parseFloat((pxEl.value / remDivider).toFixed(4));
        unitOutput.innerHTML = " rem";
    }
});

// Render em calculation state
emRadio.addEventListener("input", function () {
    baseContainer.style.display = "initial";
    clearFields();

});

remRadio.addEventListener("input", function () {
    baseContainer.style.display = "none";
    clearFields();
});

// Clear inputs function

function clearFields() {
    resultEl.textContent = "";
    unitOutput.textContent = "";
    baseValue.value = "";
    pxEl.value = "";
}
