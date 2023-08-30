const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const ulPointer = document.querySelector("ul");

showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  arr.forEach((each) => {
    ulPointer.innerHTML += `<li>${each.type}</li>`;
    ulPointer.innerHTML += `<li>${each.fuel ? each.fuel : "Kan variere"}</li>`;
    ulPointer.innerHTML += `<li>${each.passengers}</li>`;
    ulPointer.innerHTML += `<li>${each.stops ? each.stops : "Ingen stop"}</li>`;
    ulPointer.innerHTML += `<li>${each.ownedBy ? each.ownedBy : "Offentlig"}</li>`;
    ulPointer.innerHTML += `<li>${each.isElectric ? "Er elektrisk" : "Ikke el"}</li>`;
    ulPointer.innerHTML += `<li>${each.isTandem ? "Er tandem" : "Ikke tandem"}</li>`;
  });
}

function isEl(vehicle) {
  ulPointer.innerHTML = "";
  if (vehicle.isElectric === true) {
    return true;
  } else {
    return false;
  }
}

function isTwo(vehicle) {
  ulPointer.innerHTML = "";

  if (vehicle.passengers >= 2) {
    return true;
  } else {
    return false;
  }
}

function isJonas(vehicle) {
  ulPointer.innerHTML = "";

  if (vehicle.ownedBy == "Jonas" && vehicle.isElectric === true) {
    return true;
  } else {
    return false;
  }
}

function moreRug(vehicle) {
  ulPointer.innerHTML = "";

  if (vehicle.fuel == "Rugbrød" && vehicle.passengers >= 2) {
    return true;
  } else {
    return false;
  }
}

document.querySelector(".el").addEventListener("click", () => {
  const eldreven = vehicles.filter(isEl);

  showTheseVehicles(eldreven);
});
document.querySelector(".twoOrMore").addEventListener("click", () => {
  const twoSeater = vehicles.filter(isTwo);

  showTheseVehicles(twoSeater);
});
document.querySelector(".elJonas").addEventListener("click", () => {
  const jonasEL = vehicles.filter(isJonas);

  showTheseVehicles(jonasEL);
});
document.querySelector(".rug").addEventListener("click", () => {
  const rugger = vehicles.filter(moreRug);

  showTheseVehicles(rugger);
});
document.querySelector(".all").addEventListener("click", () => {
  ulPointer.innerHTML = "";
  showTheseVehicles(vehicles);
});
