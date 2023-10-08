import React from "react";

function Carousel() {
  return (
    <div>
      <div class="carousel-inner">
        <div class="carousel-item active" style={{ height: "410px" }}>
          <img
            class="img-fluid"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/GW/desktop/Non_Pea_Unrec_Phase_1_Tallhero_3000x1200._CB577613664_.jpg"
            alt="Image"
          />
          <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div class="p-3" style={{ maxWidth: "700px" }}>
              <h4 class="text-light text-uppercase font-weight-medium mb-3">
                10% Off Your First Order
              </h4>
              <h3 class="display-4 text-white font-weight-semi-bold mb-4">
                Fashionable Dress
              </h3>
              <a href="" class="btn btn-light py-2 px-3">
                Shop Now
              </a>
            </div>
          </div>
        </div>
        <div class="carousel-item" style={{ height: "410px" }}>
          <img
            class="img-fluid"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2023/Jupiter23/GW/Phase1/Unrec/Jup_PC_Hero_3000x1200._CB575915971_.jpg"
            alt="Image"
          />
          <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div class="p-3" style={{ maxWidth: "700px" }}>
              <h4 class="text-light text-uppercase font-weight-medium mb-3">
                10% Off Your First Order
              </h4>
              <h3 class="display-4 text-white font-weight-semi-bold mb-4">
                Reasonable Price
              </h3>
              <a href="" class="btn btn-light py-2 px-3">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
