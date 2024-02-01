const express = require("express");

const router = express.Router();

// router.get("/teams", (req, res) => {
//   let query = "SELECT * FROM team";
//   const values = [];
//   if (req.query.team) {
//     query += "WHERE team_id = ?";
//     values.push(req.query.team);
//   }
//   client
//     .query(query, values)
//     .then((result) => {
//       res.status(200).json(result[0]);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// });

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const teamControllers = require("./controllers/teamControllers");
const playersControllers = require("./controllers/playersControllers");

// // Route to get a list of items
router.get("/team", teamControllers.getTeams);
router.get("/players", playersControllers.getPlayers);
router.post("/players", playersControllers.addPlayers);
router.delete("/players/:id", playersControllers.deletePlayers);
// // Route to get a specific item by ID
router.get("/team/:id", teamControllers.getTeamById);
router.get("/players/:id", playersControllers.getPlayerById);

// Route to add a new item
// router.post("/items", itemControllers.add);

/* ************************************************************************* */

module.exports = router;
