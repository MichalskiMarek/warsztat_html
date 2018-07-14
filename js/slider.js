let activeSlide = 1;

function changeSlide() {
    let a = document.getElementById("slide2");
    let b = document.getElementById("slide1");

    if (activeSlide===1){
        a.classList.add("active");
        b.classList.remove("active");
        activeSlide=2;
    }
    else if (activeSlide===2){
        b.classList.add("active");
        a.classList.remove("active");
        activeSlide=1;
    }
}