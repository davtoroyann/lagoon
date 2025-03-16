/* ======================================================================== */
// Check is device Mobile or Pc
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
                isMobile.Android()
                || isMobile.BlackBerry()
                || isMobile.iOS()
                || isMobile.Opera()
                || isMobile.Windows()
                );
    }
};
/* ======================================================================== */
// Add arrow to menu links if device is mobile
if(isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.menu__arrow');
    if(menuArrows.length > 0) {
        menuArrows.forEach((arrow, index) => {
            arrow.addEventListener('click', function(e) {
                arrow.parentElement.classList.toggle('_active');
            })
        })
    }
} else {
    document.body.classList.add('_pc');
}
/* ======================================================================== */
// Burger Menu 
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu__icon');
    const menuBody = document.querySelector('.menu__body');
    if(menuIcon) {
        menuIcon.addEventListener('click', (e)=> {
            document.body.classList.toggle('_lock');
            menuIcon.classList.toggle('_cross');
            menuBody.classList.toggle('_active');
        })
    }
})
/* ======================================================================== */
// Header Scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if(header.classList.contains('header-blue')) {
    header.style.background = `rgb(0, 51, 100)`;
  } else {
    const opacity = Math.min(0.5 + window.scrollY / 300, 1);
    header.style.background = `rgba(0, 51, 100, ${opacity})`;
  }
});
/* ======================================================================== */
// Header height 
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  const main = document.querySelector('main');

  main.style.setProperty('--margin-top', `${header.offsetHeight}px`);

  window.addEventListener('resize', () => {
  main.style.setProperty('--margin-top', `${header.offsetHeight}px`);
});
})
/* ======================================================================== */
// "index.html" Welcome Video Playing by Modal Menu
document.addEventListener('DOMContentLoaded', function() {
  const videoPlayBtn = document.querySelector('.video-button');

  if (!videoPlayBtn) return;

  videoPlayBtn.addEventListener('click', function() {
    Swal.fire({
      html: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/O_gCqBk2oZ8?si=0yfrynb7DFGGvcDQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      showConfirmButton: false,
      width: 1000,
      padding: 0,
      showCloseButton: true,
      showClass: {
        popup: 'animate__animated animate__fadeIn',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOut',
      },
      customClass: {
        htmlContainer: 'container-padding-zero',
      }
    })
  }) 
})
/* ======================================================================== */
// "index.html" About-Short Blocks Height Configuration
document.addEventListener('DOMContentLoaded', function() {
  const aboutImage = document.querySelector('.about-short__image');
  const aboutFirstPart = document.querySelector('.about-short__top');
  const aboutSecondPart = document.querySelector('.about-short__bottom');
  
  if(!aboutImage || !aboutFirstPart || !aboutSecondPart) return;

  function updateAboutHeight() {
    if (window.innerWidth > 990.98) {
      const aboutContentHeight = aboutFirstPart.offsetHeight + aboutSecondPart.offsetHeight;
      aboutImage.style.setProperty('--about-height', `${aboutContentHeight}px`);
    } else {
      aboutImage.style.removeProperty('--about-height');
    }
  }
  
  updateAboutHeight();

  window.addEventListener('resize', updateAboutHeight);
})
/* ======================================================================== */
// Clients Swiper
const swiperClient = new Swiper('.clients__swiper-container', {
  loop: true,
  speed: 300,
  slidesPerView: 2.5,
  spaceBetween: 20,
  freeMode: true,
  grabCursor: true,
  keyboard: true,

  navigation: {
    nextEl: '.clients__swiper-button-next',
    prevEl: '.clients__swiper-button-prev',
  },

  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },

  effect: 'slide',
  
  breakpoints: {
    1023.98: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    }
  },
});
/* ======================================================================== */
// Client Section Videos
document.addEventListener('DOMContentLoaded', function() {
  const videos = document.querySelectorAll('.video-clients video');

  videos.forEach((video) => {
    const videoBtn = video.nextElementSibling;
    const videoFrame = video.parentElement;

    videoBtn.addEventListener('click', function() {
      videoBtn.classList.add('button-video__play');
      setTimeout(() => {
        video.play();
        video.controls = true;
        videoFrame.classList.add('video-clients__play');
      }, 300);
    })

    video.addEventListener('click', function() {
      if(video.parentElement.classList.contains('video-clients__play')) {
        video.parentElement.classList.remove('video-clients__play');
        video.controls = false;
        video.nextElementSibling.classList.remove('button-video__play');
        video.pause();
      }
    })
  })
})
/* ======================================================================== */
// singleIntroduce page swiper
const swiperIntroduce = new Swiper('.swiper-introduce__container', {
  loop: true,
  speed: 300,
  slidesPerView: 2.5,
  spaceBetween: 30,
  freeMode: true,
  grabCursor: true,
  keyboard: true,

  navigation: {
    nextEl: '.swiper-introduce__button-next',
    prevEl: '.swiper-introduce__button-prev',
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  effect: 'slide',
  
  breakpoints: {
    1023.98: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    766.98: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 5
    }
  },
});
/* ======================================================================== */
// Footer Accordeon
document.addEventListener('DOMContentLoaded', function () {
  const accordions = document.querySelectorAll('.nav-footer__title');

  accordions.forEach(accordion => {
      accordion.addEventListener('click', function (e) {
          const clickedAccordion = e.target.closest('.nav-footer__title');
          if (!clickedAccordion) return;

          const content = clickedAccordion.nextElementSibling;
          const isOpen = clickedAccordion.parentElement.classList.contains('_active');

          accordions.forEach(acc => {
              acc.parentElement.classList.remove('_active');
              acc.nextElementSibling.style.maxHeight = '0';
          });

          if (!isOpen) {
              clickedAccordion.parentElement.classList.add('_active');
              content.style.maxHeight = content.scrollHeight + 16 + 'px';
          }
      });
  });
});
/* ======================================================================== */
// Advantages Section Tracking
document.addEventListener('DOMContentLoaded', function() {
  const observerAdvantage = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('advantages__animation');
      }
    });
  }, { threshold: 1 });
  
  const advantagesSection = document.querySelector('.advantages');
  if(advantagesSection) {
    observerAdvantage.observe(advantagesSection);
  }
})
/* ======================================================================== */
// Image Zoom
document.querySelectorAll('.image-zoom').forEach(zoom => {
  zoom.addEventListener('click', function () {
      
      Swal.fire({
          imageUrl: this.src,
          imageHeight: '550px',
          width: 'auto',
          imageAlt: this.alt,
          showConfirmButton: false,
          padding: 0,
          showClass: {
            popup: 'image__zoom-animation animate__animated animate__zoomIn',
          },
          hideClass: {
            popup: 'image__zoom-animation animate__animated animate__zoomOut',
          },
          customClass: {
            popup: 'popup__border-radius',
            image: 'swal2-image__changes',
          },
      });
  });
});
/* ======================================================================== */
// Scroll Bar width
document.addEventListener('DOMContentLoaded', function() {
  function setScrollbarWidth() {
    const scrollbarWidth =   window.innerWidth - document.documentElement.clientWidth;
  
    document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
  }
  setScrollbarWidth();
})
/* ======================================================================== */
// Course Height Configuration
document.addEventListener('DOMContentLoaded', function() {
  const courseImage = document.querySelector('.course__image');
  const courseFirstPart = document.querySelector('.top-course');
  const courseSecondPart = document.querySelector('.bottom-course');
  
  if(!courseImage || !courseFirstPart || !courseSecondPart) return;

  function updateCourseHeight() {
    if (window.innerWidth > 990.98) {
      const courseContentHeight = courseFirstPart.offsetHeight + courseSecondPart.offsetHeight;
      courseImage.style.setProperty('--course-height', `${courseContentHeight}px`);
    } else {
      courseImage.style.removeProperty('--course-height');
    }
  }
  
  updateCourseHeight();

  window.addEventListener('resize', updateCourseHeight);
})
/* ======================================================================== */
// Gallery Page Stories
document.addEventListener("DOMContentLoaded", function () {
  const storiesModalFrame = document.querySelector('.stories-modal');
  const storiesModalClose = document.querySelector('.stories-modal__close-btn');

  if(!storiesModalFrame || !storiesModalClose) return;

  let storiesModal;

  const storiesPreview = new Swiper(".stories-container", {
    slidesPerView: 6.5,
    spaceBetween: 20,
    loop: false,
    freeMode: true,

    navigation: {
      nextEl: '.stories__swiper-button-next',
      prevEl: '.stories__swiper-button-prev',
    },

    breakpoints: {
      990.98: {
        slidesPerView: 6.5,
        spaceBetween: 20,
      },
      766.98: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      479.98: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      0: {
        slidesPerView: 2,
        spaceBetween: 20,
      }
    }
  });

  document.querySelectorAll(".stories-container .swiper-slide").forEach((slide, index) => {
    slide.addEventListener("click", function () {
      document.body.classList.add('_lock');
      storiesModalFrame.classList.add("_active");

      if (storiesModal) {
        storiesModal.destroy(true, true);
      }

      storiesModal = new Swiper(".stories-modal__swiper-container", {
        slidesPerView: 3,
        spaceBetween: 10,
        centeredSlides: true,
        grabCursor: true,
        keyboard: true,
        pagination: {
          el: ".stories-modal__swiper-pagination",
          clickable: true,
        },
        effect: "coverflow",
        coverflowEffect: {
          rotate: 10,
          stretch: 0,
          depth: 300,
          modifier: 1.5,
          slideShadows: true,
        },
        initialSlide: index,

        breakpoints: {
          766.98: {
            slidesPerView: 3,
            spaceBetween: 10,
            centeredSlides: true,
            coverflowEffect: {
              rotate: 10,
              stretch: 0,
              depth: 300,
              modifier: 1.5,
              slideShadows: true,
            },
            },
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: true,
          },
        }
      });
    });
  });

  storiesModalClose.addEventListener("click", function () {
    document.body.classList.remove('_lock');
    storiesModalFrame.classList.remove("_active");

    if (storiesModal) {
      storiesModal.destroy(true, true);
      storiesModal = null;
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      document.body.classList.remove('_lock');
      storiesModalFrame.classList.remove("_active");

      if (storiesModal) {
        storiesModal.destroy(true, true);
        storiesModal = null;
      }
    }
  });
});
/* ======================================================================== */
// Gallery page Gallery
document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = document.querySelectorAll(".list-gallery__item img, .list-gallery__item video");
  const galleryModal = document.querySelector(".gallery-modal");
  const modalContent = document.querySelector(".gallery-modal__wrapper");
  const closeModal = document.querySelector(".gallery-modal__close");

  if(!galleryItems || !galleryModal || !modalContent || !closeModal) return;

  let galleryModalSwiper;

  galleryItems.forEach((media, index) => {
      if (media.tagName === "VIDEO") return;

      media.addEventListener("click", function () {
          document.body.classList.add('_lock');
          modalContent.innerHTML = "";

          galleryItems.forEach((item) => {
              if (item.tagName === "VIDEO") return;

              const gallerySlide = document.createElement("div");
              gallerySlide.classList.add("gallery-modal__swiper-slide");
              gallerySlide.classList.add("swiper-slide");
              if (item.tagName === "IMG") {
                  const imgClone = document.createElement("img");
                  imgClone.src = item.src;
                  gallerySlide.appendChild(imgClone);
              }

              modalContent.appendChild(gallerySlide);
          });

          galleryModal.classList.add('_active');

          if (!galleryModalSwiper) {
              galleryModalSwiper = new Swiper(".gallery-modal__container", {
                  loop: false,
                  slidesPerView: 3,
                  spaceBetween: 10,
                  centeredSlides: true,
                  grabCursor: true,
                  keyboard: true,
                  effect: "coverflow",
                  coverflowEffect: {
                    rotate: 10,
                    stretch: 0,
                    depth: 300,
                    modifier: 1.5,
                    slideShadows: true,
                  },
                  initialSlide: index,
                  navigation: {
                      nextEl: ".gallery-modal__swiper-button-next",
                      prevEl: ".gallery-modal__swiper-button-prev",
                  },
                  pagination: {
                      el: ".gallery-modal__swiper-pagination",
                      clickable: true,
                  },
                  breakpoints: {
                    766.98: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                      centeredSlides: true,
                    },
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                      centeredSlides: true,
                    }
                  }
              });
          }
          galleryModalSwiper.slideTo(index);
      });
  });

  closeModal.addEventListener("click", function () {
      document.body.classList.remove('_lock');
      galleryModal.classList.remove('_active');
      if (galleryModalSwiper) {
        galleryModalSwiper.destroy(true, true);
        galleryModalSwiper = null;
      }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      document.body.classList.remove('_lock');
      galleryModal.classList.remove("_active");

      if (galleryModalSwiper) {
        galleryModalSwiper.destroy(true, true);
        galleryModalSwiper = null;
      }
    }
  });
});
/* ======================================================================== */
// Gallery page "Show More"
document.addEventListener("DOMContentLoaded", function() {
  const galleries = document.querySelectorAll(".list-gallery");

  if (!galleries.length) return;

  galleries.forEach(gallery => {
      const photos = Array.from(gallery.querySelectorAll(".list-gallery__item"));
      const showMoreButton = gallery.parentElement.querySelector(".showmore-btn");

      if (!photos.length || !showMoreButton) return;

      const hideButton = document.createElement("div");
      const hideButtonBtn = document.createElement("button");
      hideButton.append(hideButtonBtn);
      hideButtonBtn.type = "button";
      hideButton.classList.add("gallery__showmore-hide");
      hideButtonBtn.classList.add("showmore-btn__hide", "btn");
      hideButtonBtn.innerHTML = "<span>Скрыть</span>";
      hideButtonBtn.style.display = "none";
      showMoreButton.parentElement.parentElement.appendChild(hideButton);

      let visibleCount = getCurrentBreakpoint();

      function getCurrentBreakpoint() {
        const width = document.documentElement.clientWidth;
    
        if (width <= 767) {
            return 6;
        } else if (width <= 991) {
            return 12;
        } else {
            return 20;
        }
    }

      function showPhotos() {
          photos.forEach((photo, index) => {
              photo.classList.toggle("_visible", index < visibleCount);
          });

          showMoreButton.style.display = visibleCount >= photos.length ? "none" : "block";
          hideButtonBtn.style.display = visibleCount >= photos.length ? "flex" : "none";
      }

      photos.forEach(photo => photo.classList.remove("_visible"));
      showPhotos();

      showMoreButton.addEventListener("click", () => {
          visibleCount += getCurrentBreakpoint();
          showPhotos();
      });

      hideButtonBtn.addEventListener("click", () => {
          visibleCount = getCurrentBreakpoint();
          showPhotos();
      });

      window.addEventListener("resize", () => {
          let newCount = getCurrentBreakpoint();
          if (visibleCount < newCount) {
              visibleCount = newCount;
              showPhotos();
          }
      });
  });
});
/* ======================================================================== */




