const isValidNumber = function(num) {
    if(num >= 1 && num <= 9 && num !== true)
    {
        return (num - Math.floor(num) === 0);
    }
    else return false;
}