function exercise1() {
  let amaraAgeBe = 17;
  let tundeAgeBe = 12;

  let diffferenceInAge = amaraAgeBe - tundeAgeBe;
  let totalAge = amaraAgeBe + tundeAgeBe;

  let report = `Difference in age: ${diffferenceInAge} totalAge: ${totalAge}`;
  return report;
}
let value = exercise1();
console.log(value);

function exercise2() {
  let amountoFNotebookBought = 3;
  let amountoFPenBought = 2;
  let costoFNotebook = 450;
  let costoFPens = 120;

  let totalCostoFPen = costoFPens * amountoFPenBought;
  let totalCostoFNotebook = costoFNotebook * amountoFNotebookBought;
  let totalCost = totalCostoFPen + totalCostoFNotebook;

  let totalPrize = `total cost of pen: ${totalCostoFPen} and total cost of book: ${totalCostoFNotebook} so total cost: ${totalCost  }`;
  return totalPrize;
}
let worth = exercise2();
console.log(worth); 




