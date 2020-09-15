import React from "react"
import API from "../../utils/API";
import { useGlobalContext } from "../../context/GlobalContext";
import { SET_COLLECTION } from "../../context/actions";
import "./restaurants.css";

function Restaurants(props) {
    const [state, dispatch] = useGlobalContext();
    const handleRestSave = (id) => {
        const restaurant = state.restaurants.find(book => book.key === id);
        console.log(restaurant)
        API.saveCollection({
            key: restaurant.key,
            name: restaurant.name,
            url: restaurant.url,
            rating: restaurant.rating,
            address: restaurant.address.join(", "),
            phone: restaurant.phone,
            image: restaurant.image,
        }).then((res) => {
            console.log(res.data);
            dispatch({
                type: SET_COLLECTION,
                restaurant: res.data
            })
            console.log(res.data);
    }).catch(err => console.log(err));
    };

    var x = props.data[0];
    console.log(x)
    var restaurants = new Array();
    props.data.map((restaurant,index) => {
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
                    Rating: {restaurant.rating}
                    <h6 className="card-title">
                    {" "}
                    </h6>
                    Address: {restaurant.address[0] + "," + restaurant.address[1]}
                    <br></br>
                    {restaurant.phone}
                    <p className="card-text">
                    </p>
                    <button
                    type="button"
                    class="save btn btn-warning"
                    data-index={index}
                    onClick={() => handleRestSave(restaurant.key)}
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
