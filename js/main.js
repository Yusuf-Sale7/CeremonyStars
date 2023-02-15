$(document).ready(function() {
'use strict';


  // Navbar menu toggler button
  $('.navBar .navbar-toggler').click(function () {
    $(this).toggleClass('opened');
  });

  // Accordion
  $('.accordion .header, .accordion .subHeader').click(function() {
    $(this).toggleClass('opened');
    $(this).siblings('.content').slideToggle(300, function () {
      $(this).toggleClass('show');
    });
  });

  // Sliders
  var swiper = new Swiper('.gallery-slider', {
    effect: 'coverflow',
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    observer: true,
    observeParents: true,
    slidesPerView: '3',
    coverflowEffect: {
      rotate: 40,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1,
      },
      375: {
        slidesPerView: 1,
      }
    }
  });

  var swiper = new Swiper('.news-slider', {
    effect: 'coverflow',
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    observer: true,
    observeParents: true,
    slidesPerView: '3',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  ////// Tabs group
  $('.tabsGroup .controller li').click(function() {
    var ref = $(this).attr('tab-target');
    $(this).addClass('active').siblings().removeClass('active');
    $('.tabsGroup .contents div[id='+ ref +']').addClass('show').siblings().removeClass('show');
  });

  // Datepicker
  $('.datepicker').datepicker();

  // عملاؤنا
  $(function () {
    $('.countTo').countTo();
  });

  // FAQ
  $('.wrapper .faq .question h5').click(function() {
    $(this).children('.icon').toggleClass('fa-plus fa-minus');
  });

  // Dropdown multiselect
  $('.multiselect').multiselect({
    numberDisplayed: 6,
    maxHeight: 300,
    enableFiltering: true,
    allSelectedText  : 'تم اختيار الكل',
    filterPlaceholder: 'بحث',
		nSelectedText    : 'تم الاختيار',
		nonSelectedText  : 'لا يوجد اختيار',
		selectAllText    : 'تحديد الكل'
  });

  // // Color picker
  // const pickr = Pickr.create({
  //   el: '.color-picker',
  //   theme: 'monolith', // or 'monolith', or 'nano'
  //   dir: 'ltr',
  //   default: '#bea232',
  //   strings: {
  //    save: 'حفظ',
  //    clear: 'مسح',
  //    cancel: 'إلغاء'
  //  },
  //
  //   swatches: [
  //       'rgba(244, 67, 54, 1)',
  //       'rgba(233, 30, 99, 0.95)',
  //       'rgba(156, 39, 176, 0.9)',
  //       'rgba(103, 58, 183, 0.85)',
  //       'rgba(63, 81, 181, 0.8)',
  //       'rgba(33, 150, 243, 0.75)',
  //       'rgba(3, 169, 244, 0.7)',
  //       'rgba(0, 188, 212, 0.7)',
  //       'rgba(0, 150, 136, 0.75)',
  //       'rgba(76, 175, 80, 0.8)',
  //       'rgba(139, 195, 74, 0.85)',
  //       'rgba(205, 220, 57, 0.9)',
  //       'rgba(255, 235, 59, 0.95)',
  //       'rgba(255, 193, 7, 1)'
  //   ],
  //
  //   components: {
  //
  //       // Main components
  //       preview: true,
  //       opacity: true,
  //       hue: true,
  //
  //       // Input / output Options
  //       interaction: {
  //           hex: true,
  //           rgba: true,
  //           input: true,
  //           clear: true,
  //           save: true,
  //           cancel: true,
  //       }
  //   }
  // });

});
