import React from "react";
import Header from "../../Components/customers/Header/Header";
import Sidebar from "../../Components/customers/sidebar/Sidebar";
import Category from "../../Components/customers/Category/Category";
import Products from "../../Components/customers/Products/Products";
import Footer from "../../Components/customers/Footer/Footer";

function HomeScreen() {
  return (
    <div>
      <div>
        <div class="container-fluid">
          <Header />
        </div>

        <div class="container-fluid mb-5">
          <Sidebar />
        </div>

        <div class="container-fluid pt-5">
          <Category />
        </div>

        <div>
          <Products />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
