      console.log("Hello");
      console.warn("Warning: Heavy load on the site.");
      console.error("Error: You are not connected to the internet");
      // How to fix a bug, different steps:
      // Identifying bug
      // finding bug in code/software/network/database/server
      // fixing bug
      // Not repeat bugs

      //the process of identifying and removing errors from software
      //Code flow
      //Find out possible future errors
      //Development/Testing Issue - Defect - Non Critical
      //Production Issue - Bug - Critical
      //Break Points - Debug Points

      function add(a, b) {
        console.log(a + b); //30   1020
      }
      add(10, "20");
      let i = "10";
      console.log(i.toLowerCase());

      //         function() { //Syntax Error
      //     function() {

      //     }

      // console.log(x); //Reference Error
      // let x = 10;

      // sum(10, 20); //Reference Error
      // let sum = (a, b) => {
      //   console.log(a + b);
      // };

      // let i = "wecOde";
      // console.log(i.toLowerCase()); //No error

      // i = "10";
      // console.log(i.toLowerCase()); //No error

      // i = 10;
      // console.log(i.toLowerCase()); //Type error

      // function test(num) {
      //   console.log("Hello");
      //   if (num > 1) {
      //     test(num);
      //   }
      // }
      // //Uncaught RangeError: Maximum call stack size exceeded

      // test(5);

      // let i = 10.345454545;
      // console.log(i.toFixed(1000)); //RangeError: toFixed() digits argument must be between 0 and 100

      // Version control systems are a category of software tools that helps in recording changes made to files by keeping a track of modifications done in the code. for example Github
