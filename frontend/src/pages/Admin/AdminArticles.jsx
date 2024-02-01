import React, { useState } from "react";
import connexion from "../../services/connexion";
import "./AdminArticles.css";

const articlesType = {
  lastname: "",
  firstname: "",
  birthday: "",
  country: "",
  city: "",
  job: "",
  team_id: 1,
};

function AdminArticles() {
  const [articles, setArticles] = useState(articlesType);
  const handleArticles = (event) => {
    if (event.target.name === "team_id") {
      setArticles((previousState) => ({
        ...previousState,
        [event.target.name]: +event.target.value,
      }));
    } else {
      setArticles((previousState) => ({
        ...previousState,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const handleAddPlayer = async (e) => {
    e.preventDefault();

    try {
      const response = await connexion.post(`/players`, articles);

      if (response) {
        console.info(response);
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>Ajout d'un joueur</h1>
      <form onSubmit={handleAddPlayer}>
        <label>
          TeamId
          <input
            type="number"
            name="team_id"
            required
            value={articles.team_id}
            onChange={handleArticles}
          />
        </label>
        <label>
          Lastname
          <input
            type="text"
            name="lastname"
            required
            value={articles.lastname}
            onChange={handleArticles}
          />
        </label>
        <label>
          Firstname
          <input
            type="text"
            name="firstname"
            required
            value={articles.firstname}
            onChange={handleArticles}
          />
        </label>
        <label>
          Birthday
          <input
            type="text"
            name="birthday"
            required
            value={articles.birthday}
            onChange={handleArticles}
          />
        </label>
        <label>
          Country
          <input
            type="text"
            name="country"
            required
            value={articles.country}
            onChange={handleArticles}
          />
        </label>
        <label>
          City
          <input
            type="text"
            name="city"
            required
            value={articles.city}
            onChange={handleArticles}
          />
        </label>
        <label>
          Job
          <input
            type="text"
            name="job"
            required
            value={articles.job}
            onChange={handleArticles}
          />
        </label>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default AdminArticles;

// ,lastname
//   ,firstname
//   ,birthday
//   ,country
//   ,city
//   ,job
//   ,team_id
