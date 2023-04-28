const buttons = document.querySelectorAll(".faq-toggle");


buttons.forEach((button) => {
  button.addEventListener("click", () =>
    button.parentElement.classList.toggle("active")
  );
});


let b1 = document.getElementById("b1");
let icon2 = document.getElementById("icon2");
let icon3 = document.getElementById("icon3");
let icon4 = document.getElementById("icon4");
let icon5 = document.getElementById("icon5");

b1.addEventListener("click",()=>{
    alert("KeepCoralsSecure@gmail.com");
}
)

icon2.addEventListener("click",()=>{
    alert("KeepCoralsSecure@gmail.com");
}
)

icon3.addEventListener("click",()=>{
    alert("https://www.facebook.com/profile.php?id=100091798613570");
}
)

icon4.addEventListener("click",()=>{
    alert("https://www.instagram.com/tamasvisegradi/");
}
)

icon5.addEventListener("click",()=>{
    alert("https://www.linkedin.com/in/corals-safe-779821273/");
}
)



