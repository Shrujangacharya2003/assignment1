import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, A11y } from "swiper/modules";
import Futuresection from "./Futuresection";
import Footer from "../components/Footer";
import HomeLast from "./homeLast";

function Home() {
  return (
    <>
      <section className="hero-complete-sec">
        <div className="hero-section">
          <div className="hero">
            <h4>Take Control of Your </h4>
            <h1>Financial Future</h1>
            <p>
              Investvidhi helps you take the best financial decisions to achieve
              your goals
            </p>
            <br />
            <button className="getstd-btn">Get Started </button>
          </div>
        </div>
        <div className="future-goals-mob">
          <img
            id="future-goals-mob-img"
            src="src/assets/mobframe.png"
            alt=""
          />
        </div>
        <div className="goal-box">
          <div className="goal-icon">
            <img src="src/assets/goals.png" alt="" />
          </div>
          <div className="goal-text">
            <h2>My Future Goals</h2>
            <p>Sorted by Investvidhi</p>
          </div>
        </div>
      </section>

      {/* Swiper Carousel Section */}
      <section className="future-sec">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          style={{ height: "100%" }}
        >
          <SwiperSlide>
            <Futuresection />
          </SwiperSlide>
          <SwiperSlide>
            <HomeLast />
          </SwiperSlide>
        </Swiper>
      </section>

      
    </>
  );
}

export default Home;
