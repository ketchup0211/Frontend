const getDivisors = (num) => {
    const divisors = [];
       for(let i=1; i <= Math.sqrt(num); i++)
       {
            if(num%i === 0)
            {
                if(! divisors.includes(i))
                {
                    divisors.push(i, num/i);
                }
            }
       }
    divisors.sort((first, second) => first-second);
    return divisors;
};
// 제곱수로 인한 중복 제거가 어려운 코드!

/*
const getDivisors = num => {
    const divisors = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (i * i === num) divisors.push(i);
        else if (num % i === 0) divisors.push(i, num / i);
    }
    return divisors.sort((first, second) => first - second);
};
*/