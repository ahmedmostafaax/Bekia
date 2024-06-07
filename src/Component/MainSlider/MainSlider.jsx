import React from 'react';
import Slider from 'react-slick';
import slide1 from '../../assets/images/s1.jpg'
import slide2 from '../../assets/images/s2.jpg'
import slide3 from '../../assets/images/s3.jpg'
import recycle from '../../assets/images/Premium Vector _ Green eco friendly waste recycling technology lifestyle tiny people character.jpg'

export default function MainSlider() {
  const sliderConfig = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots:false
  };

  return (
    <>
    <div className="row m-3">
      <div className="col-md-12">
        <Slider {...sliderConfig}>
          <img
            height={300}
            className="w-100"
            src={slide1}
            alt="Image of a beautiful landscape"
            style={{ maxWidth: '100%' }}
          />
          <img
            height={300}
            className="w-100"
            src={slide2}
            alt="Image of a happy family"
            style={{ maxWidth: '100%' }}
          />
          <img
            height={300}
            className="w-100"
            src={slide3}
            alt="Image of a delicious meal"
            style={{ maxWidth: '100%' }}
          />
        </Slider>
      </div>
      </div>

      <div className="container my-5">
        <div className='row py-5 video'>
          <h2 className='text-center text-main my-2 border-bottom border-secondary'>the important of recyleing</h2>
        <video className='w-100' controls>
        <source src={`${process.env.PUBLIC_URL}/video.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>

        <div className="row">
          <h2 className='htext text-center border-bottom border-secondary pb-3'>About us</h2>
          <div className="texxt my-4 shadow-sm py-3">
            <p className='text-center '>
            We are a team of environmental enthusiasts who aim to reduce waste and minimize the negative environmental impact. We believe that recycling is the key to creating a more sustainable future, and we work hard to make the world a better place by providing effective recycling solutions.
            We use our expertise in recycling to offer high-quality services to our customers, and we work with them to achieve their environmental goals. We utilize the latest technologies and methods to make the recycling process more efficient and effective.
            We are a dedicated team committed to creating positive change in the world through recycling, and we work hard to make the world a better place for us and for future generations.
            </p>
          </div>
          <div className="col-md-6 py-5">
            <img className='w-100' src={recycle} alt="" />
          </div>
          <div className="col-md-6 py-5">
            <h5 className='htext text-center border-bottom border-secondary pb-3'>We offer multiple services in the field of recycling</h5>
            <div className="table">
              <ul>
                <li className='py-5'>collection of residential and commercial waste</li>
                <li className='py-5'>Rental of Temporary Trash Containers</li>
                <li className='py-5'>Industrial Waste Management Services</li>
                <li className='py-5'>Recycling Services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </>
  
  );
}
