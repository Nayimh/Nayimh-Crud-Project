import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import banner1 from '../../../images/banner1.jpg';
import banner2 from '../../../images/banner2.jpg';
import banner3 from '../../../images/banner3.jpg';

const Banner = () => {
    return (
        <div className="banner-Container">
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>You can know or not know how a car runs and still enjoy riding in a car</h1>
      <h4>Generally, cars were not built to sit on dealer lots. It encourages the wrong kind of behavior in the whole system</h4>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h1>The cars we drive say a lot about us</h1>
      <h4>IT WILL COST YOU NOTHING TO DREAM AND EVERYTHING NOT TO . lf-driving cars are the natural extension of active safety and obviously something we should do.</h4>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h1>If you’re in control, you’re not going fast enough.</h1>
      <h4>There’s no way we could take cars off the planet and not have our society fall apart. So they’re a necessary evil, in that sense.Lindsay Wagner

</h4>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;