// 태안 안면도
let currentSlideTaeAn = 1;
// 제천 1일차
let currentSlideJe1 = 1;
//제천 2일차
let currentSlideJe2 = 1;

function button_click(city_CC, arrow_CC){
    let currentSlide_CC;
    if(city_CC=="TaeAn") {
        if(arrow_CC == "prev") {
            currentSlideTaeAn -= 1;
            if(currentSlideTaeAn < 0) {
                    currentSlideTaeAn = 0;
            }
        } 
        else {
            currentSlideTaeAn += 1;
        }
        currentSlide_CC = currentSlideTaeAn;
    } 
    
    else if(city_CC=="Je1"){
        if(arrow_CC =='prev'){
            currentSlideJe1-=1;
            if(currentSlide_CC < 0){
                currentSlideJe1 =0;
                
            }
        }
        else{
            currentSlideJe1 += 1;
        }
        currentSlide_CC = currentSlideJe1;

    } 

    else if(city_CC=="Je2"){
        if(arrow_CC=='prev'){
            currentSlideJe2-=1;
            if(currentSlide_CC<0){
                currentSlideJe2=0;
            }
        }
        else{
            currentSlideJe2 += 1;
        }
        currentSlide_CC = currentSlideJe2;
    }
    
    showSlide(city_CC,currentSlide_CC);   


    function showSlide(city_CC){
        let slide_CC = document.getElementsByClassName("slide_CC"+city_CC)
        let imageCount_CC;

        if(city_CC=="TaeAn") {
        imageCount_CC = 4;
        } 
        else if(city_CC=="Je1"){
            imageCount_CC = 14;
        } 
        else if(city_CC=="Je2"){
            imageCount_CC = 6;
        }

        let pageNumber_CC = currentSlide_CC % imageCount_CC +1
        let img = document.getElementById("image"+city_CC);
        img.src ="../image/ChungCheong/"+city_CC+"/"+pageNumber_CC+".JPG"
        } 
}


