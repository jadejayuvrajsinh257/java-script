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

// function percentageOfWolrd1 (populationcal){
//     return (populationcal/7900)*100;
// }

// function describePopulation (population,country){

//     const per = percentageOfWolrd1(population);
//     const description =`${country} has ${population} million people,which is about ${per} of the world.`
//     return description ;

// }

// console.log(describePopulation(130,"usa"));
// console.log(describePopulation(460,"uk"));
// console.log(describePopulation(1430,"china"));

// 5.Introduction to Arrays :

// Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called populations.
// Log to the console whether the array has 4 elements or not (true or false).
// Create an array called percentages containing the percentages of the world population for these 4 population values. Use the function percentageOfWorld1 that you created earlier to compute the 4 percentage values.

// const population = [434, 4384, 33, 433];
// console.log(population.length === 4);
// const percentageOfWolrd1 = function (population) {
//   return (population / 7900) * 100;
// };
// console.log(percentageOfWolrd1(population[0]));
// console.log(percentageOfWolrd1(population[1]));
// console.log(percentageOfWolrd1(population[2]));
// console.log(percentageOfWolrd1(population[population.length - 1]));

// const percentages = [
//   percentageOfWolrd1(population[0]),
//   percentageOfWolrd1(population[1]),
//   percentageOfWolrd1(population[2]),
//   percentageOfWolrd1(population[population.length - 1]),
// ];
// console.log(percentages);

// 6.Basic Array Operations (Methods) :

// Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called neighbours.
// At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country, so add it to the end of the neighbours array.
// Unfortunately, after some time the new country is dissolved, so remove it from the end of the array/.
// If the neighbours array does not include the country 'Germany', log to the console: 'Probably not a central european country :D'.
// Change the name of one of your neighbouring countries. To do that, find the index of the country in the neighbours array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.

// const neighbours = ['Norway', 'Sweden', 'Russia'];

// neighbours.push('Utopia');
// console.log(neighbours);

// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes('Germany')) {
//   console.log('Probably not a central European country :D');
// }

// neighbours[neighbours.indexOf('Sweden')] = 'Republic of Sweden;';
// console.log(neighbours);

// 7. ntroduction to Objects :

// Create an object called myCountry for a country of your choice, containing properties country, capital, language, population and neighbours (an array like we used in previous assignments).

// const myCountry = {
//   country: "india",
//   capital: "delhi",
//   language: "hindi",
//   population: 1.4,
//   neighbours: ["pakistan", "nepal", "bagladesh"],
// };

// console.log(myCountry);

// 8. Dot vs. Bracket Notation :

// Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki'.
// Increase the country's population by two million using dot notation, and then decrease it by two million using bracket notation.

// const myCountry = {
//   country: "india",
//   capital: "delhi",
//   language: "hindi",
//   population: 1.4,
//   neighbours: ["pakistan", "nepal", "bagladesh"],
// };

// console.log(
//   `${myCountry.country} has ${myCountry.population} billoion ${myCountry.language}-speaking people,${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`,
// );

// myCountry.population += 2;
// console.log(myCountry.population);

// myCountry.population -= 2;
// console.log(myCountry['population']);

// console.log(myCountry);

// 9. object Methods :

// Add a method called describe to the myCountry object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.
// Call the describe method.
// Add a method called checkIsland to the myCountry object. This method will set a new property on the object, called isIsland. isIsland will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.

// const uv = {
// birthyear : 2005 ,

// calage : function(){

//    this.age = 2026-this.birthyear;
//    return this.age;}

// };

// uv.calage();
// console.log(uv.age);

//  const myCountry = {

//   country: "india",
//   capital: "delhi",
//   language: "hindi",
//   population: 1.4,
//   neighbours: ["pakistan", "nepal", "bagladesh"],

//   describe : function (){
//       return `${this.country} has ${this.population} billoion ${this.language}-speaking people,${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
//   },

//   checkIsland : function (){
//       this.isIsland = `${this.country} is ${this.neighbours.length===0?"a":"not"} island.`
//   }
// };

// console.log(myCountry.describe());

// myCountry.checkIsland();
// console.log(myCountry.isIsland);

//  10. Iteration: The for Loop :

// There are elections in your country! in a small town, there are only 50 voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'.

// for(let i=1;i<=50;i++)
// {
//     console.log(`Voter number ${i} is currently voting`);
// }

//  11. Looping Arrays, Breaking and Continuing :

// Let's bring back the populations array from a previous assignment.
// Use a for loop to compute an array called percentages2 containing the percentages of the world population for the 4 population values. Use the function percentageWOrld1 that you created earlier.
// Confirm that percentages2 contains exactly the same values as the percentages array that we created manually in the previous assignment, and reflect on how much better this solution is.

// const population = [434, 4384, 33, 433];

// const percentageOfWolrd1 = function (population) {
//   return (population / 7900) * 100;
// };

// const percentage2 = [];

// const percentages = [
//   percentageOfWolrd1(population[0]),
//   percentageOfWolrd1(population[1]),
//   percentageOfWolrd1(population[2]),
//   percentageOfWolrd1(population[population.length - 1]),
// ];

// for (let i = 0; i < population.length; i++) {
//   percentage2.push(percentageOfWolrd1(population[i]));
// }

// console.log(percentage2);


//  12.Looping Backwards and Loops in Loops :

// Store this array of arrays into a variable called listOfNeighbours:
// [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
// Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country.
// You will need a loop inside a loop for this. This is actually a bit tricky, so don't worry if it's too difficult for you! But you can still try to figure this out anyway 😉

// const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'],
//   ['Norway', 'Sweden', 'Russia']
// ];

// for (let i = 0; i < listOfNeighbours.length; i++)
//   for (let y = 0; y < listOfNeighbours[i].length; y++)
//     console.log(`Neighbour: ${listOfNeighbours[i][y]}`);


// The while Loop :

// Recreate the challenge from the lecture Looping Arrays, Breaking and Continuing, but this time using a while loop (call the array percentages3).
// Reflect on what solution you like better for this task: the for loop or the while loop?

// const population = [434, 4384, 33, 433];

// const percentageOfWolrd1 = function (population) {
//   return (population / 7900) * 100;
// };

// const percentage3 = [];

// const percentages = [
//   percentageOfWolrd1(population[0]),
//   percentageOfWolrd1(population[1]),
//   percentageOfWolrd1(population[2]),
//   percentageOfWolrd1(population[population.length - 1]),
// ];

//   let i=0;
// while (i < population.length) {
//   percentage3.push(percentageOfWolrd1(population[i]));
//   i++;
// }

// console.log(percentage3);
