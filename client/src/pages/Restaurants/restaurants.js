import React from "react";
import "./restaurants.css";

function Restaurants(props) {
  // console.log(props.data[0]);
  var x = props.data[0];
  console.log(x);
  var restaurants = new Array();
  props.data.map((restaurant, index) => {
    restaurants.push(
      <div className="row justify-content-center">
        <div id="cardbox" className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={restaurant.image} className="card-img" alt="logo" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <a href={restaurant.url}>
                  <h5 className="card-title">{restaurant.name}</h5>
                </a>
                ⭑⭑⭑⭑
                <h6 className="card-title">
                  {" "}
                  Bakeries, Custom Cakes, Cupcakes
                </h6>
                {restaurant.address[0] + "," + restaurant.address[1]}
                <br></br>
                <a href="tel:5554280940">{restaurant.phone}</a>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <button
                  type="button"
                  class="save btn btn-warning"
                  data-index={index}
                >
                  SAVE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div className="cards container-fluid">{restaurants}</div>;
}

export default Restaurants;
