const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const harrow = require("./Harrow.json");
const heathrow = require("./Heathrow.json");
const stratford = require("./Stratford.json");
const towns = { harrow, heathrow, stratford };

app.get("/:town/:section", (req, res) => {
  console.log("hello from get");
  const town = req.params.town;
  const section = req.params.section;
  res.send(towns[town][section]);
});

const port = 9999;

app.listen(port, () => console.log(`Listening on port ${port}`));
