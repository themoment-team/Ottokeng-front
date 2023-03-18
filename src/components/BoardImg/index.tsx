/** @jsxImportSource @emotion/react */
import { Swiper, SwiperSlide } from 'swiper/react'; // basic
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css'; //basic
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BoardImg = () => {
  SwiperCore.use([Pagination]);

  return (
    <Swiper
      modules={[Pagination, Navigation]}
      style={{
        width: '32.5rem',
        height: '18.125rem',
        background: '#ddd',
        marginBottom: '2.25rem',
      }}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    ></Swiper>
  );
};

export default BoardImg;
