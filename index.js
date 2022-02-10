// Slider-----------------------
let position = 0;
const slidesToShow = 3;//елементи які ми бачимо - активні
SlidesToScroll = 1; //на скільки елементів робимо скрол
const container = document.querySelector('.baner-slideshow-container');
const track = document.querySelector('.slider-track');
const btnPrev = document.querySelector('.btn-prev');//кнопка
const btnNext = document.querySelector('.btn-next');//кнопка
const items = document.querySelectorAll('.slider-items');//елементи
const itemsCount = items.length;//кількість елементів
const itemWidth = container.clientWidth / slidesToShow; //ширина нашого елемента
const movePosition = SlidesToScroll * itemWidth; //розмір ширини на скільки потрібно проскролити
const circle = document.querySelector('.slider-dots');



circle.addEventListener('click', function(e){
   let point = e.target.dataset.position;
   point = Number(point);

})


//вираховуємо ширину елементу
items.forEach((item) =>{
    item.getElementsByClassName.minWidth = `${itemWidth}px`;
});
//кнопка в перед
btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemsLeft >= SlidesToScroll ? movePosition : itemsLeft * itemWidth;
    console.log(position);
    setPosition();
    checkBtns();
});
// кнопка назад
btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;
    position += itemsLeft >= SlidesToScroll ? movePosition : itemsLeft * itemWidth;
    console.log(position);
    setPosition();
    checkBtns();
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
};
//при скролі до крайнього елемента, робимо не активну кнопку
const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();
