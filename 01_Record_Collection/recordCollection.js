// Setup
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  } else if (prop !== "tracks" && value !== "") {
    records[id][prop] = value; // change the value of the prop to the assigned value
  } else if (prop === "tracks" && value !== "") {
    if (!records[id].hasOwnProperty("tracks")) {
      records[id][prop] = []; // create a empty array for tracks and use when the tracks is the prop to hold the tracks
    }
    records[id][prop].push(value); // adds the value to the assigned prop
  }
  return records;
}

console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));
console.log(updateRecords(recordCollection, 5439, "tracks", "UYANG"));
