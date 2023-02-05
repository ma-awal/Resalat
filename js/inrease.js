//  increase count
const items=document.querySelectorAll(".number")
const updateCount=(el)=>{
   const value=parseInt(el.dataset.value)
   const incriment=Math.ceil(value/100)
   let initialvalue=0

  const increaseCount= setInterval(() => {
      initialvalue+=incriment
      if(initialvalue>value){
         el.textContent=`${value}+`
         clearInterval(increaseCount)
         return
      }
      el.textContent=`${initialvalue}`
   },1);
}

items.forEach((item)=>{
   updateCount(item)
})