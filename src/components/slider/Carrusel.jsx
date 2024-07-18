
import Slider from 'react-slick';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
          <img src="./img/Carrusel1.png" alt="slide-1" />
        </div>
        <div>
          <img src="./img/Carrusel2.png" alt="slide-2" />
        </div>
        <div>
          <img src="./img/Carrusel3.png" alt="slide-3" />
        </div>
        <div>
          <img src="./img/Carrusel4.png" alt="slide-4" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;