import React, { useContext } from "react";
import "../../styles/home.css";
import Section from "../component/section";
import { Context } from "../store/appContext";

export const Home = () => {
  const {
    store: { resources },
  } = useContext(Context);

  return (
    <div className="container">
      {Object.entries(resources).map(([resourceName, elements]) => (
        <Section {...{ resourceName, elements }} key={resourceName} />
      ))}
    </div>
  );
};
