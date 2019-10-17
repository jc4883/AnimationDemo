export const effect2 = () => {
    // document.getElementById('effect-2').innerText = "Effect 2!";  
     let elements = document.querySelectorAll(".grid-wrapper > div");
     for (let i = 0; i < elements.length; i++) {
         elements[i].addEventListener("click", (event) => {
             debugger
             let element = event.target;
             element.style.position = "absolute";
             element.style.top = 0;
         })
     }
    
}