// const arr = [1, 2, 3, 4, 5];
// const arr2 = arr; //Assignment - Dono objects change honge
// arr.push(100);
// console.log(arr, arr2);

// const arr = [1, 2, 3, [6, 7], 5];
// const arr2 = [...arr]; //Shallow Copy - Top level elements me koi change ni hoga but nested elements me change hoga
// arr.push(100);
// arr2.push(500);
// arr2[3].push(1000);
// console.log(arr, arr2);

// const arr = [1, 2, 3, [6, 7], 5];
// const arr2 = JSON.parse(JSON.stringify(arr)); //Deep Copy - Khi b koi b change kro
// arr.push(100);
// arr2.push(500);
// arr2[3].push(1000);
// console.log(arr, arr2);

// const arr = [1, 2];
// const [one = 10, two = 20, three = 30] = arr; //Default Values
// console.log(one, two, three);

// const arr = [1, 2];
// const arr2 = [4, 5];
// const arr3 = [6, 7];
// const arr4 = [...arr, ...arr3, ...arr2]; //concat
// console.log(arr4);

// ***********************************************************************

// Modern Features-------------
// Destructuring Arrays---------------
//1. What is destructuring
//2. Reverse values using destructuring
//4. Destructuring of nested array
//5. Setting default values
//6. Destructuring Objects
//7. Extract value
//8. Different property name
//9. Default values
//10. Nested Object
//11. In Function

//1. What is destructuring
//ans -- unpact(kholna) ya fir chijo ko bhar nikalna

// khi pr b object bna rhe h function bna rhe h usko variable me assgin kr rhe h or hum chate khbi b wo chij change nhi hone vali he to for Example
//let arr =[] // ye variable to array hi rhga ase case me const ka use krna shi rhega kunki ye change nhi hoga

//   const arr = [1, 2, 3, 4, 5, 6];
//   //   console.log(arr[0]); // 1 lane ke liy krenge ya fir
//   const one = arr[0];
//   const two = arr[1];
//   const three = arr[2];
//   console.log(one, two, three);  ye sem krne krne ke liy or b aasan trika for Example

//   const arr = [1, 2, 3, 4, 5, 6]; // 1,2,3
//   const [one, two, three] = arr; // one pe 1 two pe 2 or three pe 3
//   console.log(one, two, three);

//   7. Extract value
//   const arr = [1, 2, 3, 4, 5, 6]; // 1,2,5
//   const [one, two, , , three] = arr; // 3 or 4 ko chod kr dayrect 5 lane ke liy ,, ye krna hoga
//   console.log(one, two, three);

//   const arr = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//   const [one, two, , , five, , , , , , , , , , , fivteen] = arr;
//   console.log(one, two, five, fivteen);

//   const arr = [1, 2, 3, 4, 5];
//   const arr2 = arr; // assignment assign kr de value // donu object chang honge
//   arr.push(100); // ek me chang krenge to donu me chang hoga kunki array object h or object me chang krte he to donu me chang hota h
//   console.log(arr, arr2); /// donu me 100 hoga

// Shallow Copy ----> krne ke liy [...]
//agr shallow copy krte h to top lavle ki chije nhi hoti ander ke to fir b hogi
// agr Shallow Copy ki or Object me kuch b chang kiya to fir donu Object me chang nhi hoga
// jub Shallow Copy krte he or es [1, 2, 3, 4, 5] array me chang krte he to es chang kro or is me chang arr2  kro koy broblem nhi h lakin array ke ander array h us me change kiya to donu me chang hoga
// Shallow Copy kr ander nested chij me chang krenge to chang hoga

//   const arr = [1, 2, 3, [6, 7], 5];
//   const arr2 = [...arr]; // Shallow Copy - Top Lavel elements me koy chang nhi hoga but nested elements me change hoga
//   arr.push(100);
//   arr2.push(500);
//   console.log(arr, arr2);
//    nested array me chang kiya to donu me chang hoga kunki ye array ke ander array he es liy
//   const arr = [1, 2, 3, [6, 7], 5];
//   const arr2 = [...arr]; // Shallow Copy - Top Lavel elements me koy chang nhi hoga but nested elements me change hoga
// arr.push(100);
// arr2.push(500);
// arr2[3].push(1000); // [3] index pe array he 6,7 /// 1000 ye serf arr2 me push hona chay lakin ye nested array donu me hoga
//   console.log(arr, arr2);

// Deep Copy -------> Deep Copy krne ke liy JSON.parse(JSON.stringify(arr)) //  Shallow Copy ka just ulta
// Deep Copy ka matlb ki khi pr b chang kro chay nested he ya nhi h ketne ander lavel ho array usse koy fark nhi pdta khi pr b kuch chang kro donu me chang nhi hoga

//   const arr = [1, 2, 3, [6, 7], 5];
//   const arr2 = JSON.stringify(arr); //Deep Copy - khi b koy b chang kro kuch b chang kro donu me nhi hoga
//   // array ko agr Deep Copy krna he ya kishi b Object ko Deep kopy krna h to usko sbse phle string bnana pdta he JSON.stringify(arr) es ki help se
//   // string bnane ke baad usko dubare se array me convrd krna pdega to uske liy ek or function hota h JSON.parse, es JSON.stringify() ka jo b answer aa rha h usko dena pdta h JSON.parse() ko
//   console.log(arr, arr2); //JSON.stringify(arr) arr ko string me conword kr dega matlb normal text bna dega eska ye array nhi rhga
//   //hmara array ek object tha hmne usko jase hee string me converd kiya wo string me conwrd ho gya jo object tha wo string bn gya ab wo object nhi h ab wo string bn chuka h
//   // ab jo phle conspet tha ki object me kuch b chang krenge to donu me chang hoga ab usse koy fark nhi pdta wo string bn chuka h
//   //arr2 agr kuch b push krnge to nhi chlega kunki arr2 string bn chuka h
//   // esliy dubare se array bnana pdega taki hm es arr2 pe array ke kam kr ske uske liy JSON.parse()
//   const arr = [1, 2, 3, [6, 7], 5];
//   const arr2 = JSON.parse(JSON.stringify(arr));
//   arr.push(100);
//   arr2.push(500);
//   arr2[3].push(1000);
//   console.log(arr, arr2);

//   Obect de Deep Copy  JSON.parse(JSON.stringify(arr)) ase hogi
// lakin Object ke Shallow Copu ase [...] nhi hogi

// 9. Default values

//   const arr = [];
//   const [one = 10, two = 20, three = 30] = arr;
//   console.log(one, two, three);

//   const arr = [1, 2];
//   const [one = 10, two = 20, three = 30] = arr;
//   console.log(one, two, three);

//   let arr = [1, 2];
//   let arr2 = [4, 5];
//   let arr3 = [6, 7];
//   let arr4 = [...arr, ...arr3, ...arr2]; // concat
//   console.log(arr4);

//   2. Reverse values using destructuring
//   let a = 10;
//   let b = 20; // a ko b dalna he or b ko a me dalna he to nhi ho skta he asa ponsible nhi h usko Swap/Replace bolte he
//   let c = a; // c=10
//   a = b; // b=20
//   b = c; // 10;
//   console.log(a, b); // eska bhut aasan treka he esko array destructuring help se aasani se kr skte h

//   let a = 10;
//   let b = 20;
//   [a, b] = [b, a]; /// a me b ki value dalde or b me a ki value daldi
//   console.log(a, b); // 20 , 10 /// array destructuring ho gy ye

//3.Return two values from function
//   function getDetails() {
//     return 1, 2, 3;
//   }
//   console.log(getDetails()); /// 3 // function se 1 se jayda value return kr rhe he ,(cama) lga ke to hmesha jo last vali value hoti he wo asnwre hota h 3 hee ayga

// eska matlb ke function se 1 se jayda value nhi kr skte he
// agr 1 se jayda value return krvani h function se to [1, 2, 3] array me dal ke kr skte he
// 2 value functoin se return krne h nhi hogi uske liy array bnana pdega

//   function getDetails() {
//     return [1, 2, 3];
//   }
//   console.log(getDetails());
// agr 1 se jayda value return krne h aaray se to uske liy function ke ander array krna hoga

//4. Destructuring of nested array
//   const arr = [1, 2, 3, [6, 7], 5];
//   const [one, , , [six], five] = arr;
//   console.log(one, six, five); // 1, 6, 5

//   const arr = [1, 2, 3, [6, 7, [8, 9], 10], 5];
//   const [one, , , [six, , [, nine]], five] = arr;
//   console.log(one, six, five, nine);

//   6. Destructuring Objects
//   const obj = {
//     name: "ayesha",
//     mobile: 12345678,
//     email: "test@gmail.com",
//     fatherName: "yusuf khan",
//     marks: [1, 2, 3, 5],
//   };
//   const { email, mobile } = obj;
//   console.log(email, mobile);

//   const obj = {
//     name: "ayesha",
//     mobile: 12345678,
//     email: "test@gmail.com",
//     fatherName: "yusuf khan",
//     marks: [1, 2, 3, 5],
//   };
//   const { email, mobile } = obj;
//   console.log(email, mobile);

//   10. Nested Object
//   const obj = {
//     name: "ayesha",
//     mobile: 12345678,
//     email: "test@gmail.com",
//     address: {
//       pincode: 23455, // glti se glt krne se undefined aayga jase ke pincodes
//       city: "Merta",
//     },
//   };
//   const {
//     email,
//     mobile,
//     address: { pincode, city },
//   } = obj;
//   console.log(email, mobile, pincode, city);

//   const obj = {
//     name: "ayesha", // jish case me h usi case me likna h
//     mobile: 12345678,
//     email: "test@gmail.com", // esko coment krenge to jo Default values he wo aaygi
//     address: {
//       pincode: 23455,
//       city: "Merta",
//     },
//   };
//   const {
//     email = "ayesha@gmail.com", // Default values
//     mobile,
//     address: { pincode, city },
//   } = obj;
//   console.log(email, mobile, pincode, city);

//8. Different property name
//   const obj = {
//     name: "ayesha",
//     mobile: 12345678,
//     email: "test@gmail.com",
//     address: {
//       pincode: 23455,
//       city: "Merta",
//     },
//   };
//   const {
//     email: myEmail = "ayesha@gmail.com", // Default values
//     mobile: myMobileNomber, // Default name myMobileNomber mobile na rkh ke myMobileNomber ye rkh liya
//     address: { pincode, city },
//   } = obj;
//   console.log(myEmail, myMobileNomber, pincode, city); // enko bolte he renaming key ko rename kr diya to :(coln) lga ke nya name lek do

// 11. In Function
const obj = {
  name: "ayesha",
  mobile: 12345678,
  email: "test@gmail.com",
  fatherName: "yusuf khan",
  address: {
    pincode: 12333,
    city: "Merta",
  },
  marks: [1, 2, 3, 5],
};

//   function printDetails(obj) {
//     console.log(obj.mobile, obj.email);
//   }
//   printDetails(obj);

//   function printDetails({ mobile, email }) {
//     console.log(mobile, email); ///object me mobile, email nikal liya Destructuring krke
//   }
//   printDetails(obj);
