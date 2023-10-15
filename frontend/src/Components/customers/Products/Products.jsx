import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import API_BASE_URL from "../../../Constants/Constants";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(`${API_BASE_URL}/api/v1/user/all-products`);
      setProducts(data.data.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div class="container-fluid pt-5">
        <div class="row px-xl-5 pb-3">
          <div class="col-lg-4 col-md-6 pb-1">
            <div
              class="cat-item d-flex flex-column border mb-4"
              style={{ padding: "30px" }}
            >
              <p class="text-right">15 Products</p>
              <a href="" class="cat-img position-relative overflow-hidden mb-3">
                <img
                  class="img-fluid"
                  src="https://m.media-amazon.com/images/I/51Rgtw+Q8QL._UX569_.jpg"
                  alt=""
                />
              </a>
              <h5 class="font-weight-semi-bold m-0">Men's dresses</h5>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 pb-1">
            <div
              class="cat-item d-flex flex-column border mb-4"
              style={{ padding: "30px" }}
            >
              <p class="text-right">15 Products</p>
              <a href="" class="cat-img position-relative overflow-hidden mb-3">
                <img
                  class="img-fluid"
                  src="https://m.media-amazon.com/images/I/91n5s+BPQSL._UY741_.jpg"
                  alt=""
                />
              </a>
              <h5 class="font-weight-semi-bold m-0">Women's dresses</h5>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 pb-1">
            <div
              class="cat-item d-flex flex-column border mb-4"
              style={{ padding: "30px" }}
            >
              <p class="text-right">15 Products</p>
              <a href="" class="cat-img position-relative overflow-hidden mb-3">
                <img
                  class="img-fluid"
                  src="https://m.media-amazon.com/images/I/512Fau61yGL._UX679_.jpg"
                  alt=""
                />
              </a>
              <h5 class="font-weight-semi-bold m-0">Baby's dresses</h5>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 pb-1">
            <div
              class="cat-item d-flex flex-column border mb-4"
              style={{ padding: "30px" }}
            >
              <p class="text-right">15 Products</p>
              <a href="" class="cat-img position-relative overflow-hidden mb-3">
                <img
                  class="img-fluid"
                  src="https://rukminim2.flixcart.com/image/416/416/xif0q/rack-shelf/y/v/u/bathroom-1-multipurpose-bathroom-double-dish-tumbler-soap-tooth-original-imagqkxfrpfsqxa8.jpeg?q=70"
                  alt=""
                />
              </a>
              <h5 class="font-weight-semi-bold m-0">Accerssories</h5>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 pb-1">
            <div
              class="cat-item d-flex flex-column border mb-4"
              style={{ padding: "30px" }}
            >
              <p class="text-right">15 Products</p>
              <a href="" class="cat-img position-relative overflow-hidden mb-3">
                <img
                  class="img-fluid"
                  src="https://m.media-amazon.com/images/I/61egMfcDWlL._UX679_.jpg"
                  alt=""
                />
              </a>
              <h5 class="font-weight-semi-bold m-0">Bags</h5>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 pb-1">
            <div
              class="cat-item d-flex flex-column border mb-4"
              style={{ padding: "30px" }}
            >
              <p class="text-right">15 Products</p>
              <a href="" class="cat-img position-relative overflow-hidden mb-3">
                <img
                  class="img-fluid"
                  src="https://m.media-amazon.com/images/I/71IyWaj2tHL._UY695_.jpg"
                  alt=""
                />
              </a>
              <h5 class="font-weight-semi-bold m-0">Shoes</h5>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid offer pt-5">
        <div class="row px-xl-5">
          <div class="col-md-6 pb-4">
            <div class="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
              <img
                src="https://t3.ftcdn.net/jpg/04/41/50/02/360_F_441500250_ssJ2UItR1oQ1p8g6FS4Gbur3R3G0TqjO.jpg"
                alt=""
              />
              <div class="position-relative" style={{ zIndex: "1" }}>
                <h5 class="text-uppercase text-primary mb-3">
                  20% off the all order
                </h5>
                <h1 class="mb-4 font-weight-semi-bold">Spring Collection</h1>
                <a href="" class="btn btn-outline-primary py-md-2 px-md-3">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6 pb-4">
            <div class="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/Jupiter23/Event/Train_GW_editorial_2300x646._CB575880778_.jpgs"
                alt=""
              />
              <div class="position-relative" style={{ zIndex: "1" }}>
                <h5 class="text-uppercase text-primary mb-3">
                  20% off the all order
                </h5>
                <h1 class="mb-4 font-weight-semi-bold">Winter Collection</h1>
                <a href="" class="btn btn-outline-primary py-md-2 px-md-3">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid pt-5">
        <div class="text-center mb-4">
          <h2 class="section-title px-5">
            <span class="px-2">Trandy Products</span>
          </h2>
        </div>
        <div class="row px-xl-5 pb-3">
          {products && products.length > 0 ? (
            products.map((product, index) => (
              <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div class="card product-item border-0 mb-4">
                  <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <img class="img-fluid w-100" src={product?.image} alt="" />
                  </div>
                  <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6 class="text-truncate mb-3">{product?.name}</h6>
                    <div class="d-flex justify-content-center">
                      <h6>${product?.price}</h6>
                      <h6 class="text-muted ml-2">
                        <del>$123.00</del>
                      </h6>
                    </div>
                  </div>
                  <div class="card-footer d-flex justify-content-between bg-light border">
                    <a href="" class="btn btn-sm text-dark p-0">
                      <i class="fas fa-eye text-primary mr-1"></i>View Detail
                    </a>
                    <a href="" class="btn btn-sm text-dark p-0">
                      <i class="fas fa-shopping-cart text-primary mr-1"></i>Add
                      To Cart
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <>No products available now!</>
          )}
        </div>
      </div>

      <div class="container-fluid bg-info my-5">
        <div class="row justify-content-md-center py-5 px-xl-5">
          <div class="col-md-6 col-12 py-5">
            <div class="text-center mb-2 pb-2">
              <h2 class="section-title px-5 mb-3">
                <span class="px-2">Stay Updated</span>
              </h2>
              <p className="text-white">
                Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet
                diam labore at justo ipsum eirmod duo labore labore.
              </p>
            </div>
            <form action="">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control border-white p-4"
                  placeholder="Email Goes Here"
                />
                <div class="input-group-append">
                  <button class="btn btn-primary px-4">Subscribe</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="container-fluid pt-5">
        <div class="text-center mb-4">
          <h2 class="section-title px-5">
            <span class="px-2">Just Arrived</span>
          </h2>
        </div>
        <div class="row px-xl-5 pb-3">
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="card product-item border-0 mb-4">
              <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img
                  class="img-fluid w-100"
                  src="https://m.media-amazon.com/images/I/51Rgtw+Q8QL._AC_UL320_.jpg"
                  alt=""
                />
              </div>
              <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div class="d-flex justify-content-center">
                  <h6>$123.00</h6>
                  <h6 class="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-between bg-light border">
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-eye text-primary mr-1"></i>View Detail
                </a>
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-shopping-cart text-primary mr-1"></i>Add To
                  Cart
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="card product-item border-0 mb-4">
              <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img
                  class="img-fluid w-100"
                  src="https://m.media-amazon.com/images/I/71yZcPQ1rFL._AC_UL320_.jpg"
                  alt=""
                />
              </div>
              <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div class="d-flex justify-content-center">
                  <h6>$123.00</h6>
                  <h6 class="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-between bg-light border">
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-eye text-primary mr-1"></i>View Detail
                </a>
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-shopping-cart text-primary mr-1"></i>Add To
                  Cart
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="card product-item border-0 mb-4">
              <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img
                  class="img-fluid w-100"
                  src="https://m.media-amazon.com/images/I/71tHEf94tqL._AC_UL320_.jpg"
                  alt=""
                />
              </div>
              <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div class="d-flex justify-content-center">
                  <h6>$123.00</h6>
                  <h6 class="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-between bg-light border">
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-eye text-primary mr-1"></i>View Detail
                </a>
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-shopping-cart text-primary mr-1"></i>Add To
                  Cart
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="card product-item border-0 mb-4">
              <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img
                  class="img-fluid w-100"
                  src="https://m.media-amazon.com/images/I/71xZY5-a1oL._AC_UL320_.jpg"
                  alt=""
                />
              </div>
              <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div class="d-flex justify-content-center">
                  <h6>$123.00</h6>
                  <h6 class="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-between bg-light border">
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-eye text-primary mr-1"></i>View Detail
                </a>
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-shopping-cart text-primary mr-1"></i>Add To
                  Cart
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="card product-item border-0 mb-4">
              <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img
                  class="img-fluid w-100"
                  src="https://m.media-amazon.com/images/I/71ZI9PfPnaL._AC_UL320_.jpg"
                  alt=""
                />
              </div>
              <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div class="d-flex justify-content-center">
                  <h6>$123.00</h6>
                  <h6 class="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-between bg-light border">
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-eye text-primary mr-1"></i>View Detail
                </a>
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-shopping-cart text-primary mr-1"></i>Add To
                  Cart
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="card product-item border-0 mb-4">
              <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img
                  class="img-fluid w-100"
                  src="https://m.media-amazon.com/images/I/71Bo9OtlEtL._AC_UL320_.jpg"
                  alt=""
                />
              </div>
              <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div class="d-flex justify-content-center">
                  <h6>$123.00</h6>
                  <h6 class="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-between bg-light border">
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-eye text-primary mr-1"></i>View Detail
                </a>
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-shopping-cart text-primary mr-1"></i>Add To
                  Cart
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="card product-item border-0 mb-4">
              <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img
                  class="img-fluid w-100"
                  src="https://m.media-amazon.com/images/I/71Jl4DbJUjL._AC_UL320_.jpg"
                  alt=""
                />
              </div>
              <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div class="d-flex justify-content-center">
                  <h6>$123.00</h6>
                  <h6 class="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-between bg-light border">
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-eye text-primary mr-1"></i>View Detail
                </a>
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-shopping-cart text-primary mr-1"></i>Add To
                  Cart
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="card product-item border-0 mb-4">
              <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img
                  class="img-fluid w-100"
                  src="https://m.media-amazon.com/images/I/91M0+AY7lpL._AC_UL320_.jpg"
                  alt=""
                />
              </div>
              <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div class="d-flex justify-content-center">
                  <h6>$123.00</h6>
                  <h6 class="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-between bg-light border">
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-eye text-primary mr-1"></i>View Detail
                </a>
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-shopping-cart text-primary mr-1"></i>Add To
                  Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
