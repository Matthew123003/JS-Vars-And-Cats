//create your variables below and console.log() your outputs
//your most common - let
// for constants that cant be changed - constants
// global variables = var


// The Fortune Teller 
let numberOfChildren = 1;
let partnerName = "Ashley";
let geographicLocation = "Neptune";
let jobTitle = "Software Engineer";
console.log(`You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren}`)


// The Age Calculator
let bDay = 1985;
let today = 2023;
let age = today - bDay
console.log("I will be either " + age + " or " + (age + 1) + " in " + today)






// The lifetime supply Calculator
let currentAge = 38
let maxAge = 50
let amountPerDay = 2
let totalNeeded = (amountPerDay * 365) * (maxAge - currentAge)
console.log("You will need " + totalNeeded + " to last you until the ripe old age of " + maxAge) 





// The Geometrizer
let radius = 3
let circumference = 2 * Math.PI * radius
let area = Math.PI * radius ** 2
console.log("The circumference is " + circumference)





// The temperature converter
let celsius = 25
let fahrenheit = celsius * 9/5 + 32
console.log(celsius + "°C is " + fahrenheit + "°F")

