const hamburger=document.getElementById('hamburger');
const close=document.getElementById('close');
const nav=document.querySelector('UL');

const blur=document.getElementById("overlay");

hamburger.addEventListener('click', ()=>{
  nav.style.top="0%";
  blur.style.display='block';
});

close.addEventListener('click', ()=>{
    nav.style.top='-100%';
    blur.style.display='none';
});
