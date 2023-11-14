// JeJU 1
let currentSlideGyeongJu = 1;
// 2
let currentSlideBuSan = 1;

function button_click(city_GS, arrow_GS){
    let currentSlide_GS;
    
    if(city_GS=="GyeongJu"){
        if(arrow_GS =="prev"){
            currentSlideGyeongJu -= 1;
            if(currentSlideGyeongJu < 0){
                currentSlideGyeongJu = 0;
            }
        }
        else {
            currentSlideGyeongJu += 1;
        }
        currentSlide_GS = currentSlideGyeongJu;
    }

    else if(city_GS=="BuSan"){
        if(arrow_GS =="prev"){
            currentSlideBuSan -= 1;
            if(currentSlideBuSan < 0){
                currentSlideBuSan=0;
            }
        }
        else {
            currentSlideBuSan+=1;
        }
        currentSlide_GS = currentSlideBuSan;
    }

    showSlide(city_GS,currentSlide_GS);
    
    function showSlide(city_GS){
        let slide_GS = document.getElementsByClassName("slide_"+city_GS)
        let imageCount_GS;

        if(city_GS=="GyeongJu"){
            imageCount_GS = 7;
        }
        else if(city_GS =="BuSan"){
            imageCount_GS = 4;
        }    
    
    
    let pageNumber_GS= currentSlide_GS % imageCount_GS +1 
    let img_GS = document.getElementById("image_"+city_GS);
    img_GS.src= "../image/GyeongSang/"+city_GS+"/"+pageNumber_GS+".JPG"
    }
}

