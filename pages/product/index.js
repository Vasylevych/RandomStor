let filterrOpen = document.querySelector(".filter-open");
let filter = document.querySelector(".filter");
    filter.addEventListener('click', function(e){
        const direction = e.target.dataset.filter;
            if(direction === "filter"){
                filterrOpen.classList.toggle("open");
                console.log(direction)
            }   
});

let sortOpen = document.querySelector(".sort-open");
let sort = document.querySelector(".sort");
    sort.addEventListener('click', function(e){
        const direction = e.target.dataset.sort;
            if(direction === "sort"){
                sortOpen.classList.toggle("openSort");
                console.log(direction)
            }  
});


// let filterrOpen = document.querySelectorAll(".filter-open");
// let filter = document.querySelectorAll(".filter");
// for(let i = 0; i < filter.length; i++){
//     filter[i].addEventListener('click', function(){
//         filterrOpen.classList.toggle(".open");
//         console.log(filter[i])
//     })

// };


