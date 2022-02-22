import React from "react";
import "../../styles/card.css";

const Card = ({ name, uid, resourcePath }) => {
  function getImgSrc() {
    // The images' API uses a different name for "people" resource
    const resourceName = resourcePath == "people" ? "characters" : resourcePath;

    return `https://starwars-visualguide.com/assets/img/${resourceName}/${uid}.jpg`;
  }

  // Not all images work, if they don't we fall back to a img placeholder
  function onImgError(event) {
    console.log("Re-setting img");

    event.currentTarget.src = "https://via.placeholder.com/400x300";
  }

  return (
    <div className="card">
      <img
        src={getImgSrc()}
        className="card-img-top"
        alt="card-image"
        onError={onImgError}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title text-center mb-3">{name}</h5>
        <nav className="d-flex justify-content-between">
          <a href="#" className="btn btn-outline-primary">
            Learn More!
          </a>
          <a href="#" className="btn btn-outline-warning">
            <i className="bi bi-heart"></i>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Card;
