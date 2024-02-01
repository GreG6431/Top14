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
    <div>
      <h1>Nom: {Team.lastname}</h1>
      <h1>Prénom: {Team.firstname}</h1>
      <h1>Date de naissance: {Team.birthday}</h1>
      <h1>Pays: {Team.country}</h1>
      <h1>Ville: {Team.city}</h1>
      <h1>Poste: {Team.job}</h1>
      <button type="button" onClick={() => deletePlayers(Team.id)}>
        Supprimer
      </button>
    </div>
  );
}

export default Oneplayer;
