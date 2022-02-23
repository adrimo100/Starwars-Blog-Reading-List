import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import Section from "../component/section";

export const Home = () => {
  return (
    <div className="container">
      <Section title="Characters" resourcePath="people" />
      <Section title="Planets" resourcePath="planets" />
      <Section title="Starships" resourcePath="starships" />
    </div>
  );
};
