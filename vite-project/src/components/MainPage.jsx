import * as B from '../MainPage.style.jsx'
import Slider from 'react-slick';

function MainPage() {
  const settings1 = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
};
    return (
      <div>
        <B.CustomSlider>
          <Slider {...settings1}>
            <div className="slide-container">
              <div className="slide_text">환영합니다</div>
            </div>
          </Slider>
        </B.CustomSlider>
      </div>
  );
}

export default MainPage;