const work = () => {
    const successPos = [1, 0.6, 0.36, 0.22, 0.13, 0.08, 0.05, 0.03, 0.02, 0.01];

    const currentLevel = document.getElementById('current-level');
    const parsedLevel = parseInt(currentLevel.innerText);
    const attempts = document.getElementById('attempts');
    const parsedAttempt = parseInt(attempts.innerText);
    const randPos = successPos[parsedLevel];

    const getRandomBinaryResult =(randPos)=> 
    {
        const randNum = Math.floor(Math.random()*100);
        return randNum < (randPos*100);
    };

    if(getRandomBinaryResult(randPos)){
        const levelUp = document.getElementById('current-level');
        levelUp.innerText = `${parsedLevel+1}`;
        
        const bar = document.getElementById('gauge-bar');
        bar.style.width = `${(parsedLevel+1) * 10}%`;
        console.log('Level Up!!');
        console.log('current-level : ' + levelUp.innerText);
    }
    attempts.innerText = `${parsedAttempt + 1}`;
    console.log('attempts : ' + attempts.innerText);
    return;
}

const tryLevelUp = () => {
    const levelUpLoopId = setInterval(work, 50);

    let currentLevel = document.getElementById('current-level');
    let parsedLevel = parseInt(currentLevel.innerText);
    console.log('> current-level : ' + parsedLevel);
    if (parsedLevel === 10){
        clearInterval(levelUpLoopId);
    }
    return;
};

//work()가 아닌 work 전달
//level 10이 되면 work 함수 중단하고 싶다. 어떻게?