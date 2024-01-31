const database = require("../../database/client");

const getTeams = (_req, res) => {
  database
    .query("SELECT * FROM team")
    .then((result) => {
      res.status(200).json(result[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getTeamById = (req, res) => {
  const id = +req.params.id;

  database
    .query(
      "SELECT team.id, team.name, team.city, team.stadium, team.since, team.logo, players.lastname, players.firstname, players.birthday, players.country, players.city, players.job FROM team INNER JOIN players ON team.id = players.team_id WHERE team.id = ?",
      [id]
    )
    .then((result) => {
      if (result[0]) {
        res.status(200).json(result[0][0]);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getTeams,
  getTeamById,
};
