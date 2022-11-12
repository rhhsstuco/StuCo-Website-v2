// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:

const swiper = new Swiper('.swiper', {
    scrollbar: {
      el: '.sub__carrousel::-webkit-scrollbar',
      draggable: true,
    },
  });
  