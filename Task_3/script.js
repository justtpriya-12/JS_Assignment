const images = [
    "https://i.pinimg.com/736x/6f/c6/2c/6fc62ca893411dbbacd8629245046745.jpg",
    "https://i.pinimg.com/1200x/55/26/c9/5526c977b30c9a9a5cfde91f396f05ec.jpg",
    "https://i.pinimg.com/736x/eb/e9/78/ebe9783592774255f7c31f28d4c34338.jpg",
    "https://i.pinimg.com/736x/75/61/66/756166c347caf24493e67e2da98fc959.jpg",
    "https://i.pinimg.com/1200x/1b/25/b1/1b25b145a79192082c89a8e41484c6f7.jpg"
];

let currentIndex = 0;
const carouselImage = document.getElementById("carouselImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const carouselContainer = document.getElementById("carouselContainer");

function showImage(index) {
    carouselImage.style.opacity = 0;
    setTimeout(() => {
        carouselImage.src = images[index];
        carouselImage.style.opacity = 1;
    }, 200);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

// Automatic slideshow
let slideInterval = setInterval(nextImage, 3000);

// Pause on hover
carouselContainer.addEventListener("mouseenter", () => clearInterval(slideInterval));
carouselContainer.addEventListener("mouseleave", () => slideInterval = setInterval(nextImage, 3000));

// Button events
nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);

// Show initial image
showImage(currentIndex);
