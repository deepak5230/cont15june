
document.addEventListener('DOMContentLoaded', () => {
const counter_div= document.getElementById('counter');
const error_div=document.getElementById('error');
const incrementbtn=document.getElementById('increment');
const decrementbtn=document.getElementById('decrement');
const clearbtn=document.getElementById('clear');
let count=0;

incrementbtn.addEventListener('click',()=>{
    count++
    counter_div.innerHTML = count;
    error_div.style.display = 'none';
    if (count > 0) {
        clearbtn.style.display = 'block';
    }

});

decrementbtn.addEventListener('click',()=>{
    
        if (count > 0) {
            count--;
            counter_div.innerHTML = count;
            error_div.style.display = 'none';
            if (count === 0) {
                clearbtn.style.display = 'none';
            }
        } else {
            error_div.style.display = 'block';
        }
    });

    clearbtn.addEventListener('click', () => {
        count = 0;
        counter_div.innerHTML = count;
        clearbtn.style.display = 'none';
        error_div.style.display = 'none';
    });

})









