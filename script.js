const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['red', 'peach' , 'yellow', 'teal' , 'blue', 'mustard' ];
body.style.backgroundColor = 'brown';
button.addEventListener('click',changeBackground);
function changeBackground(){
    const colorIndex = parseInt(Math.random()*colors.length);
    body.style.transition = "3s";
    body.style.backgroundColor = colors[colorIndex];
}
const container = document.getElementById('container');
const colors1 =['green','orange','black','aqua','navy','pink'];
container.style.backgroundColor = 'gray';
button.addEventListener('click',changeBackground1);
container.addEventListener('touchmove',changeBackground1);
function changeBackground1(){
    const colorIndex1 = parseInt(Math.random()*colors.length);
    container.style.transition = "2s";
    container.style.backgroundColor = colors1[colorIndex1];
}
