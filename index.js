function imgChange() {
    obj.style.backgroundImage = 'url(resources/FateZero.jpg)';
}

let obj = document.getElementById("backimg");
const backimg = document.getElementById("img-change");
backimg.addEventListener('click', () => imgChange());