export const effect3 = () => {

    const nav = document.querySelector(".nav-bar");
    const hamburger = document.querySelector(".nav-bar div")
    const main = document.getElementById("main");

    const github = document.querySelector(".effect-3-github");
    const linkedin = document.querySelector(".effect-3-linkedin");
    const code = document.querySelector(".effect-3-code");

    let open = false;
    let hover = false;

    hamburger.addEventListener("click", function() {
        open = !open;
        nav.classList.toggle("menu-active");
        main.classList.toggle("menu-active");
        nav.classList.remove("menu-hover");
        main.classList.remove("menu-hover");
        console.log("here");
    });

    hamburger.addEventListener("mouseover", () => {
        if (!open) {
            nav.classList.add("menu-hover");
            main.classList.add("menu-hover");
        } 
    });

    hamburger.addEventListener("mouseout", () => {
        nav.classList.remove("menu-hover");
        main.classList.remove("menu-hover");
        
    })

    github.addEventListener("click", () => {
        window.open("https://github.com/jc4883", '_blank')
        
    })

    linkedin.addEventListener("click", () => {
        window.open("https://www.linkedin.com/in/peterchoi24/", '_blank');
    })

    code.addEventListener("click", () => {
        window.open("https://github.com/jc4883/AnimationDemo", '_blank');
    })

}





    // const hamburger = document.querySelector(".main-nav > img");
    // const section = document.getElementById("effect-3");
    // debugger
    // hamburger.addEventListener("click", () => {
    //     hamburger.classList.add("move-hamburger");
    //     section.classList.add("light-up-section");
    //     debugger
    // });