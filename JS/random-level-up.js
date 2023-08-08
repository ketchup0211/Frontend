const tryLevelUp = () => {
    const successPos = [1, 0.6, 0.36, 0.22, 0.13, 0.08, 0.05, 0.03, 0.02, 0.01];

    const currentLevel = document.getElementById('current-level');
    const parsedLevel = parseInt(currentLevel.innerText);
    const attempts = document.getElementById('attempts');
    const parsedAttempt = parseInt(attempts.innerText);
    const randPos = successPos[parsedLevel];

    console.log('current-level : ' + parsedLevel);
    console.log('attempts : ' + parsedAttempt);
    console.log('success Pos : ' + randPos);

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
};