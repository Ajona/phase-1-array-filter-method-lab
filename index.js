// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
  }
  
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  // Example usage:
  const drivers = [
    { name: "Bobby", hometown: "Pittsburgh" },
    { name: "Sammy", hometown: "New York" },
    { name: "Sally", hometown: "Cleveland" },
    { name: "Annette", hometown: "Los Angeles" },
    { name: "Sarah", hometown: "Denver" },
    { name: "bobby", hometown: "Tampa" }
  ];
  
  console.log(findMatching(["Bobby", "Sammy", "Sally", "Annette"], "bobby")); // ["Bobby"]
  console.log(fuzzyMatch(["Bobby", "Sammy", "Sally", "Annette"], "Sa")); // ["Sammy", "Sally"]
  console.log(matchName(drivers, "Bobby")); // [{ name: "Bobby", hometown: "Pittsburgh" }]
  