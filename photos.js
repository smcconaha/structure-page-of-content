let pic1 = 'images/favorite-1.jpg';
let pic2 = 'images/favorite-2.jpg';
let pic3 = 'images/favorite-3.jpg';
let pic4 = 'images/favorite-4.jpg';
let img = document.getElementById('pic');
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let button4 = document.getElementById('button4');
button1.addEventListener('click', () => {
    img.src = pic1;
});
button2.addEventListener('click', () => {
    img.src = pic2;
});
button3.addEventListener('click', () => {
    img.src = pic3;
});
button4.addEventListener('click', () => {
    img.src = pic4;
});