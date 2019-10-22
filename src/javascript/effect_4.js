export const effect4 = () => {
    const form = document.getElementById("formwrap");
    // form.addEventListener("submit", () => {
    //     window.location.href = "https://github.com/jc4883/AnimationDemo/blob/master/index.html";       
    // })
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("hidden-a").click();
  });
}