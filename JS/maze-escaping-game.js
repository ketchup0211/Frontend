const currentPos = { row : 5, col : 0,};
const escapePos = {row : 1, col : 7,};

const rowRange = [0,6];
const colRange = [0,8];

document.querySelector('.current').addEventListener('keydown', e =>{
    getNewPositionByKey(e);
});
document.querySelector('.current').addEventListener('keyup', e=>{
    if(e.key === "ArrowRight"||e.key === "ArrowLeft"||e.key === "ArrowUp"||e.key === "ArrowDown")
    {
        keyUpHandler();
    }
});

const getElementByPosition = (pos) =>{
    //row의 경우 cells query 중 몇번째인지를 통해 알 수 있다. 
    const rowPos = document.querySelectorAll('.cells')[pos.row];
    const element = rowPos.children[pos.col];

    return element;
}

const getNewPositionByKey = (e) =>{
    let newPos = currentPos;

    if(e.key === "ArrowRight") {
        newPos.col++;
    //if (currentPos.col > colRange[1]) currentPos.col--;
    }
    else if(e.key === "ArrowLeft") {
        newPos.col--;
        //if (currentPos.col < colRange[0]) currentPos.col++;
    }
    else if(e.key === "ArrowUp") {
        newPos.row++;
        //if (currentPos.row > rowRange[1]) currentPos.row--;
    }
    else if(e.key === "ArrowDown") {
        newPos.row--;
        //if (currentPos.row < rowRange[0]) currentPos.row++;
    }
    console.log(newPos);
    return newPos;
}

const isPositionInRange = (pos) => {
    if(pos.row < rowRange[0] || pos.row > rowRange[1] || pos.col < colRange[0] || pos.col > colRange[1]){
        return false;
    }
    return true;
}

const isPositionWall = (pos) => {
    return isPositionInRange(pos) && (getElementByPosition(pos).contains('wall'));
}

const keyUpHandler = () =>{
    document.querySelector('.current').style.backgroundColor = "";
    let newPos = getNewPositionByKey();
    console.log(newPos);
    if (isPositionInRange(newPos) && !isPositionWall(newPos))
    {
        document.querySelector('.current').remove('current');
        getElementByPosition(newPos).add('current');
        document.querySelector('.current').style.backgroundColor = "lightcoral";
        currentPos = newPos;
    }
    else{
        newPos = currentPos;
    }
    if((newPos.row === escapePos.row) && (newPos.col === escapePos.col)){
        alert('You Escaped!');
    }
}