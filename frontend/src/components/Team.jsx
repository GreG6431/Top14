import React from "react";
import PropTypes from "prop-types";
import { Link, useLoaderData } from "react-router-dom";

import "./Team.css";

function Team() {
  const allTeams = useLoaderData();
  const top14LogoUrl =
    "https://upload.wikimedia.org/wikipedia/fr/thumb/3/3a/Top_14.svg/632px-Top_14.svg.png?20160521213028";

  return (
    <div className="team-container">
      <img className="top14-logo" src={top14LogoUrl} alt="TOP14 Logo" />
      <h1>LES ÉQUIPES</h1>

      <div className="teams-list">
        {allTeams.map((team) => (
          <Link to={`/team/${team.id}`} key={team.id} className="custom-link">
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
