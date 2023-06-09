import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import { Container } from "react-bootstrap";
import { categoryProducts } from "../../assets/conctans/data";

const CarouselCategory = () => {
  return (
    <section className="sect-carousel">
      <Container>
        <div className="title">
          <h1>
            Browser Our Category <br /> <span>Receipt</span>
          </h1>
        </div>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {categoryProducts?.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="card-category"
                style={{ backgroundColor: `${item.bgColor}` }}
              >
                <img src={item.imgUrl} alt="" />
                <div class="text">
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

export default CarouselCategory;
