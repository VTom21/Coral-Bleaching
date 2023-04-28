




let counts=setInterval(updated);
        let upto=0;
        function updated(){
            var count= document.getElementById("counter");
            count.innerHTML=++upto;
            if(upto===414)
            {
                clearInterval(counts);
            }
        };


        let counts2=setInterval(updated2);
        let upto2=0;
        function updated2(){
            var count2= document.getElementById("counter2");
            count2.innerHTML=++upto2;
            if(upto2===621)
            {
                clearInterval(counts2);
            }
        };

        





window.addEventListener("load", () => {
    const loader = document.querySelector(".middle");
  
    loader.classList.add("middle--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });
  

let Solutions = document.getElementById("button5");


Solutions.addEventListener("click",()=>{

window.addEventListener("load", () => {
    const loader = document.querySelector(".middle");
  
    loader.classList.add("middle--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });

});
























  
  





  







  






