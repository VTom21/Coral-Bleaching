let button1 = document.getElementById("envelope");
let button2 = document.getElementById("envelope2");


button1.addEventListener("click",()=>{
    alert("tamas.visegradi@gmail.com");


});

button2.addEventListener("click",()=>{
  alert("emineataseven777@gmail.com");


});

window.addEventListener("load", () => {
    const loader = document.querySelector(".middle");
  
    loader.classList.add("middle--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });


  window.addEventListener('scroll', reveal);

  function reveal(){
    var reveals = document.querySelectorAll('#content1');

    for(var i = 0; i < reveals.length; i++){

      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;

      if(revealtop < windowheight - revealpoint){
        reveals[i].classList.add('active');
      }
      else{
        reveals[i].classList.remove('active');
      }
    }
  }
 
  



