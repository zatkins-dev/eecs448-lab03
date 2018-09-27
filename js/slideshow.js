var currentImg = 1;
var nImages = 5;

function setImgString() {
    document.getElementById("img").src   = `img/pic${currentImg}.jpeg`;
}

function nextSlide() {
    if (currentImg === nImages) {
        currentImg = 1;
    }
    else currentImg++;
    setImgString();
}

function prevSlide() {
    if (currentImg === 1) {
        currentImg = nImages;
    }
    else currentImg--;
    setImgString();
}

