var animation = document.querySelector(".box-animation")
var contain = document.querySelector("body");
var box= document.querySelector(".box");

box.addEventListener("mouseover", ()=>
{
    
    contain.style.backgroundColor = '#c183dc';
    contain.style.transitionDuration = "500ms";
    box.style.boxShadow= "0.3rem 0.3rem 0.5rem #9A68B0";
    
})
box.addEventListener("mouseleave", ()=>
{
    contain.style.backgroundColor = ' #f582a0';
    contain.style.transitionDuration = "500ms";
    box.style.boxShadow=  "0.7rem 0.7rem 0.5rem #cc8899";
    box.classList.add("box-animation-reverse");
   
})

