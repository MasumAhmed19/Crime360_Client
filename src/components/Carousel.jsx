// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'

import bgimg1 from '../assets/images/bgimg1.jpeg'
import bgimg2 from '../assets/images/bgimg2.jpeg'
import bgimg3 from '../assets/images/bgimg3.jpeg'

const Carousel = () => {
    return (
    <div className='container py-10 mx-auto z-[100]'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Slide
            image={bgimg1}
            text='Your Go-To Platform for Product Recommendations!'
            btnText="Post a Query"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            text='Ask. Discover. Recommend.'
            btnText="Post a Query"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            text='Discover Smarter Alternatives for Every Product You Love!'
            btnText="Post a Query"
          />
        </SwiperSlide>
      </Swiper>
    </div>
    );
};

export default Carousel;