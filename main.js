let modal = document.getElementById('simpleModal');
let modal2 = document.getElementById('simpleModal2');
let modal3 = document.getElementById('simpleModal3');
let drwPap = document.getElementById('box1');
let cmpPap = document.getElementById('box2');
let brnPap = document.getElementById('box3');
let body = document.getElementById("body");
let closeBtn = document.getElementsByClassName('closeBtn')[0];
let closeBtn2 = document.getElementsByClassName('closeBtn2')[0];
let closeBtn3 = document.getElementsByClassName('closeBtn3')[0];

// modal listeners
drwPap.addEventListener('click', openModal);
cmpPap.addEventListener('click', openModal2);
brnPap.addEventListener('click', openModal3);
closeBtn.addEventListener('click', closeModal);
closeBtn2.addEventListener('click', closeModal2);
closeBtn3.addEventListener('click', closeModal3);
window.addEventListener('click', clickOutside);

// modal one functions
function openModal(){
    modal.style.display = 'block';
    body.style.display = 'none';
}

function closeModal(){
    modal.style.display = 'none';
    body.style.display = 'block';
}

// modal two functions
function openModal2(){
    modal2.style.display = 'block';
    body.style.display = 'none';
}

function closeModal2(){
    modal2.style.display = 'none';
    body.style.display = 'block';
}

// modal three functions
function openModal3(){
    modal3.style.display = 'block';
    body.style.display = 'none';
}

function closeModal3(){
    modal3.style.display = 'none';
    body.style.display = 'block';
}

// close all
function clickOutside(event){
    if(event.target == modal){
      modal.style.display = 'none';
      body.style.display = 'block';
    } if(event.target == modal2) {
        modal2.style.display = 'none';
        body.style.display = 'block';
    } if(event.target == modal3) {
        modal3.style.display = 'none';
        body.style.display = 'block';
    }
}

