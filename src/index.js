var starWarsNames = require("./startwars-names.json");

module.exports = {
  all: starWarsNames,
  random: () => starWarsNames[Math.round(Math.random() * starWarsNames.length)],
};
