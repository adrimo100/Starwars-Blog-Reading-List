import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/card.css";
import { Context } from "../store/appContext";
import { findFavouriteIndexByName } from "../store/flux";

const Card = ({ name, uid, resourceName }) => {
  const {
    store: { favourites },
    actions,
  } = useContext(Context);

  const isFavourite = findFavouriteIndexByName(name, favourites) >= 0;

  function handleFavourite(event) {
    event.preventDefault();
    actions.switchFavourite({ name, uid, resource: resourceName });
    console.log(favourites);
  }

  function getImgSrc() {
    // The images' API uses a different name for "people" resourceName
    const parsedResourceName =
      resourceName == "people" ? "characters" : resourceName;

    return `https://starwars-visualguide.com/assets/img/${parsedResourceName}/${uid}.jpg`;
  }

  // Not all images work, if they don't we fall back to a img placeholder
  function onImgError(event) {
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
          <Link to={`/${resourceName}/${uid}`}>
            <button href="#" className="btn btn-outline-primary">
              Learn More!
            </button>
          </Link>
          <a
            href="#"
            className={`btn btn-outline-warning ${isFavourite ? "active" : ""}`}
            onClick={handleFavourite}
          >
            <i className={`bi bi-heart${isFavourite ? "-fill" : ""}`}></i>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Card;
