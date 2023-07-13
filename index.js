let numArr = [];
let num1;
let num2;
let type;

//Event Listeners

window.onload = () => {
    const arr = document.getElementsByClassName('number');
    document.getElementById('add').addEventListener('click', assignType);
    document.getElementById('divide').addEventListener('click', assignType);
    document.getElementById('subtract').addEventListener('click', assignType);
    document.getElementById('multiply').addEventListener('click', assignType);
    document.getElementById('equation').addEventListener('click', calculate);

    for (var i = 0; i < arr.length; i++) {
        arr[i].addEventListener('click', pressNumber);
    }
};

//Calculations

const sum = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
};

const sub = (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
};

const div = (num1, num2) => {
    return parseInt(num1) / parseInt(num2);
};

const multiply = (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
};

// Functions

// const testingFunction = () => {};

const assignType = (evt) => {
    if (evt.currentTarget.id === 'add') {
        document.getElementById('totals').innerHTML = `${
            document.getElementById('totals').innerHTML + ' + '
        }`;
        return (type = sum);
    } else if (evt.currentTarget.id === 'subtract') {
        document.getElementById('totals').innerHTML = `${
            document.getElementById('totals').innerHTML + ' - '
        }`;
        return (type = sub);
    } else if (evt.currentTarget.id === 'divide') {
        document.getElementById('totals').innerHTML = `${
            document.getElementById('totals').innerHTML + ' / '
        }`;
        return (type = div);
    } else if (evt.currentTarget.id === 'multiply') {
        document.getElementById('totals').innerHTML = `${
            document.getElementById('totals').innerHTML + ' x '
        }`;
        return (type = multiply);
    }
};

const pressNumber = (evt) => {
    const number = parseInt(evt.target.innerHTML);
    document.getElementById('totals').innerHTML = `${
        document.getElementById('totals').innerHTML + number
    }`;
    numArr.push(number);
    console.log(numArr);
};

const calculate = () => {
    num1 = parseInt(
        document.getElementById('totals').textContent.split(/[.\x+-/_]/)[0]
    );
    num2 = parseInt(
        document.getElementById('totals').textContent.split(/[.\x+-/_]/)[1]
    );

    document.getElementById('calc').innerHTML =
        document.getElementById('totals').innerHTML;

    document.getElementById('totals').innerHTML = `${type(num1, num2)}`;
};

//Return Calculator to default state
const reset = () => {
    numArr = [];
    num1 = '';
    num2 = '';
    round = 0;
    document.getElementById('totals').innerHTML = '';
    document.getElementById('calc').innerHTML = '';
};

// Functionality to take keypresses as an input method

document.addEventListener('keydown', (e) => {
    if (document.getElementById(`number${e.key}`)) {
        document.getElementById(`number${e.key}`).click();
    }
});

// functionality for 0 to be displayed if no value currently exists
