const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0;

rightBtn.addEventListener('click', () => {
    activeSlide++ 

    if (activeSlide > slides.length - 1) {
        activeSlide = 0
    }

    setBGtoBody()
    setActiveSlide()
})

leftBtn.addEventListener('click', () => {
    activeSlide--

    if (activeSlide < 0) {
        activeSlide = slides.length - 1
    }

    setBGtoBody()
    setActiveSlide()
})

setBGtoBody()

function setBGtoBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

//set slide to next image 
function setActiveSlide() {
    slides.forEach(slide => {
        slide.classList.remove('active')
    });

    slides[activeSlide].classList.add('active')
}