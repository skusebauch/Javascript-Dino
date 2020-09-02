// TODO grap everything into dinograph - pattern

// Create Creature Constructor - includes (dinos, and humans later)
function Creature({
  species,
  weight,
  height,
  diet,
  where,
  when,
  facts,
  image,
}) {
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.facts = facts;
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
  human.facts = [
    "Humans needs to learn code",
    "Humans needs to drink a lot of coffee",
    "Grap some healthy food",
  ];
  human.image = "human.png";
})(human);

// Create Dino Compare Method 1 - Height
// NOTE: translated in KG and meters/centimeters

const compareHeight = () => {
  if (human.height < dino.height) {
    return `The ${dino.species} weights ${
      dino.height - human.height
    } kg more than you!`;
  } else if (human.height === dino.height) {
    return `${human.name} has the same height as ${dino.species}`;
  } else {
    return `${human.name} has ${human.weigth - dino.height} more kg!`;
  }
};

// Create Dino Compare Method 2 - weight
// NOTE: translated in KG and meters/centimeters

const compareWeight = () => {
  if (human.weight < dino.weight) {
    return `The ${dino.species} weighs ${
      dino.weight - human.weight
    } kg more than you!`;
  } else if (human.weight === dino.weight) {
    return `${human.name} has the same weight as ${dino.species}`;
  } else {
    return `${human.name} has ${human.weigth - dino.weight} more kg`;
  }
};

// Create Dino Compare Method 3 - Diet
// NOTE: translated in KG and meters/centimeters
const compareDiet = () => {
  if (human.diet < dino.diet) {
    return `The ${dino.species} weighs ${
      dino.diet - human.diet
    } kg more than you!`;
  } else if (human.diet === dino.diet) {
    return `${human.name} has the same diet as ${dino.species}`;
  } else {
    return `${human.name} has ${human.diet - dino.diet} more kg`;
  }
};

// Generate Tiles for each Dino in Array
const createTiles = () => {
  dinosaurs.forEach((dino) => {
    // create markup
    const newDiv = document.createElement("div");
    const newHeader = document.createElement("h3");
    const newImage = document.createElement("img");
    const newFact = document.createElement("p");

    newDiv.className = "grid-item";
    grid.appendChild(newDiv);
    newDiv.appendChild(newHeader);
    newDiv.appendChild(newImage);
    newDiv.appendChild(newFact);

    newHeader.innerHTML = dino.species;
    newImage.setAttribute("src", dino.image);
    newFact.innerHTML = dino.facts[Math.floor(Math.random() * items.length)];
  });
};
// Add tiles to DOM

// Remove form from screen
const toggleForm = () => {
  const dinoForm = document.getElementById("dino-compare");
  dinoForm.classList.add("hide");
};
// On button click, prepare and display infographic
const showGrid = () => {
  const btn = document.getElementById("btn");
  btn.addEventListener("click", (event) => {
    toggleForm();
    createDinoGraph();
  });
};
showGrid();
