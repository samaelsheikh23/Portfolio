// Toggle Mobile Menu
const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.onclick = () => {
    navbar.classList.toggle('active');
};

// Scroll Active State for Navigation Links & Navbar Scroll Effect
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                let targetLink = document.querySelector('.navbar a[href*=' + id + ']');
                if (targetLink) {
                    targetLink.classList.add('active');
                }
            });
        }
    });

    // Close menu on scroll for mobile view
    navbar.classList.remove('active');
};

// Auto Scroll Certificates Gallery every 2 seconds
const slider = document.getElementById('certificatesSlider');

if (slider) {
    let scrollInterval;

    const startAutoScroll = () => {
        scrollInterval = setInterval(() => {
            if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
                slider.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                slider.scrollBy({ left: 300, behavior: 'smooth' });
            }
        }, 2000);
    };

    const stopAutoScroll = () => {
        clearInterval(scrollInterval);
    };

    startAutoScroll();

    slider.addEventListener('mouseenter', stopAutoScroll);
    slider.addEventListener('mouseleave', startAutoScroll);
}

// Certificates Image Lightbox Modal Logic
const modal = document.getElementById('certModal');
const modalImg = document.getElementById('modalImg');
const closeModal = document.querySelector('.close-modal');
const certImages = document.querySelectorAll('.cert-image-box img');

certImages.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = img.src;
    });
});

const closeLightbox = () => {
    modal.style.display = 'none';
};

if (closeModal) {
    closeModal.addEventListener('click', closeLightbox);
}

// إغلاق المودال عند الضغط في أي مكان خارج الصورة
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeLightbox();
        }
    });
}

// إغلاق المودال بزر الـ Escape من لوحة المفاتيح
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
        closeLightbox();
    }
});