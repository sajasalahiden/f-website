let aboutSec = document.querySelector("section.about");
let goUp = document.querySelector("#goUp");
let headerEl = document.querySelector("header");
let levelElAll =    document.querySelectorAll(".about .subject .level")
// console.log(levelElAll);
onscroll= _=>{
  if(scrollY > 0){
    headerEl.classList.add("bg-dark" , "py-4")
    goUp.classList.remove("d-none")
  }else{
    headerEl.classList.remove("bg-dark" , "py-4")
    goUp.classList.add("d-none")

  }
  if (scrollY > aboutSec.getBoundingClientRect().top) {
    levelElAll.forEach(item =>{
      let num = item.getAttribute("data-numb");
      item.innerHTML = +num +"%"
      item.style.cssText = `width: ${num}%; height: 100%; border-radius: 25px;     display: flex;
      justify-content: end;`
    })
  }

}




onload = _=>{
  document.querySelector(".loadingsec").classList.add("d-none")
  
}


goUp.onclick = _=>{
  scrollTo(0 , 0)
}