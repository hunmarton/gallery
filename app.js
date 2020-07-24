const images = document.querySelectorAll('#img');
const bigImage = document.querySelector('.big-image');
const bigImg = document.querySelector('.big-img');
const close = document.querySelector('.close');
const left = document.querySelector('.fa-arrow-left');
const right = document.querySelector('.fa-arrow-right');



function openGallery(image) {
    data = image.dataset.url;
    bigImage.style.display = 'flex';
    bigImage.classList.add('visible');
    bigImg.style.backgroundImage = data;
}
function rightArrow(image) {
    let currentImg = image.dataset.num;
    right.addEventListener('click', () => {
        if (currentImg < images.length - 1) {
            currentImg++;
            bigImg.style.backgroundImage = images[currentImg].dataset.url;
        } else {
            currentImg = 0;
            bigImg.style.backgroundImage = images[currentImg].dataset.url;
        }
        return currentImg;
    });
}
function leftArrow(image) {
    let currentImg = image.dataset.num;
    left.addEventListener('click', () => {
        if (currentImg > 0 && currentImg < images.length) {
            currentImg--;
            bigImg.style.backgroundImage = images[currentImg].dataset.url;
        } else {
            currentImg = images.length - 1;
            bigImg.style.backgroundImage = images[currentImg].dataset.url;
        }
        return currentImg;
    });
}
function outClick() {
    window.addEventListener('click', e => {
        if (e.target.classList.contains('visible')) {
            bigImage.classList.remove('visible');
        }
    });
}


//Event Listeners
images.forEach(image => {
    image.addEventListener('click', () => {

        openGallery(image);
        rightArrow(image);
        leftArrow(image);
        outClick();
    });
});

close.addEventListener('click', e => {
    e.preventDefault();
    bigImage.classList.remove('visible');
});




