function exercise() {
  let monthElectricity = 185;
  let first100UnitsCost = 12; //as in naira
  let unitsMoreThan100 = 18; //as in naira

  let firstUnits = first100UnitsCost * 100;
  let moreThanUnits = unitsMoreThan100 * 85;
  let totalElectricitySPENT = firstUnits + moreThanUnits;

  let electricitycomment = `the total bill is ${totalElectricitySPENT} it is a normal bill`;
  return electricitycomment;
}
let worth = exercise();
console.log(worth);
