import React, {useState, useEffect} from "react";
import { useParams } from "react-router";

import "../../styles/ship_template.css"

export const Ship = () => {

    const [characterData, setCharacterData] = useState(null);
    const params = useParams();

    useEffect(async () => {

        await fetch(`https://www.swapi.tech/api/starships/${params.id}`)
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

    }, [])

    return (
        <div>
            <div className="row">
                
                <div className="col-md-12 col-xl-5 ml-3 text-center mb-4">

                    <img id="shipImg" src={`https://starwars-visualguide.com/assets/img/starships/${params.id}.jpg`}/>

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
                <strong>MODEL</strong>
                    <p>{characterData ? characterData.result.properties.model : ""}</p>
                </div>
                <div className="col-xl-2 col-sm-12 col-sm-12 mt-1">
                <strong>MANUFACTURER</strong>
                    <p>{characterData ? characterData.result.properties.manufacturer : ""}</p>
                </div>
                <div className="col-xl-2 col-sm-12 mt-1">
                <strong>CREW</strong>
                    <p>{characterData ? characterData.result.properties.crew : ""}</p>
                </div>
                <div className="col-xl-2 col-sm-12 mt-1">
                <strong>LENGTH</strong>
                    <p>{characterData ? characterData.result.properties.length : ""}</p>
                </div>
                <div className="col-xl-2 col-sm-12 mt-1">
                <strong>HYPERDRIVE RATING</strong>
                    <p>{characterData ? characterData.result.properties.hyperdrive_rating : ""}</p>
                </div>
            </div>
           
        </div>
    )

}

