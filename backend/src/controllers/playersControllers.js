const database = require("../../database/client");

const getPlayers = (_req, res) => {
  database
    .query("select * from players")
    .then((result) => {
      res.status(200).json(result[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getPlayerById = (req, res) => {
  const id = +req.params.id;

  database
    .query("select * from players where id = ?", [id])
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

const deletePlayers = (req, res) => {
  database
    .query("delete from players where id = ?", [req.params.id])
    .then(res.status(204))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const addPlayers = (req, res) => {
  // Extract the item data from the request body

  database
    .query(
      `insert into players(lastname, firstname, birthday, country, city, job, team_id ) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        req.body.lastname,
        req.body.firstname,
        req.body.birthday,
        req.body.country,
        req.body.city,
        req.body.job,
        req.body.team_id,
      ]
    )
    .then((result) => {
      if (result) {
        res.status(201).json({ result });
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
  getPlayers,
  getPlayerById,
  addPlayers,
  deletePlayers,
};
