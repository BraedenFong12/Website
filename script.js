document.addEventListener('DOMContentLoaded', function () {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach((carousel) => {
        const carouselItems = carousel.querySelectorAll('.carousel-images img, .carousel-images video');
        const prevButton = carousel.querySelector('.carousel-prev');
        const nextButton = carousel.querySelector('.carousel-next');
        let currentIndex = 0;

        function showItem(index) {
            console.log('Showing item index:', index); // Debug log
            carouselItems.forEach((item, i) => {
                item.classList.remove('active');
                if (i === index) {
                    item.classList.add('active');
                }
            });
        }

        function navigateToIndex(index) {
            console.log('Navigating to index:', index); // Debug log
            if (index < 0) {
                currentIndex = carouselItems.length - 1;
            } else if (index >= carouselItems.length) {
                currentIndex = 0;
            } else {
                currentIndex = index;
            }
            showItem(currentIndex);
        }

        prevButton.addEventListener('click', function () {
            navigateToIndex(currentIndex - 1);
        });

        nextButton.addEventListener('click', function () {
            navigateToIndex(currentIndex + 1);
        });

        // Initial display
        showItem(currentIndex);
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const typewriterText = document.querySelector('.typewriter');
    const text = typewriterText.textContent;
    typewriterText.textContent = ''; // Clear the text initially
    let index = 0;
    const speed = 50; // Adjust typing speed

    function typeWriter() {
        if (index < text.length) {
            typewriterText.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});

document.querySelectorAll('.hobby').forEach(hobby => {
    hobby.addEventListener('click', () => {
        const bgcolor = hobby.getAttribute('data-bgcolor');
        document.body.style.background = bgcolor;
    });
});
