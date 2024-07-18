
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselSec = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div>
      
      <Slider {...settings}>
        <div>
          <img src="./img/CarruselSec1.png" alt="slide-1" />
        </div>
        <div>
          <img src="./img/CarruselSec2.png" alt="slide-2" />
        </div>
        <div>
          <img src="./img/CarruselSec3.png" alt="slide-3" />
        </div>
        
      </Slider>
    </div>
  );
};

export default CarouselSec;