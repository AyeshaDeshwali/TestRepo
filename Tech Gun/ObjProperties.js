      // Ojbect
      //   let Person = {
      //     firstName: "Ayesha",
      //     lastName: "Deshwali",
      //   };
      //   console.log(Person.firstName);

      //   let Person = {
      //     firstName: "Ayesha",
      //     lastName: "Deshwali",
      //   };
      //   console.log(Person["firstName"]); //Bracket Annotation // bracket me krne ke liy [] enka use hoga
      //   console.log(Person.firstName); //Dot Annotation // dot . ke liy . ka donu se output sem he aayga

      // let Person = {
      //   "first Name": "Ayesha",
      //   lastName: "Deshwali",
      // };
      // console.log(Person["first Name"]); //Bracket Annotation ne space dena se bhi ho jata he

      //  let Person = {
      //   "first Name": "Ayesha",
      //   lastName: "Deshwali",
      // };
      // console.log(Person."first Name");  // error aayga kunki . Annotation esme kam nhi krega

      // let Person = {
      //   12: 20000,
      //   lastName: "Deshwali",
      // };
      // console.log(Person.12); // error aayga kunki . Annotation esme kam nhi krega error nhi lane ke liy [""] esme dena hoga

      // let obj = {
      //   firstName: "ayesha",
      //   lastName: "deshwali",
      // };
      // obj.firstName = "aastana"; /// modyfay (chang) ho gay yah pr
      // console.log(firstName);

      // let obj = {
      //   firstName: "ayesah",
      //   lastName: "deshwali",
      // };
      // obj.age = 19; // new property add ho gy
      // console.log(obj.age); // 19

      // let obj = {
      //   firstName: "ayesha",
      //   lastName: "deshwali",
      // };
      // delete obj.lastName; /// delete kr deya lastName ko
      // console.log(obj);

      // let obj = {
      //   firstName: "ayesah",
      //   lastName: "deshwali",
      // };
      // console.log(obj.age); // age he ya nhi ye dekhne ke liy

      // let obj = {
      //   firstName: "ayesah",
      //   lastName: "deshwali",
      // };
      // console.log("age" in obj); // in opretor se false me aayag kunki age name ke property nhi he

      // const car = {
      //   make: "Honda",
      //   model: "Accord",
      //   year: 1998,
      // };
      // console.log("make" in car); // output: true
      // delete car.make;
      // if ("make" in car === false) {
      //   car.make = "Suzuki";
      // }
      // console.log(car.make); //output: "Suzuki"

      // let obj = {
      //   firstName: "ayesha",
      //   lastName: "deshwali",
      // };
      // obj.age = 19;
      // for (let a in obj) {
      //   // console.log(a + " : " + obj[a]);
      //   // console.log(a);
      //   console.log(obj[a]);
      // } // ek object ka sari property or value janna he to ase kr skte he or loop ke ander chlane ke liy Bracket Annotation use krna he .(dot) Annotation kam nhi krega

      // let Person = {
      //   firstName: "ayesha",
      //   lastName: "deshwali",
      // };
      // Person.age = 19;
      // Person.hi = function () {
      //   console.log("hello"); // 1 treeka
      // };
      // Person.hi();

      // let Person = {
      //   firstName: "ayesha",
      //   lastName: "deshwali",
      // };
      // Person.age = 19;
      // function greet() {
      //   console.log("he"); // 2 treeka
      // }
      // Person.hello = greet();
      // Person.hello();

      // let Person = {
      //   firstName: "ayesha",
      //   lastName: "deshwali",
      //   greet: function () {
      //     console.log("hello"); // three treeka
      //   },
      // };
      // Person.age = 19;
      // Person.greet();

      // let Person = {
      //   firstName: "ayesha",
      //   lastName: "deshwali",
      //   greet() {
      //     console.log("hello"); // four treeka
      //   },
      // };
      // Person.age = 19;
      // Person.greet();
  
