const cardNumber = document.querySelector("input[name='card-number']");

// Adds a hyphen every 4 numbers.
//https://www.encodedna.com/javascript/how-to-add-dash-after-every-3rd-character-using-javascript-or-jquery.htm
const addHyphen = element => {
    // let ele = element.value.split('-').join(''); // Removes dash if mistakenly added.
    cardNumber.value = element.value.match(/[0-9]{1,4}/g).join('-');
}

cardNumber.addEventListener('keyup', () => { addHyphen(cardNumber) });

// This function validates the year typed, so that it doesn't exceeds 4 years from current year.
const validateYear = () => {
    const year = document.querySelector("input[name='exp-date-year']");
    const presentDate = new Date();
    const presentYear = presentDate.getFullYear();
    let inputValue = year.value.toString().length;
    switch(inputValue) {
        case 0:
        case 1:
        case 2:
        case 3:
            return;
        case 4:
            if (year.value - presentYear > 4 || year.value - presentYear < 0) {
                alert('Please type a valid expiration year');
                return year.value = "";
            } else {
                return year.value;
            }
        default:
            alert('An error occur, please try again');
            return year.value = "";
    }
}

document.querySelector("input[name='exp-date-year']").addEventListener('keyup', validateYear);

// Clears every form's input element its value.
const clearForm = () => {
    const allInputs = document.querySelectorAll('input', 'option');
    const allInputsArray = Array.from(allInputs);
    let butSubmitBtn = allInputsArray.filter(input=> input.value !== 'Confirm');

    return butSubmitBtn.forEach(input=> input.value = "");
}

window.onload = clearForm();
//console.log(document.querySelector("input[name='name']"));
//const optionValue = document.querySelector("option[selected='selected]'");
//console.log(optionValue);
