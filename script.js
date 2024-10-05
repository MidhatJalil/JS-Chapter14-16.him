//Ques#1

//Declare an empty array using JS literal notation to store student names in future.
//var studentName = [];

// Ques#2:

// 2. Declare an empty array using JS object notation to store
//let studentNames = [];

//Q#3

// Declare and initialize a strings array.
// Declare and initialize an array with string values
//var stringArray = ['Alice', 'Bob', 'Charlie', 'Diana'];

//Ques#4

// Declare and initialize a numbers array.
//var numbersArray = [1, 2, 3, 4, 5];

//Ques#5

//Declare and initialize a boolean array
// Declare and initialize an array with boolean values
//var booleanArray = [true, false, true, false];

//Ques#06

//Declare and initialize a mixed array.
// Declare and initialize an array with mixed types of values
//var mixedArray = [42, 'hello', true, { name: 'Alice', age: 30 }, [1, 2, 3]];
 
// Ques#07

// Declare and initialize an array with mixed types of values
/*document.write("<h2>Qualifications</h2>");
var edu_qualifi = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
document.write(`(1) ${edu_qualifi[0]} </br>`);
document.write(`(2) ${edu_qualifi[1]} </br>`);
document.write(`(3) ${edu_qualifi[2]} </br>`);
document.write(`(4) ${edu_qualifi[3]} </br>`);
document.write(`(5) ${edu_qualifi[4]} </br>)`);
document.write(`(6) ${edu_qualifi[5]} </br>`);
document.write(`(7) ${edu_qualifi[6]} </br>`);
document.write(`(8) ${edu_qualifi[7]} </br>`);*/


//Ques#08

// Write a program to store 3 student names in an array.
//Take another array to store score of these three students. 
//Assume that total marks are 500 for each student, display the scores & percentages of students like:  
/*var stud_name = ["Inam", "Islam", "Amin"];
 var stud_score = [480, 430, 450];
 var total_marks = 500;
 let stud1_per = (stud_score[0] / total_marks) * 100;
 let stud2_per = (stud_score[1] / total_marks) * 100;
 let stud3_per = (stud_score[2] / total_marks) * 100;

document.write(`Score of ${stud_name[0]} is ${stud_score[0]}. Percentage: ${stud1_per}% </br>`
 );
 document.write(
   `Score of ${stud_name[1]} is ${stud_score[1]}. Percentage: ${stud2_per}% </br> `
 );
document.write(
   `Score of ${stud_name[2]} is ${stud_score[2]}. Percentage: ${stud3_per}% </br> </br> `
 );*/

//Ques#09

 //Initialize an array with color names. Display the array elements in your browser.

/* var color = ["Black", "blue", "Orange", "Green", "yellow"];
 document.write(`${color} </br>`);
//first color user want
 var user_color = prompt("Enter a color to add in Start of the array");
 color.unshift(user_color);
 document.write(`${color} </br>`);
 //Add at end

 var user_color1 = prompt("Enter a color to add in End of the array");
 color.push(user_color1);
 document.write(`${color} </br>`);
 /// Add two more color to the beginning of the array.
 color.unshift("Pink", "Brown");
 document.write(`${color} </br>`);

 color.shift();
 document.write(`${color} </br>`);

 color.pop();
 document.write(`${color} </br>`);

// Ask the user at which index he/she wants to add a color
 
 var user_index = prompt("At which index you want to add color?");
 var user_color2 = prompt("Enter a color to add the color to desired index!");
 color.splice(user_index, 0, user_color2);
 document.write(`${color} </br>`);

 //Ask the user at which index he/she wants to delete
 //color(s) & how many colors he/she wants to delete
 var user_index1 = prompt("At which index you want to delete color");
 var delete_clr = prompt("how many colors you want to delete?");
 color.splice(user_index1, delete_clr);
 document.write(`${color} </br>  </br>`);*/


//Ques#10


// 'Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method. '
//var studentScores = [320,230,480,120];
//document.write(`Score of Students: ${studentScores}  </br>`);
//studentScores.sort();
//document.write(`Order Score of Students: ${studentScores} </br> </br>`);

//Ques#11

//Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array. 

//var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

//var selectedCities = cities.slice(2,4) ; 

//document.write(selectedCities.join(', '))


//Ques#12

//let arr = ["This ", " is ", " my ", " cat"];
//let result = arr.join('');
//document.write(result);

//Ques#13

//Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out) 

//document.write("<h2>Devices:</h2>");
//let device=["keyboard","mouse","printer","monitor"];
  //for(i=0 ; i<device.length; i++){
   // document.write(`out </br> ${device[i
    //]}</br>`);
  //}

  //Ques#14

// Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out) 
 
 
 //let device2 = ["keyboard", "mouse", "printer", "monitor"];
  //for (let i = device2.length - 1; i >= 0; i--) {
     // document.write(`<br>out </br> ${device2[i]}</br>`);
 //}

 ////Ques#15

 // Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method: 
 var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
 document.write('<select>');
 for (var i = 0; i < manufacturers.length; i++) {
     document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
 }
 document.write('</select>');