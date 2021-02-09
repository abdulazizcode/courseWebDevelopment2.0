const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const btn = document.querySelector('button');


function checkValidation(){
    inputs.forEach(el=>{
        console.log(el.textContent== "");
    })
}

btn.addEventListener('click',checkValidation);