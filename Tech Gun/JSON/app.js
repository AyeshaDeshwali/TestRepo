let data = `{
  "name": "ayesha",
  "age": 39,
  "is_student": true,
  "passport_no": null,
  "p_lang": ["c", "c++", "java","javascript", "php", "paython"],
  "address": {
    "city": "merta",
    "state": "Rajsthan",
    "pincode": 341510
  }
}`;

// let ans = JSON.parse(data);
// console.log(ans); // object me convert ho jayga

let ans = JSON.parse(data);
console.log(ans["name"]); // accus krne ke [] use krna shi rhega
console.log(ans["p_lang"]);
console.log(ans["p_lang"][3]);
console.log(ans["address"]);
console.log(ans["address"]["pincode"]);

// console.log(ans.name); // y treka yaha pr shi nhi h [] eske ander shi rehta h kunki json me "" string me hota h sub

let student = {
  name: "ayesha",
  age: 19,
  city: "merta",
};

let jdata = JSON.stringify(student);
console.log(jdata); // es object ko ek json string me convert kr dega
