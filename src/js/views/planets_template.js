import React, {useState, useEffect} from "react";
import propTypes from "prop-types";

import "../../styles/planets_template.css"

export const Planet = (props) => {

    const [characterData, setCharacterData] = useState(null);

    useEffect(async () => {

        await fetch(props.planetURL)
        .then(response => {
                if(!response.ok)
                    throw new Error("Error when loading character data")
                
                return response.json();
        })
        .then(data =>{
            setCharacterData(data);
            
            console.log(data);

        })
        .catch(error => {
            console.log(error);
        });

        await fetch(props.imageURL)
        .then(response => {
                if(!response.ok)
                    throw new Error("Error when loading character image")
                
                return response.json();
        })
        .then(data =>{
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });



    }, [])

    return (
        <div>
            <div className="row">
                
                <div className="col-md-12 col-xl-5 ml-3 text-center mb-4">

                    <img id="planetImg" src=""/>

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
                    <p>{characterData ? characterData.result.properties.population : ""}</p>
                </div>
                <div className="col-xl-2 col-sm-12 mt-1">
                <strong>ORBITAL PERIOD</strong>
                    <p>{characterData ? characterData.result.properties.orbital_period : ""}</p>
                </div>
                <div className="col-xl-2 col-sm-12 mt-1">
                <strong>ROTATION PERIOD</strong>
                    <p>{characterData ? characterData.result.properties.rotation_period : ""}</p>
                </div>
                <div className="col-xl-2 col-sm-12 mt-1">
                <strong>DIAMETER</strong>
                    <p>{characterData ? characterData.result.properties.diameter : ""}</p>
                </div>
            </div>
           
        </div>
    )

}

Planet.propTypes = {

    planetURL: propTypes.string,
    imageURL: propTypes.string,
}
