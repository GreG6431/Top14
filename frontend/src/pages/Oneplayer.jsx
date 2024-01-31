import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Oneplayer.css";

function Oneplayer() {
  const Team = useLoaderData();
  return (
    <div>
      <h1>Nom: {Team.lastname}</h1>
      <h1>Prénom: {Team.firstname}</h1>
      <h1>Date de naissance: {Team.birthday}</h1>
      <h1>Pays: {Team.country}</h1>
      <h1>Ville: {Team.city}</h1>
      <h1>Poste: {Team.job}</h1>
    </div>
  );
}

export default Oneplayer;
