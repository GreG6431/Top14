import React from "react";
import PropTypes from "prop-types";
import { Link, useLoaderData } from "react-router-dom";

import "./Team.css";

function Team() {
  const allTeams = useLoaderData();

  return (
    <div className="team-container">
      <h1>LES ÉQUIPES</h1>

      <div className="teams-list">
        {allTeams.map((team) => (
          <Link to={`/team/${team.id}`} key={team.id} className="custom-link">
            <div className="team-card">
              <img className="logo" src={team.logo} alt="logo" />
              <div className="team-info">
                <h4>{team.name}</h4>
                <p className="text-card">Ville: {team.city}</p>
                <p className="text-card">Stade: {team.stadium}</p>
                <p className="text-card">Création: {team.since}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

Team.propTypes = {
  team: PropTypes.shape({
    id: PropTypes.number.isRequired,
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    stadium: PropTypes.string.isRequired,
    since: PropTypes.number.isRequired,
  }).isRequired,
};

export default Team;
