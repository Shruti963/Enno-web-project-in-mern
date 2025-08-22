import "./Testimonials.css"

// import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import t1 from "../components/images/testimonials-1.jpg";
import t2 from "../components/images/testimonials-2.jpg";
import t3 from "../components/images/testimonials-3.jpg";
import t4 from "../components/images/testimonials-4.jpg";
import t5 from "../components/images/testimonials-5.jpg";


const testimonials = [
  {
    text: " Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.Accusantium quam, ultricies eget id, aliquam eget nibh et.Maecen aliquam, risus at semper. ",
    img: t1,
    name: "Saul Goodman",
    title: "CEO & Founder"
  },
  {
    text: " Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa. ",
    img: t2,
    name: "Sara Wilsson",
    title: "Designer"
  },
  {
    text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim. ",
    img: t3,
    name: "Jena Karlis",
    title: "Store Owner"
  },
  {
    text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam. ",
    img: t4,
    name: "Matt Brandon",
    title: "Freelancer"
  },
  {
    text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid. ",
    img: t5,
    name: "John Larson",
    title: "Entrepreneur"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials  section light-background">
      <div>
        <div className=" Head-title s">
          <span>Testimonials</span>
          <h1>Testimonials</h1>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            className="mySwiper"
            modules={[Pagination, Autoplay]}
            loop={true}
            speed={600}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 0 },
              1200: { slidesPerView: 3, spaceBetween: 20 },
            }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="testimonial-item">
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>{t.text}</span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>

                  <div className="img-name-title">
                    <img src={t.img} alt={t.name} className="testimonial-img" />
                    <h3>{t.name}</h3>
                    <h4>{t.title}</h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
      <section id="call-to-action" className="call-to-action section accent-background">
      <div className="container">
        <div
          className="row justify-content-center aos-init aos-animate"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="col-xl-10">
            <div className="text-center">
              <h3>Call To Action</h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <a className="cta-btn" href="#">Call To Action</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </section>
  );
};

export default Testimonials;
