import React, {useState, useEffect, useContext} from "react";
import propTypes from "prop-types";

import "../../styles/character_template.css"


const Character = (props) => {

    const [characterData, setCharacterData] = useState(null);

    useEffect(async () => {

        await fetch(props.characterURL)
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

                    <img id="characterImg" src=""/>

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
                    <p>{characterData ? characterData.result.properties.birth_year : ""}</p>
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
                    <p>{characterData ? characterData.result.properties.skin_color : ""}</p>
                </div>
                <div className="col-xl-2 col-sm-12 mt-1">
                <strong>EYE COLOR</strong>
                    <p>{characterData ? characterData.result.properties.eye_color : ""}</p>
                </div>
            </div>
           
        </div>
    )

}

Character.propTypes = {

    characterURL: propTypes.string,
    imageURL: propTypes.string,
}



export default Character;

