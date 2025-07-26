// whats on slider
const flkty = new Flickity('#carousel', {
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
    draggable: false,
    autoPlay: false
});

// Auto Scroll Setup
let speed = 1;
let isPaused = false;

function autoScroll() {
    if (!isPaused) {
        flkty.x -= speed;
        flkty.settle(flkty.x);
    }
    requestAnimationFrame(autoScroll);
}

autoScroll();

// Pause on Hover
const carouselEl = document.getElementById('carousel');
carouselEl.addEventListener('mouseenter', () => isPaused = true);
carouselEl.addEventListener('mouseleave', () => isPaused = false);

// Navigation Buttons
document.getElementById('prevBtn').addEventListener('click', () => {
    flkty.previous();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    flkty.next();
});












const flkty1 = new Flickity('#carousel-one', {
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
    draggable: false,
    autoPlay: false
});

// Auto Scroll Setup
let speed1 = 1;
let isPaused1 = false;

function autoScrollone() {
    if (!isPaused1) {
        flkty1.x -= speed1;
        flkty1.settle(flkty1.x);
    }
    requestAnimationFrame(autoScrollone);
}

autoScrollone();

// Pause on Hover
const carouselEl1 = document.getElementById('carousel-one');
carouselEl1.addEventListener('mouseenter', () => isPaused1 = true);
carouselEl1.addEventListener('mouseleave', () => isPaused1 = false);

// Navigation Buttons
document.getElementById('prevBtnone').addEventListener('click', () => {
    flkty1.previous();
});

document.getElementById('nextBtnone').addEventListener('click', () => {
    flkty1.next();
});












const boxes = document.querySelectorAll('.activities-box');

boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        // Remove 'active' class from all boxes
        boxes.forEach(b => b.classList.remove('active'));

        // Add 'active' to the hovered one
        box.classList.add('active');
    });
});