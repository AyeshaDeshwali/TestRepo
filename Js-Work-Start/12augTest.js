      //1. Write a function that takes a string and returns a new string with all the words reversed using the spread operator.

      //2. Create a function that takes in an array and uses the rest operator to remove the first element from the array and finally return the array without first element.

      //3. Create a function that takes in an unknown number of arrays and uses the rest operator to flatten them into a single array

      //4.  Write a function that takes an object as a parameter and returns the value of its "x" property if it exists, otherwise it returns null. Hint : (Use optional chaining)

      //5.  Write a function which takes in an array and create two separate arrays for odd numbers and even numbers and finally merge them in the order that all odd numbers will move to the left of the array and all even numbers to right of the array.

      //6. Create an array of numbers. Now change the position of each element with their next element.

      // For example : [1,2,3,4,5,6,7]
      // Output : [2,1,4,3,6,5,7]

      // 7. Ask user below questions
      // What is your age  : 12
      // What is your mobile : 9581894461
      // What is your address : Jaipur

      // Now create an object and use enhanced object literal property computation to create below object

      // {
      //     age12 : 12
      //     9581894461 : 'Mobile',
      //     Jaipur12Address : 'Jaipur'
      // }

      //8. Using enhanced object literal function, create a function sum which takes an array as parameter and return sum of all the numbers in the array.

      //9. Take a number and check if number is greater than 80 or not. If yes then assign 100 to number else assign 200. Use short circuiting whereever possible.

      //10. Create an array of 10 numbers. Now create a new array of 0 and 1 using Array destructring based on if number is odd then 1 else 0

      // Array : [1,2,3,4,5,6,7,8,9]
      // Output: [1,0,1,0,1,0,1,0,1,0]

      //11. Given an array of price, use map function to return a new array where each price is converted to new price including tax, which is the price with a 10% tax added.

      //12. Given an array of strings, use reduce to return the total number of characters in all the strings.

      //13. Given an array of strings, use map and reduce to return the total number of characters in all the strings with a length less than 5.

      //14. Given an array of numbers, use map, filter, and reduce to return the sum of all the odd numbers multiplied by 3

      //15. Given a string, reverse the order of the words in the string. For example, "the quick brown fox" becomes "fox brown quick the".

      //||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

      // 1. Write a function that takes a string and returns a new string with all the words reversed using the spread operator.
      function addWords(str) {
        return [...str.split(" ")].map((word) =>
          word.split("").reverse().join("")
        );
      }
      const ANS = addWords("ayesha hello");
      console.log(ANS);

      // function addWords(str) {
      //   let words = str.split(" ");
      //   let reversedWords = [];
      //   for (let word of words) {
      //     let reversedWord = "";
      //     for (let i = word.length - 1; i >= 0; i--) {
      //       reversedWord += word[i];
      //     }
      //     reversedWords.push(reversedWord);
      //   }
      //   return reversedWords;
      // }
      // const ANS = addWords("ayesha hello");
      // console.log(ANS);

      //2. Create a function that takes in an array and uses the rest operator to remove the first element from the array and finally return the array without first element.
      // function arr(...str) {
      //   const [, ...other] = str;
      //   return other;
      // }
      // const ANS = arr(1, 2, 3, 4, 5);
      // console.log(ANS);

      //3. Create a function that takes in an unknown number of arrays and uses the rest operator to flatten them into a single array

      //   function test(...obj) {
      //     let arr = [];
      //     for (let value of obj) {
      //       //   console.log(arr);
      //       arr = [...arr, ...value]; // agr sirf ...value kr denge to es array ke ander jo purani value pde h wo ht jaygi
      //     }
      //     console.log(arr);
      //   }
      //   test([1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]);

      //   function flattenArrays(...arrays) {
      //     return [].concat(...arrays);
      //   }
      //   console.log(flattenArrays([1, 2, 3], [3, 4, 5], [6, 7, 8]));

      //4.  Write a function that takes an object as a parameter and returns the value of its "x" property if it exists, otherwise it returns null. Hint : (Use optional chaining)
      //   function test(obj) {
      //     return obj.name ?? null;
      //   }
      //   const ans = test({ name: "ayesha" });
      //   console.log(ans);

      //5.  Write a function which takes in an array and create two separate arrays for odd numbers and even numbers and finally merge them in the order that all odd numbers will move to the left of the array and all even numbers to right of the array.
      //   function add(number) {
      //     const odd = number.filter((number) => number % 2 === 0);
      //     const even = number.filter((number) => number % 2 === 1);
      //     return [...odd, ...even];
      //   }
      //   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
      //   const ans = add(arr);
      //   console.log(ans);

      //6. Create an array of numbers. Now change the position of each element with their next element.

      // For example : [1,2,3,4,5,6,7]
      // Output : [2,1,4,3,6,5,7]

      const numbers = [1, 2, 3, 4, 5, 6, 7];
      for (let i = 0; i < numbers.length - 1; i++) {
        const temp = numbers[i];
        numbers[i] = numbers[i + 1];
        numbers[i + 1] = temp;
      }
      console.log(numbers);

      // let arr = [1, 2, 3, 4, 5, 6, 7]; // एक आरे बनाया
      // let newArr = []; // नया खाली आरे बनाया
      // for (let i = 0; i < arr.length; i = i + 2) {
      //   // प्रत्येक दूसरे तत्व के साथ आगे बढ़ते हुए लूप चलाया
      //   if (i === arr.length - 1) {
      //     // अगर मौजूदा तत्व आरे के आखिरी तत्व है
      //     newArr.push(arr[i]); // नए आरे में मौजूदा तत्व को डाला
      //     // console.log(arr[i], "ssss"); // तत्व को डालने का संकेत दिया ("ssss" से)
      //   } else {
      //     // अन्यथा
      //     newArr.push(arr[i + 1]); // नए आरे में मौजूदा तत्व के अगले तत्व को डाला
      //     newArr.push(arr[i]); // नए आरे में मौजूदा तत्व को डाला
      //     // console.log(arr[i], "bbb"); // तत्व को डालने का संकेत दिया ("bbb" से)
      //   }
      // }
      // console.log(newArr); // नये आरे को प्रिंट किया

      // 7. Ask user below questions
      // What is your age  : 12
      // What is your mobile : 9581894461
      // What is your address : Jaipur
      // Now create an object and use enhanced object literal property computation to create below object
      // {
      //     age12 : 12
      //     9581894461 : 'Mobile',
      //     Jaipur12Address : 'Jaipur'
      // }
      // ans
      // const age = 12;
      // const mobile = "9581894461";
      // const address = "Jaipur";
      // const myObject = {
      //   [`age${age}`]: age,
      //   [mobile]: "Mobile",
      //   [`${address}${age}Address`]: address,
      // };
      // console.log(myObject);
