<<<<<<< HEAD
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>calculator</title>
    <link rel="stylesheet" href="calculator.css" />
  </head>
  <body>
    <div class="calculator">
      <input type="text" placeholder="0" id="inputBox" />
      <div>
        <button class="opretor">AC</button>
        <button class="opretor">DEL</button>
        <button class="opretor">%</button>
        <button class="opretor">/</button>
      </div>
      <div>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button class="opretor">*</button>
      </div>
      <div>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button class="opretor">-</button>
      </div>
      <div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button class="opretor">+</button>
      </div>
      <div>
        <button>00</button>
        <button>0</button>
        <button>.</button>
        <button class="equalBtn">=</button>
      </div>
    </div>
    <script src="calculator.js"></script>
  </body>
</html>
=======
### 1. Find value greater than 20 using find function
  ```javascript
      let a = [12, 20, 34, 5];
      let b = a.find((value) => {
        return value > 20;
      });
      console.log(b);
  ```
### 2. Find string length greater than 10 using find function
  ```javascript
      let a = ["ayesha", "munee", "saddamHusain", "aastana"];
      let b = a.find((value) => {
        return value.length > 10;
      });
      console.log(b);
  ```
### 3. Filter all numbers less than 100
   ```javascript
      let arr = [34, 67, 900, 12, 45, 99, 500, 290];
      let ans = arr.filter((para) => {
        return para < 100;
      });
      console.log(ans);
   ```
### 4. Filter all numbers greater than 50 and multiple of 5
   ```javascript
      let arr = [60, 30, 20, 70, 90, 34, 12];
      let ans = arr.filter((para) => {
        return para > 50 && para % 5 === 0;
      });
      console.log(ans);
   ```
### 5. Filter all words with length > 5 and contains world 'World' in itself for example Hello World, Computer World
  ```javascript
      let arr = ["ayesha", "sara", "world", "saddamHusain"];
      let ans = arr.filter((value) => {
        return value.length > 5;
      });
      console.log(ans);
  ```
### 6. Calculate sum of all the numbers of array using reduce function
  ```javascript
      let arr = [1, 2, 3, 4, 5];
      let ans = arr.reduce((prev, curr) => {
        console.log(prev, curr);
        return prev + curr;
      });
      console.log(ans);
  ```
### 7. Calculate total words with length > 5 in an array using reduce and filter function. Dono se krna hai alag alag
  ```javascript
      const words = [
        "apple",
        "banana",
        "orange",
        "watermelon",
        "grapes",
        "mango",
      ];
      const chaking = words.reduce((count, word) => {
        if (word.length > 5) {
          return count + 1;
        } else {
          return count;
        }
      }, 0);
      const filteredWords = words.filter((word) => word.length > 5);
      const chaking2 = filteredWords.length;
      console.log(chaking); // Output: 2
      console.log(chaking2); // Output: 2
  ```
### 8. Convert any odd number to even number using map function
  ```javascript
      let arr = [1, 2, 3, 4, 5, 6, 7, 8];
      let ans = arr.map((para) => {
        if (para % 2 !== 0) {
          return para + 1;
        } else {
          return para;
        }
      });
      console.log(ans);
  ```
### 9. Convert any even number to odd number using map function
   ```javascript
      let arr = [1, 2, 3, 4, 5, 6, 7, 8];
      let ans = arr.map((para) => {
        if (para % 2 === 0) {
          return para + 1;
        } else {
          return para;
        }
      });
      console.log(ans);
  ```
### 10. Check if every number is multiple of 5 or not in the array using every function
  ```javascript
      let arr = [10, 20, 30, 25];
      let ans = arr.every((para) => {
        return para % 5 === 0;
      });
      console.log(ans);
  ```
### 11. Check if any number is multiple of 5 and less than 10 using some function
 ```javascript
      let arr = [10, 5, 20, 45, 9];
      let ans = arr.some((para) => {
        return para % 5 === 0 && para < 10;
      });
      console.log(ans);
 ```
>>>>>>> origin/main
