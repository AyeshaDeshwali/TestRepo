
      // const d = new Date();
      // console.log(`${d.getFullYear()}-${d.getDate()}-${d.getMonth() + 1}`);

      // function getCurrentDate() {
      //   let d = new Date();
      //   return `${d.getFullYear()}-${d.getDate()}/${d.getMonth() + 1}`;
      // }
      // console.log(getCurrentDate());

      // console.log(typeof 1);
      // console.log(0.4);
      // console.log(typeof 2323034); // sare number ki ek hi deta type hoti h number

      //   console.log(0.3 + 0.2);
      //   console.log(0.1 + 0.2); //0.3
      //   console.log(0.3 + 0.4);

      // if (0.1 + 0.2 === 0.3) {
      //   console.log("Yes");
      // } else {
      //   console.log("No");
      // }

      // console.log("1".toUpperCase()); // 1

      // let a = "1";
      // console.log(a.toUpperCase()); // 1

      // console.log("sajid" - 12); // NaN //agr number ke sath koy b calculation kr rhe h or  number answer aspect kr rhe h or wo number nhi aa rah h to bhir NaN aayga

      // console.log(10,00,00,00); // srl smaj me aaye to es liy , coma lgate he lakin es javascript me error aata h to esko smjne ke liy _ underScor lga skte h
      // console.log(10_00_00_00);

      // console.log(Math.floor(10.56)); //10 // jamin // floor me Decimal number hta dega
      // console.log(Math.ceil(10.56)); //11 // cht // ceil me Decimal number ko hta ke +1 add kr dega// jo b number esko Decimal me dange to uska just next number aayga
      // console.log(Math.PI);
      // console.log(Math.max(2, 3, 4, 5, 68, 9, 10, 12, 15, 1, 2, 3, 4));
      // console.log(Math.min(2, 3, 4, 5, 68, 9, 10, 12, 15, 1, 2, 3, 4));
      // console.log(Math.min(...[1, 2, 3, 4, 5]));
      // console.log(Math.max(...[1, 2, 3, 4, 5]));
      // console.log(Math.trunc(25.89)); // point me jo hoga kuch b usko hta dega// trunc Decimal number ko hta deta h
      // console.log(Math.round(10.43)); // agr aadhe se kum h to niche vala number or agr aadh ya aadh se jayda h to uper vala number
      // console.log(Math.round(10.5)); // 11
      // console.log(Math.round(10.49)); // 10
      // console.log(Math.random()); // 0 se lake 1 ke bich me jitne b number hoga random number dega
      // console.log(Math.random() * 10);
      // console.log(Math.round(Math.random() * 10)); // point me deta h to math.round ke ander dange es se Decimal number ht jaynge
      // console.log(Math.trunc(Math.random() * 10) + 1); // 1 se lake 10 ke bich me ek rendom number ganret ho rah h
      // Math.random() se 0 se lake 1 ke bich me koy b 1 number aaa rha h ajib sha 0.2   o.3 koy b
      // agr number  9.8 aaya to  9.8 ko trunced 9 kr dega is liy +1 one karna h he es liay +1 krna adega taki apna number parfect 1 se lake 10 ke bich me hi se 1 se lake

      // console.log(Math.trunc(Math.random() * 100)); // 1 se ladke 10 ke bich ke numbers to hoga renger
      // console.log(Math.trunc(Math.random() * 100) + 1); //  1 se lake 100 tk cichj k aayga

      // console.log(Math.pow(2, 4));  // 16
      // console.log(2 ** 4); // 16 // donu sem hi h

      // 1. random selected Congrats/Sorry
      // 2. setInterval time dd-mm-yyyy hh:mm:ss
      // 17-08-2023 8:57:10
      // 17-08-2023 8:57:11
      // 17-08-2023 8:57:12
      // 17-08-2023 8:57:59
      // 17-08-2023 8:58:01

      // let num = 10;
      // let mat = Math.floor(Math.random() * 100) + 1;
      // if (num === mat) {
      //   console.log("Congratulations");
      // } else {
      //   console.log("Sorry");
      // }

      function printCurrentDateTime() {
        var now = new Date();
        var day = String(now.getDate()).padStart(2, "0");
        var month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-based
        var year = now.getFullYear();
        var hours = String(now.getHours()).padStart(2, "0");
        var minutes = String(now.getMinutes()).padStart(2, "0");
        var seconds = String(now.getSeconds()).padStart(2, "0");
        var dateTimeString =
          day +
          "-" +
          month +
          "-" +
          year +
          " " +
          hours +
          ":" +
          minutes +
          ":" +
          seconds;
        console.clear(); // Clear console to update time
        console.log(dateTimeString);
        setTimeout(printCurrentDateTime, 1000); // Print again after 1 second
      }
      // Initial call to start printing current date and time
      printCurrentDateTime();

      // function printCurrentTime() {
      //   var now = new Date();
      //   var hours = String(now.getHours()).padStart(2, "0");
      //   var minutes = String(now.getMinutes()).padStart(2, "0");
      //   var seconds = String(now.getSeconds()).padStart(2, "0");
      //   var timeString = hours + ":" + minutes + ":" + seconds;
      //   console.clear();
      //   console.log(timeString);
      //   setTimeout(printCurrentTime, 1000);
      // }
      // printCurrentTime();

      // function printCurrentTime() {
      //   var now = new Date();
      //   var hours = String(now.getHours()).padStart(2, "0");
      //   var minutes = String(now.getMinutes()).padStart(2, "0");
      //   var seconds = String(now.getSeconds()).padStart(2, "0");
      //   var timeString = hours + ":" + minutes + ":" + seconds;
      //   document.write(timeString); // Time ko document mein likhna
      //   setTimeout(function () {
      //     document.body.innerHTML = ""; // Document ko clear karke update karna
      //     printCurrentTime(); // printCurrentTime function ko 1 second ke baad phir se call karna
      //   }, 1000);
      // }
      // printCurrentTime(); // printCurrentTime function ko pehli baar call karna
 
