// NamiSum
let currentSlideNamiSum = 1;
// DongHae
let currentSlideDongHae = 1;

function button_click(city_GW, arrow_GW){
    let currentSlide_GW;
    
    if(city_GW=="NamiSum"){
        if(arrow_GW =="prev"){
            currentSlideNamiSum -= 1;
            if(currentSlideNamiSum < 0){
                currentSlideNamiSum = 0;
            }
        }
        else {
            currentSlideNamiSum += 1;
        }
        currentSlide_GW = currentSlideNamiSum;
    }

    else if(city_GW=="DongHae"){
        if(arrow_GW =="prev"){
            currentSlideDongHae -= 1;
            if(currentSlideDongHae < 0){
                currentSlideDongHae=0;
            }
        }
        else {
            currentSlideDongHae+=1;
        }
        currentSlide_GW = currentSlideDongHae;
    }

    showSlide(city_GW,currentSlide_GW);
    
    function showSlide(city_GW){
        let slide_GW = document.getElementsByClassName("slide_"+city_GW)
        let imageCount_GW;

        if(city_GW=="NamiSum"){
            imageCount_GW = 2;
        }
        else if(city_GW =="DongHae"){
            imageCount_GW = 5;
        }
            
    let pageNumber_GW = currentSlide_GW % imageCount_GW +1 
    let img_GW = document.getElementById("image_"+city_GW);
    img_GW.src= "../image/GangWon/"+city_GW+"/"+pageNumber_GW+".JPG"
    }
}