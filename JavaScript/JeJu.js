// JeJU 1
let currentSlideFDay = 1;
// 2
let currentSlideSDay = 1;
// 3
let currentSlideTDay = 1;

function button_click(date, arrow){
    let currentSlide;
    
    if(date=="FDay"){
        if(arrow =="prev"){
            currentSlideFDay -= 1;
            if(currentSlideFDay < 0){
                currentSlideFDay = 0;
            }
        }
        else {
            currentSlideFDay += 1;
        }
        currentSlide = currentSlideFDay;
    }

    else if(date=="SDay"){
        if(arrow =="prev"){
            currentSlideSDay -= 1;
            if(currentSlideSDay < 0){
                currentSlideSDay=0;
            }
        }
        else {
            currentSlideSDay+=1;
        }
        currentSlide = currentSlideSDay;
    }

    else if(date=="TDay"){
        if(arrow =="prev"){
            currentSlideTDay -=1;
            if(currentSlideTDay < 0){
                currentSlideTDay=0;
            }
        }
        else {
            currentSlideTDay += 1;
        }
        currentSlide = currentSlideTDay;
    }

    showSlide(date,currentSlide);
    
    function showSlide(date){
        let slide = document.getElementsByClassName("slide"+date)
        let imageCount;

        if(date=="FDay"){
            imageCount = 9;
        }
        else if(date =="SDay"){
            imageCount = 5;
        }
        else if(date =="TDay"){
            imageCount = 3;
    }
    
    let pageNumber= currentSlide % imageCount +1 
    let img = document.getElementById("image"+date);
    img.src= "../image/JeJu/"+date+"/"+pageNumber+".JPG"
    }
}
