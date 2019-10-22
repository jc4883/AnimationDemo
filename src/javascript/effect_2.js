export const effect2 = () => {
    // document.getElementById('effect-2').innerText = "Effect 2!";  
    const elements = document.querySelectorAll(".grid-wrapper-effect2 > section");
    const presentationBox = document.querySelector(".image-div");
    
    for (let i = 0; i < elements.length - 2; i++) {
        elements[i].addEventListener("mouseover", (event) => {
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
                    url = "none";
            }
            // let url = urlFunc();
            // if (url !== "none") {
            //     presentationBox.style.backgroundImage = `url('${url}')`
            // }
            presentationBox.classList.add("present-image");
            if (url !== "none") {
                presentationBox.style.backgroundImage = `url('${url}')`;
            }
        })
        elements[i].addEventListener("mouseleave", (event) => {
            presentationBox.style.backgroundImage = "none";
            presentationBox.classList.remove("present-image");
        })
    }



        

    
}