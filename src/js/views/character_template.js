import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";

import "../../styles/character_template.css";

export const Character = () => {
  const [characterData, setCharacterData] = useState(null);
  const params = useParams();

  useEffect(async () => {
    await fetch(`https://www.swapi.tech/api/people/${params.id}`)
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
            id="characterImg"
            src={`https://starwars-visualguide.com/assets/img/people/${params.id}.jpg`}
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
          <strong>BIRTH YEAR</strong>
          <p>
            {characterData ? characterData.result.properties.birth_year : ""}
          </p>
        </div>
        <div className="col-xl-2 col-sm-12 col-sm-12 mt-1">
          <strong>GENDER</strong>
          <p>{characterData ? characterData.result.properties.gender : ""}</p>
        </div>
        <div className="col-xl-2 col-sm-12 mt-1">
          <strong>HEIGHT</strong>
          <p>{characterData ? characterData.result.properties.height : ""}</p>
        </div>
        <div className="col-xl-2 col-sm-12 mt-1">
          <strong>SKIN COLOR</strong>
          <p>
            {characterData ? characterData.result.properties.skin_color : ""}
          </p>
        </div>
        <div className="col-xl-2 col-sm-12 mt-1">
          <strong>EYE COLOR</strong>
          <p>
            {characterData ? characterData.result.properties.eye_color : ""}
          </p>
        </div>
      </div>
    </div>
  );
};
