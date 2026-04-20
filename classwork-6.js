function problem() {
  let farmlandAmout = 8; //hectars
  let cocoaPerHectar = 1.2; //tons
  let expectedRainfall = 720; //mm
  let idealRainfall = 900; //mm
  let yieldpercentagedecrease = 2;
  //part 2
  let marketcost = 1850000;
  //part 3
  let ferterlizerprice = 185000;
  discountamount = 0.15;


  let differenceInRainfull = idealRainfall - expectedRainfall;
  let amoutof50 = differenceInRainfull / 50;
  let yielddecrease = (amoutof50 * yieldpercentagedecrease) / 100;
  let yielddecrease2 = cocoaPerHectar * yielddecrease;
  let thisyear1hectar = cocoaPerHectar - yielddecrease2;
  let eighthectar = thisyear1hectar * farmlandAmout;
  // part 2
  let marketmoney = marketcost * eighthectar;
  //part 3
  let feterlizercost =    feterlizerprice * farmlandAmount;
  let amouwithdiscount =  feterlizercost * discountamount;

  hectar = `this years hectar is ${eighthectar.toFixed(2)}  for the second part market money is ${marketmoney}  and the feterlizer costs are ${feterlizercost},${amouwithdiscount} ` ;
  return hectar;
}
let worth = problem();
console.log(worth);
