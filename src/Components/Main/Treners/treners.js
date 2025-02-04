import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import suleyman from './img/suleyman.jpg'
import kanatbek from './img/kanatbek.jpg'
import arap from './img/arap.jpg'
import akjol from './img/akjol.jpg'
import aidar from './img/aidar.jpg'
import abdumanap from './img/abdumanap.jpg'

function Treners() {

  return (
    <div className='treners'>
      <div className="container">


        <div className="treners__card">
          <div className="treners__card-wrapper">

            <Swiper
              breakpoints={{
                1124: {
                  slidesPerView: 3,
                  spaceBetween: 25
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 25
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 15
                },
                576: {
                  slidesPerView: 1,
                  spaceBetween: 10
                },
                480: {
                  slidesPerView: 1,
                },
                320: {
                  slidesPerView: 1,
                },
                270: {
                  slidesPerView: 1,
                },
                250: {
                  slidesPerView: 1,
                }

              }}
              slidesPerView={3}
              spaceBetween={40}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >

              <SwiperSlide>
                <div className="treners__card-image">

                  <div className="treners__card-image-content">

                    <span className="treners__card-image-overlay"></span>
                    <div className="treners__card-image-photo">
                      <img src={arap} alt="img" className='treners__img' />
                    </div>

                  </div>

                  <div className="treners__image-content">
                    <h2 className="treners__image-content-name">Надиров Арап</h2>
                    <p className="treners__image-content-descripter">Тренер по ММА и Гпепплингу</p>
                  </div>

                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="treners__card-image">

                  <div className="treners__card-image-content">

                    <span className="treners__card-image-overlay"></span>
                    <div className="treners__card-image-photo">
                      <img src={suleyman} alt="img" className='treners__img' />
                    </div>

                  </div>

                  <div className="treners__image-content">
                    <h2 className="treners__image-content-name">Минбаев Сулейман</h2>
                    <p className="treners__image-content-descripter">Тренер по Греко-римской борьбе</p>
                  </div>

                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="treners__card-image">

                  <div className="treners__card-image-content">

                    <span className="treners__card-image-overlay"></span>
                    <div className="treners__card-image-photo">
                      <img src={kanatbek} alt="img" className='treners__img' />
                    </div>

                  </div>

                  <div className="treners__image-content">
                    <h2 className="treners__image-content-name">Саттаров Канатбек</h2>
                    <p className="treners__image-content-descripter">Тренер по Вольной борьбе</p>
                  </div>

                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="treners__card-image">

                  <div className="treners__card-image-content">

                    <span className="treners__card-image-overlay"></span>
                    <div className="treners__card-image-photo">
                      <img src={abdumanap} alt="img" className='treners__img' />
                    </div>

                  </div>

                  <div className="treners__image-content">
                    <h2 className="treners__image-content-name">Абдуманап Уулу Илим</h2>
                    <p className="treners__image-content-descripter">Тренер по Вольной борьбе</p>
                  </div>

                </div>
              </SwiperSlide>


              <SwiperSlide>
                <div className="treners__card-image">

                  <div className="treners__card-image-content">

                    <span className="treners__card-image-overlay"></span>
                    <div className="treners__card-image-photo">
                      <img src={akjol} alt="img" className='treners__img' />
                    </div>

                  </div>

                  <div className="treners__image-content">
                    <h2 className="treners__image-content-name">Онарбоев Акжол</h2>
                    <p className="treners__image-content-descripter">Тренер по Самбо</p>
                  </div>

                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="treners__card-image">

                  <div className="treners__card-image-content">

                    <span className="treners__card-image-overlay"></span>
                    <div className="treners__card-image-photo">
                      <img src={aidar} alt="img" className='treners__img' />
                    </div>

                  </div>

                  <div className="treners__image-content">
                    <h2 className="treners__image-content-name">Айдар Уулу Эржигит</h2>
                    <p className="treners__image-content-descripter">Тренер по тхэквондо</p>
                  </div>

                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Treners
