import React, { useState } from "react";
import "./AdminArticles.css";

const articlesType = {
  lastname: "",
  firstname: "",
  birthday: "",
  country: "",
  city: "",
  job: "",
};

function AdminArticles() {
  const [articles, setArticles] = useState(articlesType);
  const handleArticles = (event) => {
    setArticles((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  };
  const handleAddPlayer = () => {
    setArticles(articlesType);
  };
  return (
    <div>
      <h1>Administration d'un joueur</h1>
      <form>
        Ajout d'un joueur
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
        <button type="button" onClick={handleAddPlayer}>
          Ajouter
        </button>
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
