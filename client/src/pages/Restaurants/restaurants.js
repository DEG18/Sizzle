import React from "react"
import API from "../../utils/API";
import { useGlobalContext } from "../../context/GlobalContext";
import { SET_COLLECTION } from "../../context/actions";

function Restaurants(props) {
    // console.log(props.data[0]);
    const [state, dispatch] = useGlobalContext();
    // var collections = new Array();
    // useEffect(()=>{
    //     // getRest();
    //     API.saveCollection()
    //     .then((res) => {
    //         dispatch({
    //         type: GET_COLLECTION,
    //         collection: res.data
    //     })
    //     });
    // }, [])
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
                            <a href={restaurant.url}><h5 className="card-title">{restaurant.name}</h5></a>
                            ⭑⭑⭑⭑
                            <h6 className="card-title">
                            {" "}
                            Bakeries, Custom Cakes, Cupcakes
                            </h6>
                            {restaurant.address[0]+","+ restaurant.address[1]}
                            <br></br>
                            <a href="tel:5554280940">{restaurant.phone}</a>
                            <p className="card-text">
                                    This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                            </p>
                            <button data-index={index} onClick={() => handleRestSave(restaurant.key)}>SAVE</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="cards container-fluid">
            {restaurants}
        </div>
    )
}

export default Restaurants;