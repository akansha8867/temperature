//Akansha Workspace

/* The forecast today is 293 Kelvin. To start, create a variable named kelvin, and set it equal to 293.
The value saved to kelvin will stay constant. Choose the variable type with this in mind. */
const kelvin=293;

//  Write a comment above that explains this line of code.
// created a variablekelvin with some constant value.

/*Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.
Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius. */
var celsius;
celsius = kelvin-273;

// Write a comment above that explains this line of code..
// converted kelvin to celsius by applying a formula. 

/*Find Fahrenheit converstion formula calculate Fahrenheit, then store the answer in a variable named fahrenheit.
In the next step we will round the number saved to fahrenheit. Choose the variable type that allows you to change its value.*/
var Fahrenheit = celsius*9/5+32;
// Write a comment above that explains this line of code.
// applied fahrenheit converstion formula.


/* When you convert from Celsius to Fahrenheit, you often get a decimal number.
 Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the fahrenheit variable. */
Math.floor(Fahrenheit);
//  Write a comment above that explains this line of code.
// used math.floor function to remove decimal number.

/* Use console.log and string interpolation to log the temperature in fahrenheit to the console as follows:
The temperature is TEMPERATURE degrees Fahrenheit.
Use string interpolation to replace TEMPERATURE with the value saved to fahrenheit. */

console.log("The temperature in Fahrenheit is " + Fahrenheit);
// Run your program to see your results!
// node filename


/*If you’d like extra practice, try this:
Convert celsius to the Newton scale using the equation below
Newton = Celsius * (33/100)
Round down the Newton temperature using the .floor() method
Use console.log and string interpolation to log the temperature in newton to the console*/




