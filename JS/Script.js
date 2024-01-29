document.querySelectorAll("nav_link").forEach((link) => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});


function NavClick(element){

    const nav_elements = document.getElementsByClassName("nav_link")
    const arrow_top = document.getElementsByClassName("arrow_top")[0]

    arrow_top.classList.remove("active");

    for(let nav of nav_elements){
        if(nav != element){
            nav.classList.remove("active");
        } else{
            nav.classList.add("active");
        }
    }
}


function ActivateContactArrow(){
    const arrow_elements = document.getElementsByClassName("arrow")
    const arrow_top = document.getElementsByClassName("arrow_top")[0]

    for(let arrow of arrow_elements){
        if(arrow.classList.contains("active")){
            arrow.classList.remove("active");
        } else{
            arrow.classList.add("active");
        }
    }

    if(arrow_top.classList.contains("active")){
        arrow_top.classList.remove("active");
    } else{
        arrow_top.classList.add("active");
    }

}

function DeactivateContactArrow(){
    const arrow_elements = document.getElementsByClassName("arrow")
    for(let arrow of arrow_elements){
        arrow.classList.remove("active");
    }
}
//make gradient text follow mouse