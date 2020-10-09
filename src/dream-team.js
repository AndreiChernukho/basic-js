const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
  let names = [];
  for (let m of members) {
    if (typeof m === "string" ) {
      let mLetter = m.trim().split("");
      names.push(mLetter[0]);  
    }
  } 
  return names.join("").toUpperCase().split("").sort().join("");
} else {
    return false;
}  
}