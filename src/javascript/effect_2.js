export const effect2 = () => {
    // document.getElementById('effect-2').innerText = "Effect 2!";  
    const elements = document.querySelectorAll(".grid-wrapper > section");
    const presentationBox = document.querySelector(".image-div");
    
    for (let i = 0; i < elements.length - 2; i++) {
        debugger
        elements[i].addEventListener("mouseover", (event) => {
            let url;
            switch (i) {
                case 0:
                    url = "/src/assets/astro_salute.jpg";
                    break;
                case 1:
                    url = "/src/assets/california.jpg";
                    break;
                case 2:
                    url = "/src/assets/cat.jpg";
                    break;
                case 3:
                    url = "/src/assets/cool_shirt.jpg";
                    break;
                case 4:
                    url = "/src/assets/pray.jpg";
                    break;
                case 5:
                    url = "/src/assets/ernst_and_young.jpg";
                    break;
                case 6:
                    url = "/src/assets/korean_jigu.jpg";
                    break;
                case 7:
                    url = "/src/assets/lonely_boi.jpg";
                    break;
                case 8:
                    url = "/src/assets/mom_plant_baby.jpg"; 
                    break;
                case 9:
                    url = "/src/assets/wind_turbine.jpg";
                    break;
                case 10:
                    url = "/src/assets/nyc_night.jpg";
                    break;
                case 11:
                    url = "/src/assets/owl.jpg";
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
            presentationBox.classList.remove("present-image");
        })
    }



        

    
}