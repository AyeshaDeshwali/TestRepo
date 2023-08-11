<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>monthly test</title>
  </head>
  <body>
    <script>
      //1. Print below pattern
      // 1
      // 23
      // 456
      // 78910
      // 1112131415

      // ans
      //   function printPattern() {
      //     let pattern = "";
      //     let count = 1;
      //     for (let i = 1; i <= 5; i++) {
      //       for (let j = 1; j <= i; j++) {
      //         pattern += count;
      //         count++;
      //       }
      //       pattern += "\n";
      //     }
      //     console.log(pattern);
      //   }
      //   printPattern();

      //2.   Create a JavaScript program that prompts the user to enter their age. If the age entered is less than 18, display an alert box with the message "Sorry, you must be at least 18 years old to access this website." If the age entered is between 18 and 30, display a confirm box with the message "Are you sure you want to proceed?" If the user clicks "Cancel" in the confirm box, display an alert box with the message "Action canceled." If the user clicks "OK" in the confirm box, display a prompt box asking for their name and display an alert box with the message "Welcome, [Name]!" (replace [Name] with the name entered).
      // ans
      //   let age = Number(prompt("what is your age"));
      //   if (age < 18) {
      //     alert("your are not alloued");
      //   } else if (age >= 18 && age <= 30) {
      //     let ans = confirm("Are you sure you want to proceed?");
      //     if (ans) {
      //       let name = prompt("what is your name");
      //       alert(`welcome ${name}`);
      //     } else {
      //       alert("Action canceled.");
      //     }
      //   }

      //3.   Create a JavaScript program that calculates the average of three numbers. Prompt the user to enter three numbers and display the average using an alert box.
      //ans
      //   let user = Number(prompt("enter first number"));
      //   let user1 = Number(prompt("enter second number"));
      //   let user2 = Number(prompt("enter third number"));
      //   alert((user + user1 + user2) / 3); // jitne number hote hai unse divide krte hai average nikalne ke liye

      //4. Solve below expressions
      // 5 + 2 * 3 - 4 / 2
      // 10 % 3 + 4 * 2 / 5
      // 15 % (7 + 3) - 4 * 2
      // (2 + 3) * (4 - 1) + 6 / 2
      // 12 / 3 + 4 - 2 * 5

      // ans
      // 5 + 2 * 3 - 4 / 2
      // Step 1: 2 * 3 is evaluated first: 2 * 3 = 6
      // Step 2: 4 / 2 is evaluated next: 4 / 2 = 2
      // Step 3: The expression becomes 5 + 6 - 2
      // Step 4: 5 + 6 is evaluated: 5 + 6 = 11
      // Step 5: The final result is 11 - 2 = 9

      // 10 % 3 + 4 * 2 / 5
      // Step 1: 10 % 3 is evaluated first: 10 % 3 = 1 (remainder when 10 is divided by 3)
      // Step 2: 4 * 2 is evaluated next: 4 * 2 = 8
      // Step 3: 8 / 5 is evaluated next: 8 / 5 = 1.6
      // Step 4: The expression becomes 1 + 1.6
      // Step 5: The final result is 1 + 1.6 = 2.6

      // 15 % (7 + 3) - 4 * 2
      // Step 1: 7 + 3 is evaluated first: 7 + 3 = 10
      // Step 2: 15 % 10 is evaluated next: 15 % 10 = 5 (remainder when 15 is divided by 10)
      // Step 3: 4 * 2 is evaluated next: 4 * 2 = 8
      // Step 4: The expression becomes 5 - 8
      // Step 5: The final result is 5 - 8 = -3

      // (2 + 3) * (4 - 1) + 6 / 2
      // Step 1: 2 + 3 is evaluated first: 2 + 3 = 5
      // Step 2: 4 - 1 is evaluated next: 4 - 1 = 3
      // Step 3: 5 * 3 is evaluated next: 5 * 3 = 15
      // Step 4: 6 / 2 is evaluated next: 6 / 2 = 3
      // Step 5: The expression becomes 15 + 3
      // Step 6: The final result is 15 + 3 = 18

      // 12 / 3 + 4 - 2 * 5
      // Step 1: 12 / 3 is evaluated first: 12 / 3 = 4
      // Step 2: 2 * 5 is evaluated next: 2 * 5 = 10
      // Step 3: The expression becomes 4 + 4 - 10
      // Step 4: 4 + 4 is evaluated next: 4 + 4 = 8
      // Step 5: The final result is 8 - 10 = -2

      // 5. Explain the difference between the == and === operators in JavaScript, and provide an example where their behavior differs.
      //ans
      // let num = 5;
      // let str = "5";
      // console.log(num == str); // true
      // console.log(num === str); // false
      // == (duble equal to) ye sirf value chack karta he ye data type chack nhi krta he ese compare karne ke liy use karte he
      // === (strict equal to)ye value or data type donu chack krta he

      //6. Explain the difference between the slice and substring operators in JavaScript, and provide an example where their behavior differs.

      //1 slice विधि: slice विधि एक स्ट्रिंग के एक या एक से अधिक अक्षरों को निकालकर नई स्ट्रिंग बनाती है। यह दो पैरामीटर लेती है: प्रारंभ इंडेक्स और अंत इंडेक्स। प्रारंभ इंडेक्स सम्मिलित होता है, लेकिन अंत इंडेक्स सम्मिलित नहीं होता। यदि दोनों इंडेक्सों के बीच कोई अंतर नहीं है, तो इंडेक्स के बाहर के सभी अक्षरों को शामिल करती है।
      // let str = "Hello, world!";  // slice
      // let slicedStr = str.slice(0, 5); // प्रारंभ इंडेक्स 0 से लेकर 5 तक के अक्षरों को निकालता है
      // console.log(slicedStr); // Output: "Hello"

      // substring विधि: substring विधि भी slice विधि की तरह काम करती है, लेकिन यह एक समर्थक अंत इंडेक्स भी लेती है। अगर इंडेक्सों के मध्य के प्रारंभ इंडेक्स अंत इंडेक्स से बड़ा है, तो इंडेक्स उल्टी क्रम में लेकर काम करती है।
      // let str = "Hello, world!"; /// substring
      // let subStr = str.substring(7, 2); // प्रारंभ इंडेक्स 7 से लेकर अंत इंडेक्स 2 तक के अक्षरों को निकालता है
      // console.log(subStr); // Output: "ell"

      //7.  Write a JavaScript program that prompts the user to enter their age and their country of residence. Based on the age and country, display a message using if-else if-else statements and logical operators. Consider the following conditions:

      // let age = Number(prompt("Enter Your Age"));
      // let residence = prompt("Enter Your Country of Residence ?");
      // if (age < 18) {
      //   console.log("Sorry, you must be at least 18 years old.");
      // } else if (age >= 18 && residence == "USA") {
      //   console.log("Welcome! Enjoy your stay in the USA.");
      // } else if (age >= 18 && residence == "UK") {
      //   console.log("Welcome! Enjoy your stay in the UK.");
      // } else {
      //   console.log("Welcome! Enjoy your stay.");
      // }

      // 8. Write a JavaScript program that prompts the user to enter a sentence. The program should perform the following operations:
      // Prompt the user to enter a sentence
      // const sentence = prompt("Enter a sentence:");
      // // 1. Count the number of characters in the sentence (including spaces)
      // const charCount = sentence.length;
      // // 2. Count the number of words in the sentence
      // const wordCount = sentence.split(" ").length;
      // // 3. Reverse the sentence
      // const reversedSentence = sentence.split("").reverse().join("");
      // // 4. Convert the sentence to uppercase
      // const upperCaseSentence = sentence.toUpperCase();
      // // 5. Convert the sentence to lowercase
      // const lowerCaseSentence = sentence.toLowerCase();
      // // Display the results
      // console.log("Number of characters:", charCount);
      // console.log("Number of words:", wordCount);
      // console.log("Reversed sentence:", reversedSentence);
      // console.log("Uppercase sentence:", upperCaseSentence);
      // console.log("Lowercase sentence:", lowerCaseSentence);
      // ------------------ye sem he top vala or bottom vala
      // let user = prompt("Enter a sentence");
      // let a = user.toUpperCase();
      // let b = user.split("").reverse().join("");
      // let c = user.slice(2, 7);
      // let d = user.length;
      // console.log(a);
      // console.log(b);
      // console.log(c);
      // console.log(d);

      // 9. Write a JavaScript function called calculateArea that takes the length and width of a rectangle as parameters and returns the area of the rectangle. The formula for calculating the area is length * width.

      // function calculateArea(length, width) {
      //   const area = length * width;
      //   return area;
      // }
      // const length = 5;
      // const width = 3;
      // const areaOfRectangle = calculateArea(length, width);
      // console.log(areaOfRectangle);

      // 10. Write a JavaScript function which calculate sum of 4 numbers. If sum of 4 numbers is greater than 100 then return 1 else return 2
      // function calculateSumAndReturnResult(num1, num2, num3, num4) {
      //   const sum = num1 + num2 + num3 + num4; // चार संख्याओं का योग की गणना करें
      //   if (sum > 100) {
      //     return 1; // अगर योग 100 से अधिक है तो 1 वापस करें
      //   } else {
      //     return 2; // अन्यथा 2 वापस करें
      //   }
      // }
      // // उदाहरण: चार संख्याओं का योग की गणना करें जहां num1 = 30, num2 = 40, num3 = 20, और num4 = 15
      // const num1 = 30;
      // const num2 = 40;
      // const num3 = 20;
      // const num4 = 15;
      // const result = calculateSumAndReturnResult(num1, num2, num3, num4);
      // console.log(result); // आउटपुट: 1 (क्योंकि 30 + 40 + 20 + 15 = 105, जो 100 से अधिक है)
    </script>
  </body>
</html>
