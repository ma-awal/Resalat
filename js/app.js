import * as increase from './inrease.js'


// active link creation

const myBar=document.querySelector(".toggle-btn")
const myToggel=document.querySelector(".toggle-id")

const allLink=document.querySelectorAll('.toggel-id, li, a')
 allLink.forEach((link)=>{
   link.addEventListener('click',()=>{
      allLink.forEach((btn)=>{
         btn.classList.remove('active-link')
      })
      link.classList.add('active-link')
   })
  
 })

 myBar.addEventListener("click",()=>{
  myToggel.classList.toggle('show')
 })


 


//  swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween:20,
   autoplay:true,
   loop:true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


    breakpoints: {
      0: { 
        slidesPerView: 2,
         
      },
      
     
      640: {
         slidesPerView: 3,
         spaceBetween: 20
       },
    
     
    }
     

 });

 