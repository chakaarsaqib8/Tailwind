

function button(button){
    let container = button.closest('.homelink, .uilinks, .cards')
    if(!container) return;
let ulDiv = container.querySelector('.ul');
if(!ulDiv) return;
let divider = document.getElementById('divider');
let sidedrawer = document.getElementById("sidedrawer");
let main = document.getElementById("main");
if(ulDiv.style.display==="block"){
    ulDiv.style.display = "none";
    divider.style.height = "150%";
    sidedrawer.style.bottom ="135%";
    main.style.bottom = "137%"
}else{
    ulDiv.style.display = "block"
    
}

}
  
let container = document.querySelector(".bar");
let h4 = document.getElementById("h4");
let p = document.getElementById("p");
let textbox = document.querySelector(".textbox");
let chart = document.querySelector('.charts');


container.addEventListener('mouseover',(e)=>{
const target = e.target;
if(target.hasAttribute("data-month")){
    const month=target.getAttribute('data-month');
    const value=target.getAttribute('data-value');
      textbox.querySelector('#h4').textContent = month;
        textbox.querySelector('#p').textContent = value;
    textbox.classList.add('active');

}
});
container.addEventListener('mousemove',(e)=>{
   let rect = chart.getBoundingClientRect();
   let x= e.clientX + 10;
   let y= e.clientY + 10;
   if(x + textbox.offsetWidth > rect.right){
    x = rect.right - textbox.offsetWidth -10;
   }
   if(y + textbox.offsetHeight > rect.bottom){
    y = rect.bottom - textbox.offsetHeight -10;
   }

   if(x < rect.left){
    x = rect.left + 10
   }
    if(y < rect.top){
    y = rect.top + 10
   }

   textbox.style.left = x + 'px'
   textbox.style.top = y + 'px'
    }
)

container.addEventListener('mouseout',(e)=>{
    if(e.target.hasAttribute('data-month')){
      textbox.classList.remove('active')
    }
})

