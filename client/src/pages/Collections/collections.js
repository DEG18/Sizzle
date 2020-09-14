import React from "react";
import "./collections.css";
import logo from "../../assets/sizzle.jpg";

const Collections = () => {
  return (
    //card
    <div className="cards container-fluid">
      <div className="row justify-content-center">
        <div id="cardbox" className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={logo} className="card-img" alt="logo" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Cocoa Bakery</h5>
                ⭑⭑⭑⭑
                <h6 className="card-title">
                  {" "}
                  Bakeries, Custom Cakes, Cupcakes
                </h6>
                <a href="link.html"> Address</a>
                <br></br>
                <a href="tel:5554280940">Call us at 555-428-0940</a>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
