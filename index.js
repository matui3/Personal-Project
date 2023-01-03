function imgChange() {
    document.image.backgroundImage = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("imgChange()", time)
}


function showSlides(n) {
    let i = 0;
    let slides = document.getElementsByClassName("slide-default");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000);
}


let slideIndex = 1;
showSlides(slideIndex);

// const backimg = document.getElementById("img-change");
// backimg.addEventListener('click', () => imgChange());