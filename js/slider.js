const sliderImgEl = document.querySelector('#sliderImg');
const btnPrevEl = document.querySelector('#btnPrev');
const btnNextEl = document.querySelector('#btnNext');

const arrPicturesSrc = ['img1', 'img2', 'img3', 'img4', 'img5'];
let currentImg = 0;

sliderImgEl.setAttribute('src', `img/slider/${arrPicturesSrc[currentImg]}.jpg`); 

function nextImg() {
    if (currentImg + 1 >= arrPicturesSrc.length) {
        currentImg = 0;
    } else {
        currentImg ++;
    }

    sliderImgEl.setAttribute('src', `img/slider/${arrPicturesSrc[currentImg]}.jpg`);
} 

function prevImg() {
    if (currentImg <= 0) {
        currentImg = 4;
    } else {
        currentImg --;
    }

    sliderImgEl.setAttribute('src', `img/slider/${arrPicturesSrc[currentImg]}.jpg`);
} 

let interval = setInterval(nextImg, 3000);

btnNextEl.addEventListener('click', () => {
    clearInterval(interval);

    setTimeout(() => {
        nextImg();
        if (!clearInterval(interval)) {
            interval = setInterval(nextImg, 3000);
        }   
    }, 5000);   
});

btnPrevEl.addEventListener('click', () => {
    clearInterval(interval);

    setTimeout(() => {
        prevImg();
        if (!clearInterval(interval)) {
            interval = setInterval(nextImg, 3000);
        } 
    }, 5000);
});