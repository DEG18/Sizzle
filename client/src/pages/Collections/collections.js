import React, { useEffect } from "react";
import "./collections.css";
import API from "../../utils/API";
import { useGlobalContext } from "../../context/GlobalContext";
import { GET_COLLECTION } from "../../context/actions";

const Collections = () => {
  const [state, dispatch] = useGlobalContext();

  var restaurants = new Array();
  useEffect(() => {
    // getRest();
    API.getCollection().then((res) => {
      console.log(res.data);
      dispatch({
        type: GET_COLLECTION,
        collection: res.data,
      });
    });
  }, []);

  state.collection.map((restaurant) => {
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
                <button type="button" class="btn delete btn-danger">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    //card

    <div className="cards container-fluid">
      {console.log(restaurants)}
      {restaurants}
    </div>
  );
};

export default Collections;
