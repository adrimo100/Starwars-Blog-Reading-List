import React from "react";
import "../../styles/card.css";

const Card = ({ name, url }) => (
  <div className="card">
    <img
      src="https://via.placeholder.com/400x200"
      className="card-img-top"
      alt="card-image"
    />

    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">
        propiedades...
        {/* <ul>
          {Object.entries(properties).map(([key, value]) => (
            <li>
              {key}: {value}
            </li>
          ))}
        </ul> */}
      </p>
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

export default Card;
