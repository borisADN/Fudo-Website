const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = document.querySelector("i");

menuBtn.addEventListener("click", e => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");

  if (isOpen) {
    menuBtnIcon.classList.add("ri-close-line");
    menuBtnIcon.classList.remove("ri-menu-line");
  } else {
    menuBtnIcon.classList.add("ri-menu-line");
    menuBtnIcon.classList.remove("ri-close-line");
  }

  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.classList.remove("ri-close-line");
    menuBtnIcon.classList.add("ri-menu-line");
  });
});

// https://scrollrevealjs.org/guide/hello-world.html

const scrollRevealOption ={
    distance : "50px",
    origin : "bottom",
    duration : 1000,
    reset : true
}

ScrollReveal().reveal(".header__image img",{
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".header__tag",{
    ...scrollRevealOption,
    delay:500
});
ScrollReveal().reveal(".header__content h1",{
    ...scrollRevealOption,
    delay:1000
});
ScrollReveal().reveal(".header__content .section__description",{
    ...scrollRevealOption,
    delay:1500
});
ScrollReveal().reveal(".header__btns",{
    ...scrollRevealOption,
    delay:2000
});
ScrollReveal().reveal(".service__card",{
    ...scrollRevealOption,
   interval:500
});
// https://swiperjs.com/get-started
const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    autoplay: {
      delay: 2500, // Délai entre les changements de slide en millisecondes
      disableOnInteraction: false, // Ne pas désactiver l'autoplay lorsque l'utilisateur interagit avec le slider
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      loop: true,
      

    },
  });

  ScrollReveal().reveal(".client__image img",{
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".client__content .section__subheader",{
    ...scrollRevealOption,
    delay:500
});
ScrollReveal().reveal("..client__content .section__header",{
    ...scrollRevealOption,
    delay:1000
});
ScrollReveal().reveal(".client__content .section__description",{
    ...scrollRevealOption,
    delay:1500
});
ScrollReveal().reveal(".client__details",{
    ...scrollRevealOption,
    delay:2000
});
ScrollReveal().reveal(".client__rating",{
    ...scrollRevealOption,
    delay:2500
});

ScrollReveal().reveal(".download__image img",{
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".download__content .section__subheader",{
  ...scrollRevealOption,
  delay:500
});
ScrollReveal().reveal(".download__content .section__header",{
  ...scrollRevealOption,
  delay:1000
});
ScrollReveal().reveal(".download__content .section__description",{
  ...scrollRevealOption,
  delay:1500
});
ScrollReveal().reveal(".download__btn",{
  ...scrollRevealOption,
  delay:2000
});