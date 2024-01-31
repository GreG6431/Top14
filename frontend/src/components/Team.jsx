import React from "react";
import PropTypes from "prop-types";
import { Link, useLoaderData } from "react-router-dom";

import "./team.css";

function Team() {
  const allTeams = useLoaderData();

  return (
    <div>
      <h1>CHAMPIONNAT TOP 14</h1>
      <h2>LES ÉQUIPES</h2>
      {allTeams.map((team) => (
        <Link to={`/team/${team.id}`}>
          <div key={team.id}>
            <h2>{team.name}</h2>
            <h2>Ville : {team.city}</h2>
            <h2>Stade : {team.stadium}</h2>
            <h2>Création : {team.since}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
Team.propTypes = {
  team: PropTypes.shape().isRequired,
};

export default Team;
