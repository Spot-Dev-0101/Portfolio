function setAllImageTopMargins(){
    const images = document.getElementsByClassName("galley_image")
    for(let i = 0; i < images.length; i++){
        var image = images[i]

        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var docViewMiddle = (docViewTop + docViewBottom)/2

        var imageTop = $(image).offset().top;
        var imageBottom = imageTop + $(image).height();

        var imageMiddle = (imageTop + imageBottom)/2

        var middleDiff = docViewMiddle - imageMiddle

        image.style.marginTop = middleDiff/10 + "px"

        image.classList.remove("fullscreen")
        
    }
}

window.onscroll = function(){
    setAllImageTopMargins()
}

function loadFullImage(elem){
    childImgElem = elem.children[1]

    const images = document.getElementsByClassName("galley_image")
    for(let i = 0; i < images.length; i++){
        var image = images[i]
        if(image != childImgElem){
            image.classList.remove("fullscreen")
        }
    }

    if(childImgElem.classList.contains("fullscreen")){
        childImgElem.classList.remove("fullscreen")
        childImgElem.style.marginTop = 0 + "px"
    } else{
        childImgElem.classList.add("fullscreen")
        var docViewTop = $(window).scrollTop();
        childImgElem.style.marginTop = docViewTop + "px"
    }
    

}

function loadFullImage1(elem){

    fullImageElement = document.getElementById("full_image");
    fullImageImage = fullImageElement.children[0]

    targetImageSRC = elem.children[0].src

    targetHeight = $(elem.parentElement).height();
    targetWidth = $(elem.parentElement).width();

    targetTop = $(elem.parentElement).offset().top;
    targetLeft = $(elem.parentElement).offset().left;

    fullImageElement.style.height = targetHeight + "px";
    fullImageImage.src = targetImageSRC
    fullImageElement.style.top = targetTop + "px";
    fullImageElement.style.left = targetLeft + "px";



    console.log(targetTop + " " + targetLeft);

}

function setInnerGlowHeights(){

    const glows = document.getElementsByClassName("gallery_image_inner_glow")
    for(let i = 0; i < glows.length; i++){
        var glow = glows[i]
        let height = glow.parentElement.parentElement.style.height
        glow.style.height = height;
    }

}