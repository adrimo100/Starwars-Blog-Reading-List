import React from "react";
import Card from "./card";
import "../../styles/section.css";

const Section = ({ resourceName, elements }) => {
  return (
    <section className="resource">
      <h2 className="text-danger mb-3 resource-title"> {resourceName} </h2>

      <div className="d-flex gap-4 cards-container">
        {elements &&
          elements.map((element) => (
            <Card {...element} resourceName={resourceName} key={element.uid} />
          ))}
      </div>
    </section>
  );
};

export default Section;
