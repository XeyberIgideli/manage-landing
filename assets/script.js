var swiper = new Swiper(".slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    // autoplay: {
    //   delay: 5500,
    //   disableOnInteraction: false,
    // },
    grabCursor: true,

    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        510: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        758: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }
});

const toggleMenu = document.querySelector('.toggle');
const dropdown = document.querySelector('.dropdown');
const dropdownList = document.querySelector('.dropdown-list');
const overlay = document.querySelector('.overlay');

toggleMenu.addEventListener('click', function() {
    overlay.classList.toggle('hidden') 
    dropdown.classList.toggle('hidden')
});