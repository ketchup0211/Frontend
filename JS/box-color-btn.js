//버튼을 클릭하면 다섯 개 상자 중 두 번째 상자의 색을 변경하는 함수를 box-color-btn.js 의 changeBoxColor 함수에 작성하여라.
const changeBoxColor = ()=>
{
    const secondBox = document.getElementsByClassName('box')[1];
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    secondBox.style.backgroundColor = `rgb(${red},${green},${blue})`;
}