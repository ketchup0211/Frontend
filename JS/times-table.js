/*const displayTimes = () =>{
    const number = document.getElementById('number').value;
    const result = document.getElementById('times-result');

    if(number >= 1 && number <= 9){
        for(let i = 1; i<10; i++)
        {
            const res = document.createElement('div');
            res.innerText = `${number} x ${i} = ${number * i}`
            result.appendChild(res);
        }
    }
    else alert('Input Error!');
}*/

/*
problem#1 : .value와 getAttribute('value')의 차이
problem#2 :  number 값의 할당 위치(시기)
*/

//answer code
const setErrorText = element => element.innerText = 'Input Error!';
const displayTimes = () => {
    const number = document.getElementById('number').value;
    const parsedNumber = parseInt(number);
    const timesResult = document.getElementById('times-result');
    if (!isFinite(parsedNumber) || isNaN(parsedNumber)) return setErrorText(timesResult);
    if (parsedNumber != number) return setErrorText(timesResult);
    if (parsedNumber < 1 || parsedNumber > 9) return setErrorText(timesResult);
    const result = [];
    for (let i = 1; i <= 9; i++) {
        result.push(parsedNumber + ' X ' + i + ' = ' + parsedNumber * i);
    }
    timesResult.innerText = result.join('\n');
};