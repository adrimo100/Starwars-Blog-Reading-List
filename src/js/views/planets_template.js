import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "../../styles/planets_template.css";

export const Planet = () => {
  const [characterData, setCharacterData] = useState(null);
  const params = useParams();

  useEffect(async () => {
    await fetch(`https://www.swapi.tech/api/planets/${params.id}`)
      .then((response) => {
        if (!response.ok) throw new Error("Error when loading character data");

        return response.json();
      })
      .then((data) => {
        setCharacterData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-md-12 col-xl-5 ml-3 text-center mb-4">
          <img
            id="planetImg"
            src={`https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`}
          />
        </div>
        <div className="col-md-12 col-xl-6 ml-3 text-center mb-4">
          <h2>{characterData ? characterData.result.properties.name : ""}</h2>
          <p>{characterData ? characterData.result.description : ""}</p>
        </div>
      </div>
      <div className="row p-5 text-danger">
        <hr />
        <div className="col-xl-2 col-sm-12 mt-1">
          <strong>NAME</strong>
          <p>{characterData ? characterData.result.properties.name : ""}</p>
        </div>
        <div className="col-xl-2 col-sm-12 mt-1">
          <strong>CLIMATE</strong>
          <p>{characterData ? characterData.result.properties.climate : ""}</p>
        </div>
        <div className="col-xl-2 col-sm-12 col-sm-12 mt-1">
          <strong>POPULATION</strong>
          <p>
            {characterData ? characterData.result.properties.population : ""}
          </p>
        </div>
        <div className="col-xl-2 col-sm-12 mt-1">
          <strong>ORBITAL PERIOD</strong>
          <p>
            {characterData
              ? characterData.result.properties.orbital_period
              : ""}
          </p>
        </div>
        <div className="col-xl-2 col-sm-12 mt-1">
          <strong>ROTATION PERIOD</strong>
          <p>
            {characterData
              ? characterData.result.properties.rotation_period
              : ""}
          </p>
        </div>
        <div className="col-xl-2 col-sm-12 mt-1">
          <strong>DIAMETER</strong>
          <p>{characterData ? characterData.result.properties.diameter : ""}</p>
        </div>
      </div>
    </div>
  );
};
