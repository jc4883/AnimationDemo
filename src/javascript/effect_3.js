export const effect3 = () => {
    debugger
    // const hamburger = document.querySelector(".main-nav > img");
    // const section = document.getElementById("effect-3");
    // debugger
    // hamburger.addEventListener("click", () => {
    //     hamburger.classList.add("move-hamburger");
    //     section.classList.add("light-up-section");
    //     debugger
    // });
    debugger
    const nav = document.querySelector(".menu-active");
    debugger
    const hamburger = document.querySelector(".menu-active div")
    debugger
    const main = document.getElementById("main");
    debugger
    let open = false;
    let hover = false;

    hamburger.addEventListener("click", function() {
        debugger
        open = !open;
        nav.classList.toggle("menu-active");
        main.classList.toggle("menu-active");
        nav.classList.remove("menu-hover");
        main.classList.remove("menu-hover");
        console.log("here");
    });
}

