import React, { useContext, useEffect, useState } from "react";
import Card from "./card";
import "../../styles/section.css";
import { Context } from "../store/appContext";

const Section = ({ resourcePath, title }) => {
  const { store } = useContext(Context);

  return (
    <section className="resource">
      <h2 className="text-danger mb-3"> {title} </h2>

      <div className="d-flex gap-4 cards-container">
        {store.resources[resourcePath] &&
          store.resources[resourcePath].map((element) => (
            <Card {...element} resourcePath={resourcePath} key={element.uid} />
          ))}
      </div>
    </section>
  );
};

export default Section;
