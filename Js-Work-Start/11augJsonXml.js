<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>11aug</title>
  </head>
  <body>
    <div
      id="test"
      style="background-color: red; height: 200px; width: 200px"
    ></div>
    <br />
    <br />
    <button onclick="changeColor()">submit</button>
    <script>
      // let count = 1;
      // function changeColor() {
      //   if (count % 2 === 0) {
      //     document.getElementById("test").style.backgroundColor = "cyan"; //स्यान रंग
      //   } else {
      //     document.getElementById("test").style.backgroundColor = "black";
      //   }
      //   count++;
      // }

      // let sum = 0;
      // for (i = 1; i <= 100; i++) {
      //   sum = sum + i;
      // }
      // console.log(sum); // 5050

      //   function sum(a = 1, b = 2, c = (a = b)) {
      //     console.log(a, b, c);
      //   }
      //   sum();
      //   a = 1;
      //   b = 2;
      //   c = a = b;
      //   a = b
      //   c = a and b // 2 2 2

      // ----------------------------------------------------------

      // function test(obj) {
      //   return obj.mobile ?? null;
      // }
      // const ans = test({
      //   mobile:   0,
      // });
      // console.log(ans);

      // function test(...obj) {
      //   console.log(obj);
      //   let arr = [];
      //   for (let value of obj) {
      //     arr = [...arr, ...value];
      //   }
      //   console.log(arr);
      // }

      // const ans = test([1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]);

      // let obj = {
      //   myName: "Wecode",
      //   age: 12,
      //   address: {
      //     pincode: 302012,
      //   },
      //   marks: [1, 2, 3, 4, 5],
      //   sum: function () {
      //     console.log("Hello");
      //   },
      //   fatherName: undefined,
      // };
      // const json = JSON.stringify(obj);
      // console.log(json);
      // const myObj = JSON.parse(json);
      // console.log(myObj);

      // https://jsonviewer.stack.hu/

      // https://restcountries.com/v3.1/name/japan

      // https://www.w3schools.com/js/js_json_intro.asp
      // https://www.w3schools.com/xml/default.asp

      // jsonviewer.stack.hu
      // Online JSON Viewer
      // JSON Viewer - Convert JSON Strings to a Friendly Readable Format

      //  -------------------------------------------------------------------------------------
      //20 EXS ka 3.Ques Create a function that takes in an unknown number of arrays and uses the rest operator to flatten them into a single array

      // function test(...obj) {
      //   // pta nhi h ketne number h to ... lagega
      //   // console.log(obj); // eske ander array aa rhe he 4 uper obj me ... lgane se
      //   let arr = [];
      //   for (let value of obj) {
      //     arr = [...arr, ...value]; // agr sirf ...value kr denge to es array ke ander jo purani value pde h wo ht jaygi
      //   }
      //   console.log(arr);
      // }
      // test([1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]);

      //20 EXS ka 4.Ques(Write a function that takes an object as a parameter and returns the value of its "x" property if it exists, otherwise it returns null. Hint : (Use optional chaining)
      // function test(obj) {
      //   return obj.name ?? null;
      // } // name he esme h to bhej dega or agr name nhi he undefined aayga to undefined ke jghe nhi to null bhej dega
      // const ans = test({
      //   name: "ayesha", // name me krenge wo aa jayga or kuch b nhi krange to ?? es me null ya fir kuch krenge wo aa jayga
      // });
      // console.log(ans);

      // JSON: JavaScript Object Notation
      // programing me deta transfer krne de diffrent ways hote h
      // ( DETA
      //  jase  file ke rup me bhej skte h
      //  vedio ke rup me bhej skte h
      // text massege ke rup me bhej skte h ye sub DETA h)
      // esee tre se 2 formet or hote h Json & XML
      // Json me undefined or functoin use nhi kr skte he
      // Json object ke form nhi hote h Json string ke form hote h hum use Json ke form converd krte h

      // let obj = {
      //   myName: "ayesha",
      //   age: 19,
      //   address: {
      //     pincode: 201304,
      //   },
      //   marks: [1, 2, 3, 4, 5],
      //   sum: function () {
      //     console.log("Hello"); //JSON.stringify() ne functoin ko string me converd nhi kiya
      //   },
      //   fatherName: undefined, // or esko b
      // };
      // // console.log(JSON.stringify(obj)); // he to ye Json hee lakin object se esko string me converd kr diya
      // const ans = JSON.stringify(obj); // string
      // console.log(ans);
      // const maObj = JSON.parse(ans); // object
      // console.log(maObj); // Json ke liy function ka use or undefined ka use nhi krna h

      // XML: Extensible Markup Language.  ---- HTML ko extrand krke ek ny language bnay gy h jisko Extensible bola gya h
      // jase JSON hota vase hi XML b DETA edhr-udhr transfer krne ke liy kam hota h

                // <?xml version="1.0" standalone="yes"?>
                // <wecodeacademy>
                //   <batches>
                //     <javascript>
                //       <id>1</id>
                //       <name>JavaScript Batch 101</name>
                //       <students>
                //         <student>
                //           <name>Aarif</name>
                //           <age>20</age>
                //         </student>
                //         <student>
                //           <name>Aamir</name>
                //           <age>25</age>
                //         </student>
                //         <student>
                //           <name>Arun</name>
                //           <age>30</age>
                //         </student>
                //       </students>
                //     </javascript>
                //   </batches>
                // </wecodeacademy>;
    </script>
  </body>
</html>
