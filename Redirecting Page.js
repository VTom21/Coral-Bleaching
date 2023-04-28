window.addEventListener("load", () => {
    const loader = document.querySelector(".middle");
  
    loader.classList.add("middle--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });

  function redirect () {
    setTimeout(myURL, 10000);
    
 }
 redirect()


 function myURL() {

  document.location.href = 'Coral BleachingTwo.html';

 }


var typed = new Typed(".auto-type",{
    strings : ["Safe","Secure"],
    typeSpeed: 150,
    backSpeed:150,
    loop: true



});
 
  
  

