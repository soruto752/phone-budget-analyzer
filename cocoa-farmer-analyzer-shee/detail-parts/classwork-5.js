function quiz1() {
  //last year
  let yamperhectar = 4.5;
  let lastyearainfall = 850;
  //this year
  let thisyearrainfall = 620; //mm
  let yielddecreasepercentage = 1.5;
  let limitrainfallmm = 800;

  let lessrainfall = limitrainfallmm - thisyearrainfall;
  let lessrainfallmm = lessrainfall / 100;
  let lessrainfallpercentage = lessrainfallmm * yielddecreasepercentage;
  let decreaseyield = yamperhectar * (lessrainfallpercentage / 100);
  let yieldthisyear = yamperhectar - decreaseyield;

  yieldperyear = `the produce ${yieldthisyear} and the rainfall is poor`;
  return yieldperyear;
}

let value = quiz1();
console.log(value);

function quiz2() {
  let marketacost = 380; //naira
  let marketbcost = 420; //naira
  let marketbtransportfee = 45000; //naira
  let harvestedtomatoes = 1200; //kg

  let marketarevenue = harvestedtomatoes * marketacost;
  let marketbrevenue = harvestedtomatoes * marketbcost - marketbtransportfee;
  chosen = `market b is better and the extra profit is  ${marketbrevenue} `;
  return chosen;
}

let worth = quiz2();
console.log(worth);
