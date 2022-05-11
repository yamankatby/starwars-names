const expect = require("chai").expect;
const starWars = require("./index");

describe("starwars-names", () => {
  describe("all", () => {
    it("should be an array of strings", () => {
      expect(starWars.all).to.satisfy((array) =>
        array.every((item) => typeof item === "string")
      );
    });
    it("should include `Yaman KATBY`", () => {
      expect(starWars.all).to.include("Yaman KATBY");
    });
  });

  describe("random", () => {
    it("should return a random item from the startWars.all", () => {
      expect(starWars.all).to.include(starWars.random());
    });
  });
});
