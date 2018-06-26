
const NOW = Date.parse(new Date());
const END = Date.parse(new Date(2019, 8, 30));
const MAX_DAYS = 730;
const SECONDS = 86400000;
let getInterval = function() {
  return Math.floor((END - NOW) / SECONDS);
}

let getPrice = function(dateBought) {
  let date = new Date(dateBought);
  let purchase = {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
    price: null,
    expiry: null,
    equivalent: null
  };
  let price = null;
  if (purchase.year === 2016 && purchase.month === 11) {
    purchase.price = 275; //2016.12
  } else if (purchase.year === 2017 && (purchase.month > 2 && purchase.month < 5)) {
    purchase.price = 269; //2017.04-05
  } else if (purchase.year === 2017 && purchase.month > 4) {
    purchase.price = 249; //2017.06-09
  } else {
    purchase.price = 299; //2016.06-11 + 2017.01-03 
  }    
  return purchase;
}

let getVarranty = function(purchaseObject) {
  const SECONDS = 86400000;
  let purchase = { ...purchaseObject };
  let start = Date.parse(purchase.year, purchase.month, purchase.day);
  let now = Date.parse(new Date());
  purchase.expiry = new Date(purchase.year + 2, purchase.month, purchase.day);
  let end = Date.parse(purchase.year + 2, purchase.month, purchase.day);
  let duration = (end - start) / SECONDS;
  let remaining = duration - ((now - start) / SECONDS);
  let daily = purchase.price / duration;
  purchase.equivalent = daily * remaining;
  console.log(duration);
  console.log(remaining);
  console.log(daily);
  return purchase;
}

let getEquivalent

let x = new Date(2016, 5, 30);
let a = getPrice(Date.parse(x));
let b = getVarranty(a);
console.log(b);

// for (let i = 0; i < 24; i++) {
//   console.log(getPrice(new Date(2016, i)));
// }
