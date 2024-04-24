///////////////////////////////////@\\\\\\\\\\\\\\\\\\\((((({START})))))\\\\\\\\\\\\\\\\\@///////////////////////////////////////////////////// 
QUESTION: 1;
console.log("\t\t\t\t\t\t\t Question 1");
console.log("\n");
// installation and simple hello world                         
console.log("hello world");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
QUESTION: 2;
console.log("\t\t\t\t\t\t\t Question 2");
console.log("\n");
// 2. Personal Message:
//Store a person’s name in a variable, and print a message to that person. Your message should 
// be simple, such as, “Hello Eric, would you like to learn some Python today?”
let personName = "Eric";
console.log(`Hello ${personName}, would you like to learn some python today?`);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
QUESTION: 3;
console.log("\t\t\t\t\t\t\t Question 3");
console.log("\n");
//3. Name Cases: 
//Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, 
//and titlecase.
let personName1 = ("Mohummad Anees");
console.log("lowercase:", personName1.toLowerCase());
console.log("uppercase:", personName1.toUpperCase());
console.log("titlecase", personName1.charAt(0).toUpperCase() + personName1.slice(1).toLowerCase());
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
QUESTION: 4;
console.log("\t\t\t\t\t\t\t Question 4");
console.log("\n");
//4. Famous Quote: 
// Find a quote from a famous person you admire. Print the quote and the name of its author. 
// Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
let quote = "A person who never made a mistake never tried anything new.";
let author = "Albert Einstein";
console.log(`${author} once said , "${quote}"`);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
QUESTION: 5;
console.log("\t\t\t\t\t\t\t Question 5");
console.log("\n");
// 5. Famous Quote 2: 
// Repeat Exercise 4, but this time store the famous person’s name in a variable called 
// famous_person. Then compose your message and store it in a new variable called message. Print your 
// message                          
let famous_person = "Albert Einstein";
let Qoute = "A person who never made a mistake never tried anything new.";
let message = `${famous_person} once said ,"${Qoute}"`;
console.log(message);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Question: 6;
console.log("\t\t\t\t\t\t\t Question 6");
console.log("\n");
//  6. Stripping Names: 
//  Store a person’s name, and include some whitespace characters at the beginning and end of 
//  the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name 
//  once, so the whitespace around the name is displayed. Then print the name after striping the white 
//  spaces
let personName01 = "\t Anees Hanif \n";
console.log("Orginal:", personName01);
console.log("Stripted:", personName01.trim());
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Question: 78;
console.log("\t\t\t\t\t\t\t Question 7 and 8");
console.log("\n");
//  7. Number Eight: 
//  Write addition, subtraction, multiplication, and division operations that each result in the 
//  number 8. Be sure to enclose your operations in print statements to see the results.
//8. You should create four lines that look like this:
//_____________________________________________
//console.log(5 + 3)
//_____________________________________________
//Your output should simply be four lines with the number 8 appearing once on each line.
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
QUESTION: 9;
console.log("\t\t\t\t\t\t\t Question 9");
console.log("\n");
//9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let favoriteNumber = 13;
console.log(`My favorite number is ${favoriteNumber}.`);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Question: 10;
console.log("\t\t\t\t\t\t\t Question 10");
console.log("\n");
//10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write
//because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence
//describing what the program does.
// Author[Anees Hanif];
// Date[Monday,Febrary.26.2024]
// in the line I declare a varaible in name favoriteNumber2 and assign the value.this program print my favourite Number
let favoriteNumber2 = 7;
//reveling my favourite number in message format
console.log(`My favorite number is ${favoriteNumber2}.`);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Question: 11;
console.log("\t\t\t\t\t\t\t Question 11");
console.log("\n");
//11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let names = ["Anees", "Habib", "Faik", "Uzair"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Question: 12;
console.log("\t\t\t\t\t\t\t Question 12");
console.log("\n");
//12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
//should be the same, but each message should be personalized with the person’s name.
let names1 = ["Anees", "Habib", "Faik", "Uzair"];
let message3 = "Do you like to play football";
console.log(names1[0] + " " + message3);
console.log(names1[1] + " " + message3);
console.log(names1[2] + " " + message3);
console.log(names1[3] + " " + message3);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Question: 13;
console.log("\t\t\t\t\t\t\t Question 13");
console.log("\n");
//13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
//to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transportation = ["Honda", "BMW", "Ferrari", "Lamborghini"];
transportation.map((items) => console.log(`I would like to own a ${items}`));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Question: 14;
console.log("\t\t\t\t\t\t\t Question 14");
console.log("\n");
//14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
//invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guestArr = ["Anees", "Habib", "Faik"];
guestArr.map((items) => console.log(`Dear ${items}, You are invited to the dinner`));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Question: 15;
console.log("\t\t\t\t\t\t\t Question 15");
console.log("\n");
// 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still
// in your list.
let guests1 = ["Uncle Sami", "Anees", "Habib"];
console.log("Hi", guests1[0], " it is Sunday today. I am inviting you to have today's supper with us. We all be glad to see you. And don't think of making any excuse you have to come on any condition.");
console.log("\nHi", guests1[1], " it is Sunday today. I am inviting you to have today's supper with us. I will be glad to see you. And don't think of making any excuse you have to come on any condition.");
console.log("\nHi", guests1[2], " it is Sunday today. I am inviting you to have today's supper with us. I will be glad to see you. And don't think of making any excuse you have to come on any condition.");
console.log(`${guests1[2]} is not coming \n Removing ${guests1[2]} from the list `);
guests1.pop();
guests1.push("Abdul Rahman");
console.log("Hi", guests1[0], "! You know that 'Habib' is not coming.But, you are still invited so be one time in reaching the venue. I'm pretty sure that we are going to have a very exciting get together this.");
console.log("\nHi", guests1[1], " ! You know that 'Habib' is not coming.But, you are still invited so be one time in reaching the venue. I'm pretty sure that we are going to have a very exciting get together this time");
console.log("\nHi", guests1[2], "! You know that 'Habib' is not coming.But, you are still invited so be one time in reaching the venue. I'm pretty sure that we are going to have a very exciting get together this time ");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
QUESTION: 16;
console.log("\t\t\t\t\t\t\t Question 16");
console.log("\n");
// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
let guests2 = ["Uncle Sami", "Anees", "Habib"];
console.log("Hi", guests2[0], " it is Sunday today. I am inviting you to have today's supper with us. We all be glad to see you. And don't think of making any excuse you have to come on any condition.");
console.log("\nHi", guests2[1], " it is Sunday today. I am inviting you to have today's supper with us. I will be glad to see you. And don't think of making any excuse you have to come on any condition.");
console.log("\nHi", guests2[2], " it is Sunday today. I am inviting you to have today's supper with us. I will be glad to see you. And don't think of making any excuse you have to come on any condition.");
console.log(`\n${guests2[2]} is not coming \n Removing ${guests2[2]} from the list\n`);
guests2.pop();
guests2.push("Abdul Rahman");
console.log("Hi", guests2[0], "! You know that 'Habib' is not coming.But, you are still invited so be one time in reaching the venue. I'm pretty sure that we are going to have a very exciting get together this.");
console.log("\nHi", guests2[1], " ! You know that 'Habib' is not coming.But, you are still invited so be one time in reaching the venue. I'm pretty sure that we are going to have a very exciting get together this time");
console.log("\nHi", guests2[2], "! You know that 'Habib' is not coming.But, you are still invited so be one time in reaching the venue. I'm pretty sure that we are going to have a very exciting get together this time ");
console.log("Hey Everyone! I just found a big dinner table, This means we are going to have larger space!");
guests2.splice(0, 0, "Bro Habib");
guests2.splice(2, 0, "Ahmed");
guests2.push("Joseph");
console.log("\nHello", guests2[0], "! Hope you are well there! As you know I got a bigger table, so, you are also invited don't forget to reach there on time, see you there!");
console.log("\nHi", guests2[1], "! Once again messaging you! This time I just wanna inform you that as you probably read the text I send you that I got a bigger table, so, 3 suprise guests are joining us. See you there! ");
console.log("\nHi", guests2[2], "! Hope you are well there! As you know I got a bigger table, so, you are also invited don't forget to reach there on time, see you there! ");
console.log("\nHi", guests2[3], "! Once again messaging you! This time I just wanna inform you that as you probably read the text I send you that I got a bigger table, so, 3 suprise guests are joining us. See you there!");
console.log("\nHi", guests2[4], "! Once again messaging you! This time I just wanna inform you that as you probably read the text I send you that I got a bigger table, so, 3 suprise guests are joining us. See you there!");
console.log("\nHi", guests2[5], "! Hope you are well there! As you know I got a bigger table, so, you are also invited don't forget to reach there on time, see you there! ");
console.log("\n");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Question: 17;
console.log("\t\t\t\t\t\t\t Question 17");
console.log("\n");
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.
let guests3 = ["Uncle Sami", "Anees", "Habib"];
console.log("Hi", guests3[0], " it is Sunday today. I am inviting you to have today's supper with us. We all be glad to see you. And don't think of making any excuse you have to come on any condition.");
console.log("\nHi", guests3[1], " it is Sunday today. I am inviting you to have today's supper with us. I will be glad to see you. And don't think of making any excuse you have to come on any condition.");
console.log("\nHi", guests3[2], " it is Sunday today. I am inviting you to have today's supper with us. I will be glad to see you. And don't think of making any excuse you have to come on any condition.");
console.log(`\n${guests3[2]} is not coming \n Removing ${guests3[2]} from the list\n`);
guests3.pop();
guests3.push("Abdul Rahman");
console.log("Hi", guests3[0], "! You know that 'Habib' is not coming.But, you are still invited so be one time in reaching the venue. I'm pretty sure that we are going to have a very exciting get together this.");
console.log("\nHi", guests3[1], " ! You know that 'Habib' is not coming.But, you are still invited so be one time in reaching the venue. I'm pretty sure that we are going to have a very exciting get together this time");
console.log("\nHi", guests3[2], "! You know that 'Habib' is not coming.But, you are still invited so be one time in reaching the venue. I'm pretty sure that we are going to have a very exciting get together this time ");
console.log("Hey Everyone! I just found a big dinner table, This means we are going to have larger space!");
guests3.splice(0, 0, "Bro Habib");
guests3.splice(2, 0, "Ahmed");
guests3.push("Joseph");
console.log("\nHello", guests3[0], "! Hope you are well there! As you know I got a bigger table, so, you are also invited don't forget to reach there on time, see you there!");
console.log("\nHi", guests3[1], "! Once again messaging you! This time I just wanna inform you that as you probably read the text I send you that I got a bigger table, so, 3 suprise guests are joining us. See you there! ");
console.log("\nHi", guests3[2], "! Hope you are well there! As you know I got a bigger table, so, you are also invited don't forget to reach there on time, see you there! ");
console.log("\nHi", guests3[3], "! Once again messaging you! This time I just wanna inform you that as you probably read the text I send you that I got a bigger table, so, 3 suprise guests are joining us. See you there!");
console.log("\nHi", guests3[4], "! Once again messaging you! This time I just wanna inform you that as you probably read the text I send you that I got a bigger table, so, 3 suprise guests are joining us. See you there!");
console.log("\nHi", guests3[5], "! Hope you are well there! As you know I got a bigger table, so, you are also invited don't forget to reach there on time, see you there! ");
console.log("Hey Everyone! Sorry to say that our dinner table won't be arriving on time today. So, I can host only two people!");
let removedOnes = guests3.pop();
console.log(`\n \t Hey!${removedOnes}! This is to inform you sadly, that unfortunately our dinner table won't be arriving on time so, I can only host 2 Peoples, so, I am sorry to say that I won't be able to host you. But this doesn't matter next week inshallah we will be meeting! `);
removedOnes = guests3.pop();
console.log(`\n \t Hey!${removedOnes}! This is to inform you sadly, that unfortunately our dinner table won't be arriving on time so, I can only host 2 Peoples, so, I am sorry to say that I won't be able to host you. But this doesn't matter next week inshallah we will be meeting! `);
removedOnes = guests3.pop();
console.log(`\n \t Hey!${removedOnes}! This is to inform you sadly, that unfortunately our dinner table won't be arriving on time so, I can only host 2 Peoples, so, I am sorry to say that I won't be able to host you. But this doesn't matter next week inshallah we will be meeting! `);
removedOnes = guests3.pop();
console.log(`\n \t Hey!${removedOnes}! This is to inform you sadly, that unfortunately our dinner table won't be arriving on time so, I can only host 2 Peoples, so, I am sorry to say that I won't be able to host you. But this doesn't matter next week inshallah we will be meeting! `);
console.log(`\nHello! ${guests3[0]} You are still invited. So, be on time. See you there!`);
console.log(`\nHello! ${guests3[0]} You are still invited. So, be on time. See you there!\n`);
guests3.pop();
guests3.pop();
console.log(guests3);
console.log("\n");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Question: 18;
console.log("\t\t\t\t\t\t\t Question 18");
console.log("\n");
// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its
// order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let placeToVisit = ["Tokyo", "Pakistan", "America", "China", "Japan"];
console.log("orginal order:", placeToVisit);
console.log("Alaphabatical order:", [...placeToVisit].sort());
console.log("orginal order after after sorting:", placeToVisit);
console.log(" Reverse Alaphabatical order:", [...placeToVisit].sort().reverse());
console.log("orginal order after reverse sorting:", placeToVisit);
placeToVisit.reverse();
console.log("Reversed order:", placeToVisit);
placeToVisit.reverse();
console.log("Back to orginal  order:", placeToVisit);
placeToVisit.sort();
console.log("Sorted in alphabatical order:", placeToVisit);
placeToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabatical order:", placeToVisit);
console.log("\n");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
QUESTION: 19;
console.log("\t\t\t\t\t\t\t Question 19");
console.log("\n");
// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner.
let guests = ["Uncle Sami", "Anees", "Habib"];
console.log("Hi", guests[0], " it is Sunday today. I am inviting you to have today's supper with us. We all be glad to see you. And don't think of making any excuse you have to come on any condition.");
console.log("\nHi", guests[1], " it is Sunday today. I am inviting you to have today's supper with us. I will be glad to see you. And don't think of making any excuse you have to come on any condition.");
console.log("\nHi", guests[2], " it is Sunday today. I am inviting you to have today's supper with us. I will be glad to see you. And don't think of making any excuse you have to come on any condition.");
// printing the number of guests
console.log("3 guests are invited");
console.log("\n");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
QUESTION: 20;
console.log("\t\t\t\t\t\t\t Question 20");
console.log("\n");
// 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
// else you’d like. Write a program that creates a list containing these items.
let countries = ["Pakistan", "Saudi Arabia", "UAE", "USA"];
console.log("List of countries:");
countries.forEach(country => console.log(country));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
QUESTION: 21;
console.log("\t\t\t\t\t\t\t Question 21");
console.log("\n");
//21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let person01 = {
    name: "Mohummad Anees",
    fname: "Mohummad Hanif",
    age: 20
};
console.log(person01);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
QUESTION: 22;
console.log("\t\t\t\t\t\t\t Question 22");
console.log("\n");
// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
// to produce an index error. Make sure you correct the error before closing the program.
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//console.log(days{7});
console.log(days[6]);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
QUESTION: 23;
console.log("\t\t\t\t\t\t\t Question 23");
console.log("\n");
// 23. Conditional Tests: Write a series of conditional tests. Print a statement
// describing each test and your prediction for the results of each test. Your code
// should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// Test 1
let car1 = 'subaru';
console.log("Is car1 == 'subaru'? I predict True.");
console.log(car1 == 'subaru'); // True
// Test 2
let age2 = 20;
console.log("Is age >= 18? I predict True.");
console.log(age2 >= 18); // True
// Test 3: 
let temperature = -5;
console.log("Is temperature < 0? I predict True.");
console.log(temperature < 0); // True
// Test 4
let dayOfWeek = 'Saturday';
console.log("Is dayOfWeek == 'Saturday'? I predict True.");
console.log(dayOfWeek == 'Saturday'); // True
// Test 5
let isLoggedIn = true;
console.log("Is isLoggedIn? I predict True.");
console.log(isLoggedIn); // True
// Test 6
let fruit = 'banana';
console.log("Is fruit == 'apple'? I predict False.");
console.log(fruit == 'apple'); // False
// Test 7
let itemCount = 8;
console.log("Is itemCount > 10? I predict False.");
console.log(itemCount > 10); // False
// Test 8
let skyCondition = 'cloudy';
console.log("Is skyCondition == 'clear'? I predict False.");
console.log(skyCondition == 'clear'); // False
// Test 9
let userRole = 'user';
console.log("Is userRole == 'admin'? I predict False.");
console.log(userRole == 'admin'); // False
// Test 10
let password = '';
console.log("Is password valid? I predict False.");
console.log(password !== ''); // False
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
QUESTION: 24;
console.log("\t\t\t\t\t\t\t Question 24");
console.log("\n");
// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let n = "TOM";
let gen = "MALE";
console.log("Equality and inequality in strings");
console.log(n == gen); // equality
console.log(n != gen); // inequality
console.log(n === gen); //equality and type comparison
console.log("tests using the toLowerCase function");
console.log(n.toLowerCase() === gen.toLowerCase()); //comparing both values and types
console.log(n.toLowerCase() != gen.toLowerCase()); //comparing that first one is not equal to the second one
console.log(n.toLowerCase() !== gen.toLowerCase()); //comparing inequality and type
console.log("Now comparison in numbers");
let a = 2;
let b = 2;
console.log(a === b); //comparing equality and type
console.log(a !== b); // comparing inequality and type
console.log(a < b); // less than comparison
console.log(a > b); // greater than comparison
console.log(a >= b); // greater than equal to comparison
console.log(a <= b); // less than equal to comparison
console.log(a == b || n == gen); // comparison using OR operator
console.log(a !== b || n !== gen); // comparison using OR operator
console.log(a == b && n !== gen); // comparison using AND operator
console.log(a === b && n === gen); // comparison using AND operator
console.log();
let comparison = [1, 2, 3, 4];
let comparisonVariable = 2;
console.log(comparison.includes(1));
console.log(comparison.includes(24));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
QUESTION: 25;
console.log("\t\t\t\t\t\t\t Question 25");
console.log("\n");
// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a
// variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print
// a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that
// fails. (The version that fails will have no output.)
task: 1;
let alien_color = "green";
if (alien_color === "green") {
    console.log("you earn 5 points");
}
task: 2;
let alien_color0 = "red";
if (alien_color0 === "green") {
    console.log("no output");
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
QUESTION: 26;
console.log("\t\t\t\t\t\t\t Question 26");
console.log("\n");
// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
// write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
let alien_color1 = "green";
if (alien_color1 === "green") {
    console.log("the player just earned 5 points for shooting the alien.");
}
else {
    console.log("Player just earn 10 points");
}
let alien_color2 = "red";
if (alien_color2 === "green") {
    console.log("the player just earned 5 points for shooting the alien.");
}
else {
    console.log("Player just earn 10 points");
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
QUESTION: 27;
console.log("\t\t\t\t\t\t\t Question 27");
console.log("\n");
// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.
let alien_color3 = "red";
if (alien_color3 === "green") {
    console.log("you got 5 points");
}
else if (alien_color3 === "yellow") {
    console.log("you got 10 points");
}
else {
    console.log("you got 15 points");
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
QUESTION: 28;
console.log("\t\t\t\t\t\t\t Question 28");
console.log("\n");
//  28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
let age = 20;
if (age < 2) {
    console.log("you are a baby");
}
else if (age < 4) {
    console.log("you are a todler");
}
else if (age < 13) {
    console.log("you are a kid");
}
else if (age < 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("you are an adult");
}
else {
    console.log("you are older");
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
QUESTION: 29;
console.log("\t\t\t\t\t\t\t Question 29");
console.log("\n");
//   29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!
let favourite_fruits = ["Mango", "Orange", "Apple"];
if (favourite_fruits.includes("Mango")) {
    console.log("you really like Mango!");
}
if (favourite_fruits.includes("Orange")) {
    console.log("you really like Orange!");
}
if (favourite_fruits.includes("Apple")) {
    console.log("you really like Apple!");
}
if (favourite_fruits.includes("Banana")) {
    console.log("you really like banana!");
}
if (favourite_fruits.includes("Guava")) {
    console.log("you really like Guava!");
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
QUESTION: 30;
console.log("\t\t\t\t\t\t\t Question 30");
console.log("\n");
//   30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
// after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let users = ["Eric", "Anees", "Habib", "Faik", "admin"];
for (let user of users) {
    if (user === "admin") {
        console.log("Hello admin,would you like to see a status report?");
    }
    else {
        console.log(`Hello ${user}, Thankyou for logging in again`);
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
QUESTION: 31;
console.log("\t\t\t\t\t\t\t Question 31");
console.log("\n");
// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let users1 = ["Eric", "Anees", "Habib", "Faik", "admin"];
users1 = [];
if (users1.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (let user of users1) {
        if (user === "admin") {
            console.log("Hello admin,would you like to see a status report?");
        }
        else {
            console.log(`Hello ${user}, Thankyou for logging in again`);
        }
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
QUESTION: 32;
console.log("\t\t\t\t\t\t\t Question 32");
console.log("\n");
//   32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users = ["eric", "Anees", "Habib", "Faik", "admin"];
let new_users = ["eric", "Nabid", "Ahmed", "Asim", "admin"];
let current_users_lower = current_users.map(user => user.toLowerCase());
for (let new_user of new_users) {
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log(`Sorry ${new_user}, this name is taken.`);
    }
    else {
        console.log(`Yes ${new_user}, is still in available list`);
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
QUESTION: 33;
console.log("\t\t\t\t\t\t\t Question 33");
console.log("\n");
//   33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
// 7th 8th 9th", and each result should be on a separate line.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) {
    if (number === 1) {
        console.log(`${number}st`);
    }
    else if (number === 2) {
        console.log(`${number}nd`);
    }
    else if (number === 3) {
        console.log(`${number}rd`);
    }
    else {
        console.log(`${number}th`);
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
QUESTION: 34;
console.log("\t\t\t\t\t\t\t Question 34");
console.log("\n");
//   34. Pizzas: Think of at least three kinds of your favorite pizza. Store these
// pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza
// instead of printing just the name of the pizza. For each pizza you should
// have one line of output containing a simple statement like I like pepperoni
// pizza.
// • Add a line at the end of your program, outside the for loop, that states
// how much you like pizza. The output should consist of three or more lines
// about the kinds of pizza you like and then an additional sentence, such as
// I really love pizza!
let favourite_pizza = ["pepperoni", "chicken", "veg"];
for (let pizza of favourite_pizza) {
    console.log(pizza);
}
for (let pizza of favourite_pizza) {
    console.log(`I really like ${pizza} pizza!`);
}
console.log("I Really love pizza!");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
QUESTION: 35;
console.log("\t\t\t\t\t\t\t Question 35");
console.log("\n");
//   35. Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!
let animals = ["Cat", "Dog", "Lion"];
for (let animal of animals) {
    console.log(animal);
}
for (let animal of animals) {
    console.log(`A ${animal} has a tail`);
}
console.log(" All of these are great pets, but i love cats more. ");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
QUESTION: 36;
console.log("\t\t\t\t\t\t\t Question 36");
console.log("\n");
//   36. T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.
function make_shirt(size, text) {
    console.log(`you order a ${size} shirt that says ${text}`);
}
make_shirt('large', '"i love typescript"');
make_shirt('medium', '"Keep smilling "');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
QUESTION: 37;
console.log("\t\t\t\t\t\t\t Question 37");
console.log("\n");
//   37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
function make_shirt1(size = 'large', text = 'I Love Typescript') {
    console.log(`you order a ${size} shirt that says ${text}`);
}
// make_shirt1();
// make_shirt1('medium');
make_shirt1('small', 'I need a big shirt to wear!');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
QUESTION: 38;
console.log("\t\t\t\t\t\t\t Question 38");
console.log("\n");
//   38. Cities: Write a function called describe_city() that accepts the name of
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country.
function describe_city(city, country = "Pakistan") {
    console.log(`${city}, is in ${country}`);
}
describe_city('Karachi');
describe_city('france', 'europe');
describe_city('Lahore');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
QUESTION: 39;
console.log("\t\t\t\t\t\t\t Question 39");
console.log("\n");
// 39. City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value
// that’s returned.
function city_country(city, country) {
    return `${city}, ${country}`;
}
let c1 = city_country('Lahore', 'Pakistan');
let c2 = city_country('Tokyo', 'Japan');
let c3 = city_country('Paris', 'France');
console.log(c1);
console.log(c2);
console.log(c3);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
QUESTION: 40;
console.log("\t\t\t\t\t\t\t Question 40");
console.log("\n");
// 40. Album: Write a function called make_album() that builds a Object
// describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of
// information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.
function makeAlbum(artist, title) {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1),
    };
    return dictionaries;
}
let album = makeAlbum('Maluma', 'Pretty Boy');
console.log(album);
album = makeAlbum('Anuel AA', 'Real Hasta la Muerte');
console.log(album);
album = makeAlbum('Sofie Reyes', 'Mal De Amores');
console.log(album);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
QUESTION: 41;
console.log("\t\t\t\t\t\t\t Question 41");
console.log("\n");
// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
let magician = ["Anees", "Habib", "Eric"];
show_magicians(magician);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
QUESTION: 42;
console.log("\t\t\t\t\t\t\t Question 42");
console.log("\n");
//  42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' ' + 'the great';
    }
}
let magician2 = ["Champo", "pappo", "tony"];
make_great(magician2);
show_magicians(magician2);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
QUESTION: 43;
console.log("\t\t\t\t\t\t\t Question 43");
console.log("\n");
//  43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
function make_great2(magicians) {
    const greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + ' ' + 'the great');
    }
    return greatMagicians;
}
const magicians3 = ["Tappo", "Tom", "Jerry"];
const greatMagicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
QUESTION: 44;
console.log("\t\t\t\t\t\t\t Question 44");
console.log("\n");
//  44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
function sandwich(...items) {
    console.log("Sandwich order:");
    for (let i = 0; i < items.length; i++) {
        console.log(`-${items[i]}`);
    }
}
console.log("Enjoy your sandwich Anees Hanif");
sandwich('Capsicam', 'Tomato', 'Chicken');
sandwich('Beef', 'Cheese');
sandwich('Garlic chicken', 'Mayo sauce');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
QUESTION: 45;
console.log("\t\t\t\t\t\t\t Question 45");
console.log("\n");
function createCar(manufacture, model, optional) {
    return {
        manufacture,
        model,
        ...optional
    };
}
const myCar = createCar("Toyota", "Corola", { color: "silver", year: "2024" });
console.log(myCar);
export {};
/////////////////////////////////////////////////////////THE END//////////////////////////////////////////////////////////////////////
