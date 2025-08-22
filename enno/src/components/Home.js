import Button from 'react-bootstrap/Button';
import { BiPlayCircle } from "react-icons/bi";
import heroImg from './images/hero-img.png';
import "./Home.css"
import CardContainer from './CustomCard';


const Home = () => {
  return (
    <div id='home' className='container text-secondary'>
      <div className="Elegantcreative d-flex row  gy-4">
        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center aos-init aos-animate" data-aos="fade-up">
          <h1>Elegant and creative solutions</h1>
          <p>We are team of talented designers making websites with Bootstrap</p>
          <div className="d-flex startbuttons">
            <Button  href="/home" className="custom-button">
              <span  className="btn-get-started gt text-light">Get Started</span>
            </Button>

            <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="border-none  btn-watch-video d-flex align-items-center"><p className="bi  watch-video "><BiPlayCircle className='playCircle' /><span>Watch Video</span></p></a>

          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img aos-init aos-animate" data-aos="zoom-out" data-aos-delay="100">
          <img src={heroImg} className="img-fluid animated" alt="Hero" />
        </div>
      </div>
      <div className="ThreeCard container d-flex  justify-content-between ">
        <CardContainer className="bg-secondary container"></CardContainer>
      </div>
    </div>
  )
}

export default Home
