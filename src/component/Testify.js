import React from 'react'
import Slider from 'react-slick'

const Testify = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="foxes">
      <div className="fox">
        <img src="/itesiwaju.png" alt="" />
        <h3>Itesiwaju Cooperative</h3>
        <h4>Oshodi, Lagos.</h4>
        <p>They have made cooperative workings easier, it is easy to recognize active and non-active members. The payment receipt and the ability to check one’s account balance with the cooperative is applaudable.</p>
      </div>
      <div className="fox">
        <img src="/atlascop.png" alt="" />
        <h3>Itesiwaju Cooperative</h3>
        <h4>Oshodi, Lagos.</h4>
        <p>They have made cooperative workings easier, it is easy to recognize active and non-active members. The payment receipt and the ability to check one’s account balance with the cooperative is applaudable.</p>
      </div>
      <div className="fox">
        <img src="/subcap.png" alt="" />
        <h3>Itesiwaju Cooperative</h3>
        <h4>Oshodi, Lagos.</h4>
        <p>They have made cooperative workings easier, it is easy to recognize active and non-active members. The payment receipt and the ability to check one’s account balance with the cooperative is applaudable.</p>
      </div>
    </div>
  )
}

export default Testify