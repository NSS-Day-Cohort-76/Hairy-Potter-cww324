import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js";
import { PotteryList } from "./PotteryList.js";



// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 4, 8)
let platter = makePottery("Platter", 5, 7);
let vase = makePottery("Vase", 11, 9);
let bowl = makePottery("Bowl", 2, 6);
let pitcher = makePottery("Pitcher", 8, 10);

console.log("before firing!")
console.log(mug)
console.log(platter)
console.log(vase)
console.log(bowl)
console.log(pitcher)

//firing the pottery
let firedMug = firePottery(mug, 2300)
let firedPlatter = firePottery(platter, 2650)
let firedVase = firePottery(vase, 2150)
let firedBowl = firePottery(bowl, 2000)
let firedPitcher = firePottery(pitcher, 2200)

console.log("this pottery has been fired!")
console.log(firedMug)
console.log(firedPlatter)
console.log(firedVase)
console.log(firedBowl)
console.log(firedPitcher)

// which ones are gonna be sold??
console.log("Selling some items");
toSellOrNotToSell(firedMug)
toSellOrNotToSell(firedPlatter)
toSellOrNotToSell(firedVase)
toSellOrNotToSell(firedBowl)
toSellOrNotToSell(firedPitcher)
console.log(usePottery());

console.log(firedMug)
console.log(firedPlatter)
console.log(firedVase)
console.log(firedBowl)
console.log(firedPitcher)


// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list
const potteryContainer = document.getElementById("potteryList")
potteryContainer.innerHTML = potteryList()
