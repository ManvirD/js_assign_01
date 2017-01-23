var mealCost = process.argv.length;
Number(process.argv[mealCost]);

var tipPercent = process.argv.length;
Number(process.argv[tipPercent]);

var tipAmount = (tipPercent/100) * mealCost;

var totalOwing = tipAmount + mealCost;

var outPut = `Your meal was\$${mealCost} + a $ {tipPercent} %tip = ${totalOwing}`;

console.log(outPut);