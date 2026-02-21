const hamMenu=document.querySelector(".ham_menu");
const menu=document.querySelector(".menu");
const closeButton=document.querySelector(".close-button")

hamMenu.addEventListener("click",()=>{

  console.log("clicked")
  menu.classList.toggle("open");
  
})

closeButton.addEventListener("click",()=>{

menu.classList.remove("open");
})