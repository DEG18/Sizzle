import React from "react"

function Restaurants(props) {
    // console.log(props.data[0]);
    var x = props.data[0];
    console.log(x)
    return (
        <div className="cards container-fluid">
        <div className="row justify-content-center">
            <div id="cardbox" className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                {/* <img src={logo} className="card-img" alt="logo" /> */}
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    {/* <h5 className="card-title">{props.data[0].name}</h5> */}
                    ⭑⭑⭑⭑
                    <h6 className="card-title">
                    {" "}
                    Bakeries, Custom Cakes, Cupcakes
                    </h6>
                    {/* <a href="link.html">{props.data.address[0]+","+ props.data.address[1]}</a> */}
                    <br></br>
                                {/* <a href="tel:5554280940">{props.data.phone}</a> */}
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
    )
}

export default Restaurants;