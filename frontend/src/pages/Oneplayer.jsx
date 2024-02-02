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
    <div className="player-card">
      <h1 className="player-info">Nom: {Team.lastname}</h1>
      <h1 className="player-info">Prénom: {Team.firstname}</h1>
      <h1 className="player-info">Date de naissance: {Team.birthday}</h1>
      <h1 className="player-info">Pays: {Team.country}</h1>
      <h1 className="player-info">Ville: {Team.city}</h1>
      <h1 className="player-info">Poste: {Team.job}</h1>
      <button
        className="delete-button"
        type="button"
        onClick={() => deletePlayers(Team.id)}
      >
        Supprimer
      </button>
    </div>
  );
}

export default Oneplayer;
