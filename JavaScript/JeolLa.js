// 순천
let currentSlideSunCheon = 1;
// 여수
let currentSlideYeoSu = 1;
// 목포
let currentSlideMokPo = 1;

function button_click(city, arrow) {
    let currentSlide;
    
    if(city=="SunCheon") {
        if(arrow == "prev") {
            currentSlideSunCheon -= 1;
            if(currentSlideSunCheon < 0) {
                    currentSlideSunCheon = 0;
            }
        } 
        else {
            currentSlideSunCheon += 1;
        }
        currentSlide = currentSlideSunCheon;
    } 
    
    else if(city=="YeoSu"){
        if(arrow =='prev'){
            currentSlideYeoSu-=1;
            if(currentSlide < 0){
                currentSlideYeoSu =0;
                
            }
        }
        else{
            currentSlideYeoSu += 1;
        }
        currentSlide = currentSlideYeoSu;

    } 

    else if(city=="MokPo"){
        if(arrow=='prev'){
            currentSlideMokPo-=1;
            if(currentSlide<0){
                currentSlideMokPo=0;
            }
        }
        else{
            currentSlideMokPo+=1;
        }
        currentSlide = currentSlideMokPo;
    }
    
    showSlide(city,currentSlide);   


    function showSlide(city){
        let slide = document.getElementsByClassName("slide"+city)
        let imageCount;

        if(city=="SunCheon") {
        imageCount = 12;
        } 
        else if(city=="YeoSu"){
            imageCount = 6;
        } 
        else if(city=="MokPo"){
            imageCount = 19;
        }

        let pageNumber = currentSlide % imageCount +1
        let img = document.getElementById("image"+city);
        img.src = "../image/JeolLa/"+city+"/"+pageNumber+".JPG"
        }
}
