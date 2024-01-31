import React from "react";
import PropTypes from "prop-types";
import { Link, useLoaderData } from "react-router-dom";

import "./Team.css";

function Team() {
  const allTeams = useLoaderData();

  return (
    <div className="team-container">
      <h1>CHAMPIONNAT TOP 14</h1>
      <h2>LES ÉQUIPES</h2>
      <div className="teams-list">
        {allTeams.map((team) => (
          <Link to={`/team/${team.id}`} key={team.id}>
            <div className="team-card">
              <img className="logo" src={team.logo} alt="logo" />
              <div className="team-info">
                <h2>{team.name}</h2>
                <p>Ville: {team.city}</p>
                <p>Stade: {team.stadium}</p>
                <p>Création: {team.since}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

Team.propTypes = {
  team: PropTypes.shape().isRequired,
};

export default Team;
