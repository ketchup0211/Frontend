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
}

const tryLevelUp = () => {
    const levelUpLoopId = setInterval(()=>{
        work();
        const currentLevel = document.getElementById('current-level');
    const parsedLevel = parseInt(currentLevel.innerText);
    if(parsedLevel === 10){clearInterval(levelUpLoopId);}
    }
        , 50);

};

//work()가 아닌 work 전달
//level 10이 되면 work 함수 중단하고 싶다. 어떻게?

//answer code
/*
const probs = [ 100, 60, 36, 22, 13, 8, 5, 3, 2, 1 ];
let attempts = 0;
let level = 0;
const getRandomBinaryResult = ratio => {
    const randomNumber = Math.floor(Math.random() * 100);
    return (randomNumber < ratio);
};
const tryLevelUp = () => {
    const loopId = setInterval(() => {
        attempts++;
        const successed = getRandomBinaryResult(probs[level]);
        if (successed) {
            level++;
            document.getElementById('gauge-bar').style.width = level * 10 + '%';
            document.getElementById('current-level').innerText = level;
        }
        document.getElementById('attempts').innerText = attempts;
        if (level >= 10) clearInterval(loopId);
}, 50); };
*/