// Create Dino Constructor
function Dino(species, weight, height, diet, where, when, fact, image) {
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = fact;
  this.image = image;
}

// Create Dino Objects
let triceratops = new Dino(
  "Triceratops",
  5897,
  2.9,
  "herbavor",
  "North America",
  "Late Cretaceous",
  "First discovered in 1889 by Othniel Charles Marsh",
  "images/triceratops.png"
);

let tyrannosaurusRex = new Dino(
  "Tyrannosaurus Rex",
  5400,
  3.66,
  "carnivor",
  "North America",
  "Late Cretaceous",
  "The largest known skull measures in at 5 feet long.",
  "images/tyrannosaurus rex.png"
);

let brachiosaurus = new Dino(
  "Brachiosaurus",
  3175,
  9.45,
  "herbavor",
  "North America",
  "Late Jurasic",
  "An asteroid was named 9954 Brachiosaurus in 1991.",
  "images/brachiosaurus.png"
);

let stegosaurus = new Dino(
  "Stegosaurus",
  5262,
  2.01,
  "herbavor",
  "North America, Europe, Asia",
  "Late Jurasic to Early Cretaceous",
  "The Stegosaurus had between 17 and 22 seperate places and flat spines.",
  "images/stegosaurus.png"
);

let elasmosaurus = new Dino(
  "Elasmosaurus",
  7257,
  1.5,
  "carnivor",
  "North America",
  "Late Cretaceous",
  "Elasmosaurus was a marine reptile first discovered in Kansas.",
  "images/elasmosaurus.png"
);

let pteranodon = new Dino(
  "Pteranodon",
  20,
  0.51,
  "carnivor",
  "North America",
  "Late Cretaceous",
  "Actually a flying reptile, the Pteranodon is not a dinosaur.",
  "images/pteranodon.png"
);

let pigeon = new Dino(
  "Pigeon",
  0.23,
  0.13,
  "herbavor",
  "World Wide",
  "Holocene",
  "All birds are living dinosaurs",
  "images/pigeon.png"
);

// want to fetch these datas
// fetch("dino.json")
//  .then((response) => response.json())
//  .then((data) => {
//    let triceratops = new Dino(
//      data.Dinos[0].species,
//      data.Dinos[0].weight,
//      data.Dinos[0].height,
//      data.Dinos[0].diet,
//      data.Dinos[0].where,
//      data.Dinos[0].when,
//      data.Dinos[0].fact
//    );
//  });

// Create Human Object
let human = new Dino();

// Use IIFE to get human data from form
(function () {
  let human = new Dino();
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

fetch("dino.json")
  .then((response) => response.json())
  .then((data) => {
    let triceratops1 = new Dino(
      data.Dinos[0].species,
      data.Dinos[0].weight,
      data.Dinos[0].height,
      data.Dinos[0].diet,
      data.Dinos[0].where,
      data.Dinos[0].when,
      data.Dinos[0].fact,
      "images/triceratops.png"
    );
    let tyrannosaurusRex1 = new Dino(
      data.Dinos[1].species,
      data.Dinos[1].weight,
      data.Dinos[1].height,
      data.Dinos[1].diet,
      data.Dinos[1].where,
      data.Dinos[1].when,
      data.Dinos[1].fact,
      "images/.png"
    );

    console.log(tyrannosaurusRex1);
  });

// Create Dino Compare Method 2 - Weight
// NOTE: translated in KG and meters/centimeters

// Create Dino Compare Method 3 - Diet
// NOTE: translated in KG and meters/centimeters

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen

// On button click, prepare and display infographic
