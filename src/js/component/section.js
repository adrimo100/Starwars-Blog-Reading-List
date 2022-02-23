import React, { useEffect, useState } from "react";
import Card from "./card";
import "../../styles/section.css";

const Section = ({ resourcePath, title }) => {
  const [resource, setResource] = useState([]);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/${resourcePath}/`)
      .then((res) => res.json())
      .then((data) => {
        setResource(data.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="resource">
      <h2 className="text-danger mb-3"> {title} </h2>

      <div className="d-flex gap-4 cards-container">
        {resource.map((element) => (
          <Card {...element} resourcePath={resourcePath} key={element.uid} />
        ))}
      </div>
    </section>
  );
};

export default Section;
