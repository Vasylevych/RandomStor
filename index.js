function slider(baner, tracks, prev, next, slider, parent, number){
    let position = 0;
    const slidesToShow = number;//the elements we see are active
    SlidesToScroll = 1; //how many elements do we scroll
    const container = document.querySelector(baner);
    const track = document.querySelector(tracks);
    const btnPrevs = document.querySelectorAll(prev);
    const btnNexts = document.querySelectorAll(next);
    const items = document.querySelectorAll( slider);
    const itemsCount = items.length;//number of elements
    const itemWidth = container.clientWidth / slidesToShow; //the width of our element
    const movePosition = SlidesToScroll * itemWidth; //the size of the width by how much to scroll

    // const circle = document.querySelector('.slider-dots');

//     // circle.addEventListener('click', function(e){
//     // let point = e.target.dataset.position;
//     // point = Number(point);
    
    //calculate the width of the element

    let parentContainer = document.querySelector(parent);
    parentContainer.addEventListener('click', function(e){
        

        items.forEach((item) =>{
            item.getElementsByClassName.minWidth = `${itemWidth}px`;
        });

        const direction = e.target.dataset.direction;
       if( direction === 'left'){
           console.log(direction)
            const itemsLeft = Math.abs(position) / itemWidth;
            position += itemsLeft >= SlidesToScroll ? movePosition : itemsLeft * itemWidth;
            setPosition();
            checkBtns();
       
       } else if (direction === 'right'){
            const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
            position -= itemsLeft >= SlidesToScroll ? movePosition : itemsLeft * itemWidth;

            setPosition();
            checkBtns();
       };
       
    });

    const setPosition = () => {
        track.style.transform = `translateX(${position}px)`;
    };
    //when scrolling to the extreme element, make the button inactive
    const checkBtns = () => {
       
        btnPrevs.forEach(function(btnPrev){
            btnPrev.disabled = position === 0;
        });
        btnNexts.forEach(function(btnNext){
            btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;

        });
        
    };
    
    console.log(btnPrevs)
    
    checkBtns();
}

    slider('.baner-slideshow-container', '.slider-track', '.btn-prev', '.btn-next', '.slider-items', '.baner-slideshow', 3);
    slider('.sale-slider', '.sale-slider-track', '.prev', '.next', '.sale-slider-items', '.sale-slider', 1);

