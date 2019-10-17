export const effect1 = () => {
    //document.getElementById('effect-1').appendChild = "Effect 1!";    
    const menu1 = document.querySelector(" #dropdown-tab-one, .menu-one li");
    const menu4 = document.querySelector("#dropdown-tab-four, .menu-four li");

    menu1.addEventListener("mouseover", () => {
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