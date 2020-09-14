import React from "react";
import { Link } from "react-router-dom";

const CollectionIcon = () => {
  return (
    <div>
      <Link className="right" to="/collection">
        Collections
      </Link>
    </div>
  );
};

export default CollectionIcon;
