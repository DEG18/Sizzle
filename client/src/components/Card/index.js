import React from "react";

function Card({ image, description }) {
  return (
    <div className="card mt-4">
      <div className="card-header">
        <h3>
          <strong>
            <img className={`fa fa-${image}`} aria-hidden="true" />{" "}
            {description}
          </strong>
        </h3>
      </div>
    </div>
  );
}

export default Card;
