let arrows = document.getElementsByClassName('arows');
for(let i = 0; i < arrows.length; i++){ 
    arrows[i].addEventListener('click', function(e){
      const container = document.getElementById(e.target.dataset.arows);
      console.log(container);
      container.classList.toggle('open');  
    })
};


document.addEventListener('click', documentAction);
function documentAction(e){
    const targetElem = e.target;
    if (targetElem.classList.contains('arow')) {
        targetElem.closest('.arows').classList.toggle('rotte')
        
    }
}
