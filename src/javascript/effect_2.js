export const effect2 = () => {
    // document.getElementById('effect-2').innerText = "Effect 2!";  
    const elements = document.querySelectorAll(".invisible-1, .invisible-2, .invisible-3, .invisible-4, .invisible-5, .invisible-6, .invisible-7, .invisible-8, .invisible-9, .invisible-10, .invisible-11, .invisible-12");
    const images = document.querySelectorAll(".grid-wrapper-effect2 > section > div");
    const presentationBox = document.querySelector(".image-div");
    const beds = document.querySelectorAll(".bed");
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "black";
            console.log("here")
            let url;
            switch (i) {
                case 0:
                    url = "https://github.com/jc4883/AnimationDemo/blob/master/src/assets/astro_salute.jpg?raw=true";
                    break;
                case 1:
                    url = "https://github.com/jc4883/AnimationDemo/blob/master/src/assets/california.jpg?raw=true";
                    break;
                case 2:
                    url = "https://github.com/jc4883/AnimationDemo/blob/master/src/assets/cat.jpg?raw=true";
                    break;
                case 3:
                    url = "https://github.com/jc4883/AnimationDemo/blob/master/src/assets/cool_shirt.jpg?raw=true";
                    break;
                case 4:
                    url = "https://github.com/jc4883/AnimationDemo/blob/master/src/assets/pray.jpg?raw=true";
                    break;
                case 5:
                    url = "https://github.com/jc4883/AnimationDemo/blob/master/src/assets/ernst_and_young.jpg?raw=true";
                    break;
                case 6:
                    url = "https://github.com/jc4883/AnimationDemo/blob/master/src/assets/korean_jigu.jpg?raw=true";
                    break;
                case 7:
                    url = "https://github.com/jc4883/AnimationDemo/blob/master/src/assets/lonely_boi.jpg?raw=true";
                    break;
                case 8:
                    url = "https://github.com/jc4883/AnimationDemo/blob/master/src/assets/mom_plant_baby.jpg?raw=true"; 
                    break;
                case 9:
                    url = "https://github.com/jc4883/AnimationDemo/blob/master/src/assets/wind_turbine.jpg?raw=true";
                    break;
                case 10:
                    url = "https://github.com/jc4883/AnimationDemo/blob/master/src/assets/nyc_night.jpg?raw=true";
                    break;
                case 11:
                    url = "https://github.com/jc4883/AnimationDemo/blob/master/src/assets/owl.jpg?raw=true";
                    break;
                default:
                    url = "";
            }

            images[i].classList.add("enlarge-image");
            beds[i].classList.add("z-index-up");
            window.setTimeout(() => {
                beds[i].classList.remove("z-index-up");
            }, (1500));
            presentationBox.classList.add("present-image");
            if (!presentationBox.style.backgroundImage) {
                presentationBox.style.backgroundImage = `url('${url}')`;
            } else {
                presentationBox.style.backgroundImage = "";
            }
        })

        elements[i].addEventListener("mouseleave", (event) => {
            beds[i].classList.remove("z-index-up");
            presentationBox.style.backgroundImage = "";
            presentationBox.classList.remove("present-image");
            images[i].classList.remove("enlarge-image");
        })
    }
    
}