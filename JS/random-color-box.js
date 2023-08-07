const colorBox = document.getElementById('color-box');
const setRandomBgColor = () => {
    //range = [0,256]
    const red = Math.ceil(Math.random()*256);
    const green = Math.ceil(Math.random()*256);
    const blue = Math.ceil(Math.random()*256);
    colorBox.style.backgroundColor = `rgb(${red},${green},${blue})`;
    console.log('R : ' + red);
    console.log('G : ' + green);
    console.log('B : ' + blue);
    //나아가기 : barycentric-coordinate를 이용해서 만들어보자!
} 