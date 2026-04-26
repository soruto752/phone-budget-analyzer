function savings() {
  let savingaccount = 45000; //as in naira
  let bonusofamountmorethan40k = 8; //as in percentage
  let bonusofamountlessthan40K = 4; // as in percentage

  let bonus = (savingaccount * bonusofamountmorethan40k) / 100;
  let balance = bonus + savingaccount;

  let bonusinterest;
  let mycomment;

  if (savingaccount >= 40000) {
    bonusinterest = savingaccount * bonusofamountmorethan40k;
    mycomment: "Highbonus";
  } else {
    if (savingaccount < 40000)
      bonusinterest = savingaccount * bonusofamountlessthan40K;
    Mycomment: "normalbonus";
  }

  saves = `the bonus is${bonus} and the balance is ${balance}  you have recieved a high bonus`;
  return saves;
}

let value = savings();
console.log(value);
