document.addEventListener("DOMContentLoaded", function() {
    const image = document.getElementById('dyk');
    const images = ['Images/fact1.jpg', 'Images/fact2.jpg', 'Images/fact3.jpg', 'Images/fact.png'];
    let currentIndex = 0;

    function changeImage() {
        image.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
        image.classList.add('active');
        setTimeout(() => {
            image.classList.remove('active');
        }, 3000); // Show image for 3 seconds
    }

    setInterval(changeImage, 4000); // Change image every 4 seconds (including the 1s transition)
});

