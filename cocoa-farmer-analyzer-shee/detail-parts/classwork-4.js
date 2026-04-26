function question1() {
  let ferterlizerNeeded = 450; //kg
  let ferterlizerPricePerKg = 1200; //naira
  let kgAmountForDiscount = 400; //kg
  let discountNumber = 0.12; //percentage

  let originalAmount = ferterlizerNeeded * ferterlizerPricePerKg;
  let discountAmount1 = originalAmount * discountNumber;
  let finalAmount = originalAmount - discountAmount1;

  discount = `the dicount is ${discountAmount1} the final amount is ${finalAmount} `;

  return discount;
}
let worth = question1();
console.log(worth);

function question2() {
  let amountofchickens = 280; //chickens
  let feedperday = 120; //grams
  let inonebag = 50; //kg of seeds
  let costofbag = 18500; //naira
  let numofdays = 30; // days

  let feedsperdayingram = amountofchickens * feedperday;
  let feedsperdayinkg = feedsperdayingram / 1000;
  let numberoffeedsin30days = feedsperdayinkg * numofdays;
  let fullbagin30d = numberoffeedsin30days / inonebag;
  let totalbagcostin30d = fullbagin30d * costofbag;

  discount = `  feed in kg is ${feedsperdayinkg}   bags needed in 30ds is ${fullbagin30d}  total cots is ${totalbagcostin30d} there is no warning`;

  return discount;
}
let value = question2();
console.log(value);
