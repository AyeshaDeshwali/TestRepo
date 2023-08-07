
      // let arr = []; //Literal
      // let arr1 = new Array(); //Object

      // let object = {}; //Object
      // let object2 = new Object(); //Object

      // console.log(arr, arr1);
      // console.log(object, object2);

      //   let i = 10;
      //   let j = i; //10
      //   i = 11;
      //   console.log(i, j);

      //   let obj1 = { name: "wecode" };
      //   let obj2 = obj1;
      //   let obj3 = obj2;
      //   obj1.name = "Hello World";
      //   obj2.name = "Hello Dear";
      //   obj3.name = "Hi";
      //   console.log(obj1, obj2, obj3);

      //   let arr = [1, 2, 3, 4, 5];
      //   let arr2 = arr;
      //   let arr3 = arr2;
      //   arr.push(6);
      //   arr2.push(7);
      //   arr3.push(8);
      //   console.log(arr, arr2, arr3);

      // let map = new Map();
      // let map2 = map;
      // let map3 = map;
      // map.set(1, 100);
      // map2.set(2, 200);
      // map3.set(3, 300);
      // console.log(map, map2, map3);

      // let father = { houseAddress: "30, Narayanpuri, Jhotwara" };
      // let son = father;
      // let daughter = father;

      // let arr = [1, 2, 3, 4, 5];
      // arr.splice(2, 1);
      // let ans = arr.map((value) => {
      //   return value * 10;
      // });
      // ans.push(100);
      // console.log(arr, ans);

      // let arr = [1, 2, 3, 4, 5];
      // let ans = arr.map((value) => {
      //   return [value, value * 2];
      // });
      // //[1,2,2,4,3,6,4,8,5,10]
      // console.log(ans.flat());

      // let arr = [1, 2, 3, 4, 5];
      // let ans = arr.flatMap((value) => {
      //   return [value, value * 2];
      // });
      // console.log(ans);

      // let arr = ["Hello World", "My name is", "Wecode Academy", "Jaipur"];
      // let ans = [];
      // for (let value of arr) {
      //   let split = value.split(" ");
      //   for (let val of split) {
      //     ans.push(val);
      //   }
      // }
      // console.log(ans);

      // let arr = ["Hello World", "My name is", "Wecode Academy", "Jaipur"];
      // let ans = arr.flatMap((value) => {
      //   return value.split(" ");
      // });
      // [
      //   ["Hello", "World"],
      //   ["My", "Name", "is"],
      //   ["Wecode", "Academy"],
      //   ["Jaipur"],
      // ];
      // console.log(ans);
      // ------------------------------sir code end----------------------------------------
      /// ---------------jish me b new lgate he to Object he or agr kesi me new nhi lga rhe h jase ke arr = [1, 2, 3, 4, 5] Literal treka use kr rhe he array me lakin stil ye Object he
      // Primitive Data types (In built data types)
      // Number
      // String
      // Undefined
      // Boolean
      // Symbol
      // BigInt

      //Primitive ke kash me kbhi bhi asa nhi hoga ki i ki value(10) j me asgin(10) kiya or fir i(11) ko chang kya to j ke change hogi j me sirf 10 he hoga kunki i ke value phle 10 the or baad me 11 huy to j ki change nhi hogi

      // let i = 10; // i ke value j me dalne se wo value j me aa jaygi lakin i ko baad me chang krne se j ke value change nhi hogi wo hi rhegi
      // let j = i; //10
      // i = 11;
      // console.log(i, j); //11,10 ///Primitive ke kash me kbhi bhi asa nhi hoga ki i ki value(10) j me asgin(10) kiya or fir i(11) ko chang kya to j ke change hogi j me sirf 10 he hoga kunki i ke value phle 10 the or baad me 11 huy to j ki change nhi hogi

      // let i = "ayesha";
      // let j = i;
      // i = "aashiya";
      // console.log(i, j); // i me ayesha tha or j me dala to j me bhi ayesha h lakin i ko chnage krke aashiya kiya to i me aashiya hee rhega j m change nhi hoga  Primitive deta type ke kash me

      //    Non-primitive Data types
      // Object
      // Array

      // jase primitive Data types ke kash me ho rha tha vase esme Non-primitive Data types kash me nhi hota he
      /// agr ek object ko dusre object me asgin keya ya dusre variable me asgin keya or jisko asign keya usme change kr deya to donu me change hoga
      // let obj1 = { name: "ayesha" };
      // let obj2 = obj1;
      // obj1.name = "aashiya";
      // console.log(obj1, obj2); // obj1 ko obj2 ko deya to ayesha he lakin obj1 ko change kiya to obj2 bhi chang ho gya lakin Primitive ke kash me asha nhi ho rha tha

      // let obj1 = { name: "ayesha" }; //{ name: "ayesha" } es ko obj1,obj2, or obj3 ye 3 esiko point kr rhe h jitne bhi bnalo esko point krenge
      // let obj2 = obj1;
      // let obj3 = obj2;
      // obj1.name = "aashiya"; // teno me sem hi object refrnce hoga // obj1,obj2,obj3 memory ke ander sem object ko point kr rhe h teno me se kesi me bhi change krne se obj1 me hi change hoga kunki ye Object  Non-primitive Data types he en deta types me asha hi hota he
      // console.log(obj1, obj2, obj3); // sub me aashiya hi aayga /// 1000 variables bna lenge to bhi usse koy fark nhi pdta

      // let obj1 = { name: "ayesha" };
      // let obj2 = obj1;
      // let obj3 = obj2;
      // obj1.name = "aashiya";
      // obj2.name = "husain";
      // obj3.name = "saddam";
      // console.log(obj1, obj2, obj3); // saddam // last vala change he saddam hi aayga

      // javascript ke ander Array bhi ke Object he
      // console.log("ayesh");
      //   let arr = [1, 2, 3, 4, 5]; // arr es array ka arr2 me b refrence he or arr3 me b refrence he
      //   let arr2 = arr;
      //   let arr3 = arr2;
      //   arr.push(6);
      //   arr2.push(7);
      //   arr3.push(8);
      //   console.log(arr, arr2, arr3); // koy b chij jo primitive deta type nhi primitive matlb ke Object deta type he usme agr change kiya to sub me change hoga sub me matlb ki jish-jish me uska refrence he

      // let map = new Map();
      // let map2 = map;
      // let map3 = map;
      // map.set(1, 100);
      // map2.set(2, 100);
      // map3.set(3, 100);
      // console.log(map, map2, map3);

      // let father = { houseAddress: "30, Narayanpuri, Jhotwara" };
      // let son = father;
      // let daughter = father;
      // console.log(father, son, daughter); // ye teno object sem object ko point kr rhe he agr es me kuch b change krenge to tino ko empect krega// en tino ka address sem h

      // let arr = [1, 2, 3, 4, 5];
      // arr.splice(2, 1);
      // let ans = arr.map((value) => {
      //   return value * 10; // map function arr es array me change nhi krta jo esko array dete he usme chang nhi krta h ye ek nya array bnake deta he
      // }); // nya array lane ke liy let ans me dena hoga
      // ans.push(100); // ans me array me change krenge to arr me koy fark nhi pdega 100 push krne se ans me hoga
      // console.log(arr, ans); // map function me nya array bnake deya h esne original me chang nhi kiya h

      // let arr = [1, 2, 3, 4, 5];
      // let ans = arr.map((value) => {
      //   return [value, value * 2];
      // });
      // console.log(ans); // es se to big array ke ander smalls array aa rhe he ek array bnane ke liy flat() ka use krna hoga
      // console.log(ans.flat()); // map function ek nya array bna ke deta he

      //   let arr = [1, 2, 3, 4, 5]; // jo kam uper map se kiya he wo kam flatMap se kr sekteh h
      //   let ans = arr.flatMap((value) => {
      //     return [value, value * 2]; // flatMap do kam krega phle to ye maping krega or fir ye flat ke deta
      //   });
      //   console.log(ans);

      // let arr = ["Hello World", "My name is", "Wecode Academy", "Jaipur"];
      // let ans = [];
      // for (let value of arr) {
      //   let split = value.split(" ");
      //   for (let val of split) {
      //     ans.push(val);
      //   }
      // }
      // console.log(ans);

      // let arr = ["Hello World", "My name is", "Wecode Academy", "Jaipur"];
      // let ans = arr.flatMap((value) => {
      //   return value.split(" "); /// flatMap ek lavle tk he flat krta he [value.split(" ")] esko krne se nhi krega kunki ye ab 2 lavel ke grhae ho gay
      // });
      // // console.log(ans);
      // // [
      // //   ["Hello", "World"],
      // //   ["My", "Name", "is"],
      // //   ["Wecode", "Academy"],
      // //   ["Jaipur"],
      // // ];
      // console.log(ans);
