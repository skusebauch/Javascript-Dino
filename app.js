// Create Creature Constructor - includes (dinos, and humans later)
function Creature({ species, weight, height, diet, where, when, fact, image }) {
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = fact;
  this.image = image;
}

// retrieve dino objects from json and
// Create Dino Objects
let dinosaurs = [];
const getDinos = fetch("dino.json")
  .then((response) => response.json())
  .then((data) => {
    dinosaurs = data.Dinos.map((dino) => new Creature(dino));
  });

//// Create Human Object
let human = new Creature({});

//// Use IIFE to get human data from form
(function () {
  let human = new Creature({});
  human.name = document.querySelector("#name").value;
  human.species = "homosapiens";
  human.weight = document.querySelector("#weight").value;
  human.height =
    document.querySelector("#meter").value +
    document.querySelector("#centimeter").value;
  human.diet = document.querySelector("#diet").value;
  human.where = "World Wide";
  human.when = "current Time";
  human.fact = "Humans needs to learn code";
  human.image = "human.png";
})();

// Create Dino Compare Method 1 - Height
// NOTE: translated in KG and meters/centimeters
//function compareHeight(objectDino, objectHuman) {}

// Create Dino Compare Method 2 - Weight
// NOTE: translated in KG and meters/centimeters

// Create Dino Compare Method 3 - Diet
// NOTE: translated in KG and meters/centimeters

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen

// On button click, prepare and display infographic
