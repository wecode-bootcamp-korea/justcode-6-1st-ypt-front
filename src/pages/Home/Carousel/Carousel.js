import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.scss';

export default function Carousel({ data }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div className="carousel">
      <div className="items_container flex_center">
        <Slider {...settings}>{data}</Slider>
      </div>
    </div>
  );
}
