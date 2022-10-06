// DOM Elements
const cardNumberInput = document.querySelector("input[name='card-number']");
const cardHolderNameInput = document.querySelector('#name');
const expDateYearInput = document.querySelector("input[name='exp-date-year']");
const cvcInput = document.querySelector("input[name='cvc']");
const expDateMonthInput = document.querySelector('select').value;
const currentDate = new Date().getTime();
const expDate = new Date(`${expDateYearInput.value}-${expDateMonthInput}`).getTime();


// Adds a hyphen every 4 numbers.
//https://www.encodedna.com/javascript/how-to-add-dash-after-every-3rd-character-using-javascript-or-jquery.htm
const addHyphen = element => {
    // let ele = element.value.split('-').join(''); // Removes dash if mistakenly added.
    cardNumberInput.value = element.value.match(/\d{1,4}/g).join('-');
}

cardNumberInput.addEventListener('input', () => { addHyphen(cardNumberInput) });

// Customize error messages    

cardHolderNameInput.addEventListener('input', () => {
    if (cardHolderNameInput.validity.patternMismatch) {
        // Multiline string with backticks
        cardHolderNameInput.setCustomValidity
            (`Acceptable formats: 
        John Smith, 
        JOHN SMITH, 
        John J. Smith,
        JOHN J. SMITH, 
        John Smith-Smith,
        JOHN SMITH-SMITH`);
        cardHolderNameInput.reportValidity();
    } else {
        cardHolderNameInput.setCustomValidity("");
    }
})

cardNumberInput.addEventListener('input', () => {
    if (cardNumberInput.validity.patternMismatch) {
        cardNumberInput.setCustomValidity('Numbers only');
        cardNumberInput.reportValidity();
    } else {
        cardNumberInput.setCustomValidity('');
    }
})

expDateYearInput.addEventListener('input', () => {
    if (!validateExpDate() || expDateYearInput.validity.patternMismatch) {
        expDateYearInput.setCustomValidity('Exp. Date cannot exceed 4 years.');
        expDateYearInput.reportValidity();
    } else {
        expDateYearInput.setCustomValidity('');
    }
})

cvcInput.addEventListener('input', () => {
    if (cvcInput.validity.patternMismatch) {
        cvcInput.setCustomValidity('Letters only');
        cvcInput.reportValidity();
    } else {
        cvcInput.setCustomValidity('');
    }
})

const validateExpDate = () => {
    if (expDateMonthInput && expDateYearInput) {
        if (expDate - currentDate > 126227808000 || expDate - currentDate < 0) {
            return false;
        } else {
            return true;
        }
    }
}

// Clears every form's input element's value.
const clearForm = () => {
    const allInputs = document.querySelectorAll('input', 'option');
    const allInputsArray = Array.from(allInputs);
    let butSubmitBtn = allInputsArray.filter(input => input.value !== 'Confirm');

    return butSubmitBtn.forEach(input => input.value = "");
}

const resetCard = () => {
    let cardNumber = document.querySelector('.card-front-number');
    let cardHolderName = document.querySelector('.cardholder-front-name');
    let expDate = document.querySelector('.exp-date-front');
    let cvc = document.querySelector('.cvc-back');

    cardNumber.textContent = '0000 0000 0000 0000';
    cardHolderName.textContent = 'Jane Applessed';
    expDate.textContent = '00/00';
    cvc.textContent = '000';
}

//window.onload = clearForm();

const submitForm = (event) => {
    event.preventDefault();

    // DOM card elements
    let cardNumber = document.querySelector('.card-front-number');
    let cardHolderName = document.querySelector('.cardholder-front-name');
    let expDate = document.querySelector('.exp-date-front');
    let cvc = document.querySelector('.cvc-back');

    // Change layout elements
    const formContainer = document.querySelector('.formContainer');
    const formCompleted = document.querySelector('.form-completed');

    if (validateExpDate()) {
        // Each card value gets the user input value
        expDate.textContent = `${expDateMonthInput.valueOf()}/${expDateYearInput.value.toString().slice(-2)}`;
        cardHolderName.textContent = cardHolderNameInput.value.toUpperCase();
        cardNumber.textContent = cardNumberInput.value;
        cvc.textContent = cvcInput.value;
        clearForm();
        // Switch displays
        //formContainer.style.display = 'hidden';
        //formCompleted.style.display = 'flexbox';
    } else {
        resetCard();
    }
}

document.querySelector('form').addEventListener('submit', submitForm);

const darken = () => {
    document.querySelector('.overlay').style.opacity = '0.4';
    document.querySelector('body').style.backgroundColor = "rgb(0, 0, 0, 0.9)";
    document.querySelector('body').style.color = 'white';
    document.querySelectorAll('.btn').forEach(button=> {
        button.style.color = 'black';
        button.style.backgroundColor = "hsl(187, 63%, 47%, 0.9)";
        });
}

const lighten = () => {
    document.querySelector('.overlay').style.opacity = '1';
    document.querySelector('body').style.backgroundColor = "rgb(222, 222, 222, 0.9)";
    document.querySelector('body').style.color = 'black';
    document.querySelectorAll('.btn').forEach(button=> {
        button.style.color = 'white';
        button.style.backgroundColor = "hsl(278, 68%, 11%)";
        });
}

document.querySelector('.moon').addEventListener('click', darken);
document.querySelector('.sun').addEventListener('click', lighten);
