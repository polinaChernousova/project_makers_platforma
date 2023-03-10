import React from "react";
import ProductList from "../product/ProductList";

const HomePage = () => {
  return (
    <div>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "32px",
        }}
      >
        <div>
          <h1
            style={{
              color: "#6e6e73",
              letterSpacing: "1.5px",
              fontWeight: "600",
            }}
          >
            <span style={{ color: "#1d1d1f", marginRight: "5px" }}>Store.</span>
            The best way to buy the <br /> products you love.
          </h1>
        </div>
      </section>
      <ProductList />
    </div>
  );
};

export default HomePage;
