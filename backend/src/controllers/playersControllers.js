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

module.exports = {
  getPlayers,
  getPlayerById,
};
