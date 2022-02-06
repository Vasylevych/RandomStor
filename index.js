// Slider-----------------------
let position = 0;
const slidesToShow = 3;//the elements we see are active
SlidesToScroll = 1; //how many elements do we scroll
const container = document.querySelector('.baner-slideshow-container');
const track = document.querySelector('.slider-track');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const items = document.querySelectorAll('.slider-items');
const itemsCount = items.length;//number of elements
const itemWidth = container.clientWidth / slidesToShow; //the width of our element
const movePosition = SlidesToScroll * itemWidth; //the size of the width by how much to scroll
const circle = document.querySelector('.slider-dots');

circle.addEventListener('click', function(e){
   let point = e.target.dataset.position;
   point = Number(point);

})

//calculate the width of the element
items.forEach((item) =>{
    item.getElementsByClassName.minWidth = `${itemWidth}px`;
});
//button in front
btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemsLeft >= SlidesToScroll ? movePosition : itemsLeft * itemWidth;
    console.log(position);
    setPosition();
    checkBtns();
});
// button in back
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
//when scrolling to the extreme element, make the button inactive
const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();
