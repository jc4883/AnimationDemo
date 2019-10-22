export const effect1 = () => {
    //document.getElementById('effect-1').appendChild = "Effect 1!";    
    const menu1 = document.querySelector(" #drpdwn-tab-one, .menu-one li");
    const menu4 = document.querySelector("#drpdwn-tab-four, .menu-four li");
    const scrollEffect = document.getElementById("scroll-effect");
    const effect1 = document.getElementById("effect-1");


    scrollEffect.addEventListener("scroll", (e) => {
        if (e.target.scrollTop > 375) {
            effect1.classList.add("fixed");
        } else {
            effect1.classList.remove("fixed");
        }
    })


    menu1.addEventListener("mouseover", () => {
        debugger
        document.getElementById("effect-1").classList.add("remove-left-border-radius");
    })
    menu1.addEventListener("mouseout", () => {
        document.getElementById("effect-1").classList.remove("remove-left-border-radius");
    })

    menu4.addEventListener("mouseover", () => {
        document.getElementById("effect-1").classList.add("remove-right-border-radius");
    })
    menu4.addEventListener("mouseout", () => {
        document.getElementById("effect-1").classList.remove("remove-right-border-radius");
    })

}