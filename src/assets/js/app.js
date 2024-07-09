$(document).ready(function () {
  // Год
  $("#year").text(new Date().getFullYear());

  // SVG
  const replaceSvg = () => {
    $(".svg").each(function () {
      let $img = $(this);
      let imgClass = $img.attr("class");
      let imgURL = $img.attr("src");
      $.get(imgURL, function (data) {
        let $svg = $(data).find("svg");
        if (typeof imgClass !== "undefined") {
          $svg = $svg.attr("class", imgClass + " replaced-svg");
        }
        $svg = $svg.removeAttr("xmlns:a");
        if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
          $svg.attr(
            "viewBox",
            "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
          );
        }
        $img.replaceWith($svg);
      });
    });
  };
  replaceSvg();

  ///accordion

  jQuery(document).ready(function ($) {
    $("#accordion").accordionjs({
      // Allow self close.(data-close-able)
      closeAble: true,

      // Close other sections.(data-close-other)
      closeOther: true,

      // Animation Speed.(data-slide-speed)
      slideSpeed: 150,

      // The section open on first init. A number from 1 to X or false.(data-active-index)
      activeIndex: false,

    });
  });

  jQuery(document).ready(function ($) {
    $("#questions").accordionjs({
      // Allow self close.(data-close-able)
      closeAble: true,

      // Close other sections.(data-close-other)
      closeOther: true,

      // Animation Speed.(data-slide-speed)
      slideSpeed: 150,

      // The section open on first init. A number from 1 to X or false.(data-active-index)
      activeIndex: false,

    });
  });


  // Слайдер баннер


  new Swiper(".swiper-staff", {


    // navigation: {
    //   nextEl: ".swiper-staff__swiper-button-next",
    //   prevEl: ".swiper-staff__swiper-button-prev",
    // },
    pagination: {
      el: '.swiper-staff__swiper-pagination',
      clickable: true
    },

    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1406: {
        slidesPerView: 3,
      },
      1920: {
        slidesPerView: 3,
      },
    },
  });


  new Swiper(".swiper-case", {
    pagination: {
      el: '.swiper-case__swiper-pagination',
      clickable: true
    },
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1015: {
        slidesPerView: 2,
      },
   
    },
  });




  let widthWindow = window.innerWidth
  let experienceSwiper = document.querySelector('.swiper-trigger')
  let experienceGrid = document.querySelector('.experience__list')
  console.log(widthWindow);
  if (widthWindow < 1439.9) {
    experienceSwiper.classList.add('swiper-experience')
    experienceSwiper.classList.add('swiper')
    experienceGrid.classList.remove('experience__list')

  }


  new Swiper(".swiper-experience", {
    pagination: {
      el: '.swiper-experience__swiper-pagination',
      clickable: true
    },

    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      891: {
        slidesPerView: 4,
      }
    },
  });


  new Swiper(".swiper-articles", {


    // navigation: {
    //   nextEl: ".swiper-staff__swiper-button-next",
    //   prevEl: ".swiper-staff__swiper-button-prev",
    // },
    pagination: {
      el: '.swiper-articles__swiper-pagination',
      clickable: true
    },

    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1920: {
        slidesPerView: 3,
      },
    },
  });


  // reviews
  new Swiper(".swiper-reviews", {


    // navigation: {
    //   nextEl: ".swiper-staff__swiper-button-next",
    //   prevEl: ".swiper-staff__swiper-button-prev",
    // },
    pagination: {
      el: '.swiper-reviews__swiper-pagination',
      clickable: true
    },

    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      891: {
        slidesPerView: 3,
      },
      1920: {
        slidesPerView: 3,
      },
    },
  });


  new Swiper(".swiper-certificates", {


    // navigation: {
    //   nextEl: ".swiper-staff__swiper-button-next",
    //   prevEl: ".swiper-staff__swiper-button-prev",
    // },
    pagination: {
      el: '.swiper-certificates__swiper-pagination',
      clickable: true
    },

    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      891: {
        slidesPerView: 3,
      },
      1920: {
        slidesPerView: 3,
      },
    },
  });


  new Swiper(".swiper-partners", {


    // navigation: {
    //   nextEl: ".swiper-staff__swiper-button-next",
    //   prevEl: ".swiper-staff__swiper-button-prev",
    // },
    pagination: {
      el: '.swiper-partners__swiper-pagination',
      clickable: true
    },

    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      },
      891: {
        slidesPerView: 4,
      },
      1920: {
        slidesPerView: 4,
      },
    },
  });


  //tabs

  let tab = document.querySelectorAll('.tab-btn')
  let tabContent = document.querySelectorAll('.tab-content')

  if (tab) {
    tab.forEach(elem => {
      elem.addEventListener('click', () => {

        let parantElem = elem.parentElement.querySelectorAll('.tab-btn')
        parantElem.forEach(pElement => {
          pElement.classList.remove('active')
        });
        let btnId = elem.getAttribute('id')
        elem.classList.add('active')
        tabContent.forEach(i => {
          let contentId = i.getAttribute('data-id')
          i.classList.add('d-n')
          if (btnId == contentId) {
            i.classList.remove('d-n')
          }
        });

      })
    });
  }



  var acc = document.getElementsByClassName("accordion-mob");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }


  // Бургер
  let burger = document.querySelector('#hamburger-menu-mob');
  let menu = document.querySelector('#catalog-drop-mob');
  let menuLinks = menu.querySelectorAll('.catalog-link');
  let closeMenu = menu.querySelector('#close-mob')

  burger.addEventListener('click', function () {
    menu.classList.toggle('active');
    document.body.classList.toggle('stop-scroll');
  });

  closeMenu.addEventListener('click', function () {
    menu.classList.toggle('active');
    document.body.classList.toggle('stop-scroll');
  });

  menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {
      menu.classList.remove('active');
      document.body.classList.remove('stop-scroll')
    })
  });




  // /// кнопка подробнее

  // if (document.querySelector('.player__btn-more')) {

  //   let btnMore = document.querySelector('.player__btn-more')
  //   let tbh = document.querySelector('.player__hidden')

  //   btnMore.addEventListener('click', () => {
  //     btnMore.classList.add('d-n')
  //     tbh.classList.remove('d-n')
  //   })


  // }


  // // const validation = new JustValidate('#pay-form', {
  // //   validateBeforeSubmitting: true,
  // //   focusInvalidField: true,
  // //   lockForm: true,
  // // });

  // // validation
  // //   .addField('#mail_input', [
  // //     {
  // //       rule: 'required',
  // //       errorMessage: 'Введите адрес электронной почты',
  // //     },
  // //     {
  // //       rule: 'email',
  // //       errorMessage: 'Неправильно введен адрес электронной почты',
  // //     },
  // //   ])



  // // модалки


  // // 1
  // let modalClose = document.getElementById('modalsClose')

  // let btnOrderPrayer = document.getElementById('btnOrderPrayer')
  // let orderPrayer = document.getElementById('orderPrayer')
  // let modalBbackdrop = document.querySelector('.modal-backdrop')
  // let bodyModal = document.querySelector('body')


  // btnOrderPrayer.addEventListener('click', () => {
  //   modalBbackdrop.classList.add('show')
  //   orderPrayer.classList.add('show')
  //   bodyModal.classList.add('modal')

  // })

  // modalClose.addEventListener('click', () => {
  //   modalBbackdrop.classList.remove('show')
  //   orderPrayer.classList.remove('show')
  //   bodyModal.classList.remove('modal')
  // })

  // // 2

  // let modalsCardLink = document.querySelectorAll('.card-modal')

  // let modalCard = document.getElementById('modalCard')
  // let modalCardClose = document.querySelector('.modals-kid__close')

  // modalsCardLink.forEach(element => {
  //   element.addEventListener('click', () => {
  //     modalBbackdrop.classList.add('show')
  //     modalCard.classList.add('show')
  //   });
  // })

  // modalCardClose.addEventListener('click', () => {
  //   modalBbackdrop.classList.remove('show')
  //   modalCard.classList.remove('show')
  // })




});





