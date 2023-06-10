import React from "react";
import { Container } from "react-bootstrap";
import { categoryProducts } from "../../assets/constants/data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const CarouselCard = () => {
  return (
    <section className="sect__carousel">
      <Container>
        <div className="title__carousel">
          <h1>
            Browser Our Category <br /> <span>Receipt</span>
          </h1>
        </div>
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          navigation={true}
          breakpoints={{
            "@0.00": {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {categoryProducts?.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="card text-center card__carousel"
                style={{ backgroundColor: `${item.bgColor}` }}
              >
                <div class="card__header-carousel mx-auto">
                  <img src={item.imgUrl} alt="" className="animate__bounce" />
                </div>
                <div className="card__body-carousel">
                  <h5>{item.title}</h5>
                  <p>{item.amount}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default CarouselCard;
