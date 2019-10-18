export const effect3 = () => {
    const hamburger = document.querySelector(".main-nav > img");
    const section = document.getElementById("effect-3");
    debugger
    hamburger.addEventListener("click", () => {
        hamburger.classList.add("move-hamburger");
        section.classList.add("light-up-section");
        debugger
    });
}