window.addEventListener("load", () => {
    const loader = document.querySelector(".middle");
  
    loader.classList.add("middle--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });

  function redirect () {
    setTimeout(myURL, 5000);
    
 }
 redirect()


 function myURL() {

  document.location.href = 'Gallery.html';

 }