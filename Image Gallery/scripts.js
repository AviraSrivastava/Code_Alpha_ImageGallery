const imageGallery = document.querySelector('.image-gallery');
const images = imageGallery.querySelectorAll('.gallery-image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;

function showImage(index) {
    images.forEach(image => image.classList.remove('active'));
    images[index].classList.add('active');
    currentIndex = index;
}

// Initial display
showImage(currentIndex);

// Event listeners for buttons
prevBtn.addEventListener('click', () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(newIndex);
});

nextBtn.addEventListener('click', () => {
    const newIndex = (currentIndex + 1) % images.length;
    showImage(newIndex);
});

// Add image click event listener
images.forEach(image => {
    image.addEventListener('click', () => {
        showImage(Array.from(images).indexOf(image));
    });
});
