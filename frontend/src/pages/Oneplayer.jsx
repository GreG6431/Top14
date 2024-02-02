import { useLoaderData } from "react-router-dom";
import connexion from "../services/connexion";
import "./Oneplayer.css";

function Oneplayer() {
  const Team = useLoaderData();

  const deletePlayers = async (id) => {
    try {
      await connexion.delete(`/players/${id}`);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="teams-list">
      <div className="team-card">
        <h1 className="text-card">Nom: {Team.lastname}</h1>
        <h1 className="text-card">Prénom: {Team.firstname}</h1>
        <h1 className="text-card">Date de naissance: {Team.birthday}</h1>
        <h1 className="text-card">Pays: {Team.country}</h1>
        <h1 className="text-card">Ville: {Team.city}</h1>
        <h1 className="text-card">Poste: {Team.job}</h1>

        <button
          className="delete-button"
          type="button"
          onClick={() => deletePlayers(Team.id)}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}

export default Oneplayer;
