window.addEventListener("load", () => {
    const loader = document.querySelector(".middle");
  
    loader.classList.add("middle--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });
  