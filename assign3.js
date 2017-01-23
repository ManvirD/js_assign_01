var mealCost = 25;
var tipPercent = 15;
var tipAmount = (tipPercent/100) * mealCost;
var totalOwing = tipAmount + mealCost;
var outPut = `Your meal was\$${mealCost} + a $ {tipPercent} %tip = ${totalOwing}`;
console.log(outPut);