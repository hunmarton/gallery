const images = document.querySelectorAll('#img');
const bigImage = document.querySelector('.big-image');
const bigImg = document.querySelector('.big-img');
const close = document.querySelector('.close');
const left = document.querySelector('.fa-arrow-left');
const right = document.querySelector('.fa-arrow-right');

images.forEach(image => {
    image.addEventListener('click', () => {
        data = image.dataset.url;
        bigImage.style.display = 'flex';
        bigImage.classList.add('visible');
        bigImg.style.backgroundImage = data;
        let currentImg = image.dataset.num;
        right.addEventListener('click', () => {
            if (currentImg < images.length - 1) {
                currentImg++;
                bigImg.style.backgroundImage = images[currentImg].dataset.url;
            } else {
                currentImg = 0;
                bigImg.style.backgroundImage = images[currentImg].dataset.url;
            }
        });
        left.addEventListener('click', () => {
            if (currentImg > 0 && currentImg < images.length) {
                currentImg--;
                bigImg.style.backgroundImage = images[currentImg].dataset.url;
            } else {
                currentImg = images.length - 1;
                bigImg.style.backgroundImage = images[currentImg].dataset.url;
            }
        });
    });
});

close.addEventListener('click', e => {
    e.preventDefault();
    bigImage.classList.remove('visible');
});
