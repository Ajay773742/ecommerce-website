const bar=document.getElementById('bar');
const close=document.getElementById('close');

const navb=document.getElementById('nav');

if(bar){
    bar.addEventListener('click' ,()=>{
        navb.classList.add('active');
    } )
}


if(close){
    close.addEventListener('click' ,()=>{
        navb.classList.remove('active');
    } )
}
