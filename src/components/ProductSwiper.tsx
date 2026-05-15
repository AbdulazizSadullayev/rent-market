import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';


// import required modules
import { FreeMode, Thumbs } from 'swiper/modules';

const ProductSwiper = ({ gallery }: { gallery: string[] }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper

                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Thumbs]}
                className="mySwiper2"
            >
                {
                    gallery.map((el, i) => (
                        <SwiperSlide key={i}>
                            <img src={el} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                className="mySwiper"
            >
                {
                    gallery.map((el, i) => (
                        <SwiperSlide key={i}>
                            <img src={el} />
                        </SwiperSlide>
                    ))
                }



            </Swiper>
        </>
    );
}

export default ProductSwiper