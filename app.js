const images = document.querySelectorAll('#img');
const bigImage = document.querySelector('.big-image');
const bigImg = document.querySelector('.big-img');
const close = document.querySelector('.close');

const imagesArr = Array.from(images);
console.log(imagesArr);

images.forEach(image => {
    image.addEventListener('click', () => {
        data = image.dataset.url;
        bigImage.style.display = 'flex';
        bigImage.classList.add('visible');
        bigImg.style.backgroundImage = data;
    });
});

close.addEventListener('click', e => {
    e.preventDefault();
    bigImage.classList.remove('visible');
});