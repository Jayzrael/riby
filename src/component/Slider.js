import React, { Component } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

export default class Slider extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src="/mage1.png" />
          <div className="myCarousel">
            <h3>Itesiwaju Cooperative </h3>
            <h4>Oshodi, Lagos.</h4>
            <p>
            They have made cooperative workings easier, it is easy to recognize active and non-active members. The payment receipt and the ability to check one’s account balance with the cooperative is applaudable.
            </p>
          </div>
        </div>

        <div>
          <img src="/mage2.png" />
          <div className="myCarousel">
            <h3>Atlas Copco</h3>
            <h4>Oshodi-Apapa, Lagos.</h4>
            <p>
            It’s been a great experience using riby cobanking platform because of how easy it is to use. It eliminates paper work and it also helps our admins keep proper records of the cooperative’s transaction in real time.
            </p>
          </div>
        </div>

        <div>
          <img src="/mage3.png" />
          <div className="myCarousel">
            <h3>SUBA CAPITAL</h3>
            <h4>Benin City, Edo State..</h4>
            <p>
            Aside from having a great experience using the cobanking platform, the subscription feature which automatically debits the members at the right time for contributions is simply the best.
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}