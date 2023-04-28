

let Home = document.getElementById("sidebutton1");
let nextbutton = document.getElementById("nextbutton");


Home.addEventListener("click",()=>{


    location.reload();
});


AOS.init({
    duration: 3000,
    once: true,
  });
  
