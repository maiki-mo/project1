let modal = document.getElementById('simpleModal');
let drwPap = document.getElementById('box1');
let cmpPap = document.getElementById('box2');
let brnPap = document.getElementById('box3');
let closeBtn = document.getElementsByClassName('closeBtn')[0];

drwPap.addEventListener('click', openModal);
cmpPap.addEventListener('click', openModal);
brnPap.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);


function openModal(){
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
}

function clickOutside(event){
    if(event.target == modal){
      modal.style.display = 'none';
    }
}
