"use strict";

// JavaScript Fundamentals — Part 2 :-

// 1. Functions :

// Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.
// Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console.

// function describeCountry(country, population, capaitalcity) {
//   const description = `${country} has ${population}  million people and its capital city is ${capaitalcity}`;
//   return description;
// }

// const country1 = describeCountry("india", 1.4, "dehli");
// const country2 = describeCountry("uk", 0.6, "london");
// const country3 = describeCountry("usa", 0.6, "WashigtonDC");

// console.log(country1);
// console.log(country2);
// console.log(country3);

// 2. Function Declarations vs. Expressions :

// The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.
// To calculate the percentage, divide the given population value by 7900 and then multiply by 100.
// Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.
// Create a function expression which does the exact same thing, called percentageOfWolrd2, and also call it with 3 country populations (can be the same populations).

// function declaration :)

// function percentageOfWorld1(population, country) {
//   console.log(`${population} million of the population ${country}.`);
//   const percentage = console.log(
//     `the percentage of world population this ${country} has ${(population / 7900) * 100}`,
//   );

//   return percentage;
// }

// const percentage1 = percentageOfWorld1(1441, "china");
// const percentage2 = percentageOfWorld1(678, "usa");
// const percentage3 = percentageOfWorld1(329, "uk");

// console.log(percentage1);
// console.log(percentage2);
// console.log(percentage3);

// function expression :)

// const percentageOfWorld2 = function (population, country) {
//   console.log(`${population} million of the  population ${country}.`);
//   const percentage =
//     `the percentage of world population of ${country} has ${(population / 7900) * 100}`;

//   return percentage;
// };

// const percentage4 = percentageOfWorld2(1441, "china");
// const percentage5 = percentageOfWorld2(678, "usa");
// const percentage6 = percentageOfWorld2(329, "uk");

// console.log(percentage4);
// console.log(percentage5);
// console.log(percentage6);

// 3. Arrow Functions :

// Recreate the last assignment, but this time create an arrow function called percentageOfWorld3.

// const percentageOfWorld3 = (population, country) => {
//   console.log(`The population of the ${country} is ${population} million .`);
//   const percentage = `The percentage of world population of ${country} has ${(population / 7900) * 100}`;

//   return percentage;
// };

// const percentage7 = percentageOfWorld3(1441, "china");
// console.log(percentage7);

//  4.Functions Calling Other Functions :

// Create a function called describePopulation. Use the function type you like the most. This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.
// To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.
// Call describePopulation with data for 3 countries of your choice.

function percentageOfWolrd1 (populationcal){
    return (populationcal/7900)*100;
}

function describePopulation (population,country){

    const per = percentageOfWolrd1(population);
    const description =`${country} has ${population} million people,which is about ${per} of the world.`
    return description ;

}

console.log(describePopulation(130,"usa"));
console.log(describePopulation(460,"uk"));
console.log(describePopulation(1430,"china"));

// 5.Introduction to Arrays :

// Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called populations.
// Log to the console whether the array has 4 elements or not (true or false).
// Create an array called percentages containing the percentages of the world population for these 4 population values. Use the function percentageOfWorld1 that you created earlier to compute the 4 percentage values.

