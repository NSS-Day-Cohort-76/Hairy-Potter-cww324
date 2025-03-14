import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";



// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 4, 8)
let platter = makePottery("Platter", 5, 7);
let vase = makePottery("Vase", 3, 9);
let bowl = makePottery("Bowl", 2, 6);
let pitcher = makePottery("Pitcher", 4, 10);

console.log("before firing!")
console.log(mug)
console.log(platter)
console.log(vase)
console.log(bowl)
console.log(pitcher)

let firedMug = firePottery(mug, 2300)
let firedPlatter = firePottery(platter, 2650)
let firedVase = firePottery(vase, 2150)
let firedBowl = firePottery(bowl, 2000)
let firedPitcher = firePottery(pitcher, 2200)

console.log(firedMug)
console.log(firedPlatter)
console.log(firedVase)
console.log(firedBowl)
console.log(firedPitcher)


console.log("hello from main.js yo youy there???");
// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

