
      // Integer / int //// bina dashmlv vale numbers Integet ya int hoti h
      // float / double //  dashmlv vali numbers float ya double hoti h
      // float or double me sirf memory ka diffrence h

      // Converting numbers
      // console.log(Number("12"));
      // console.log(+"12");

      // Infinity -> koy b number ko 0 se divide krnge to Infinity aagya
      // console.log(10 / 0); // Infinity
      // console.log(10 / 0 === Infinity); // true // true es liy aayga kunki 10 / 0 to Infinity aayga or Infinity === Infinity sem h true aayga

      // Numeric Separators
      // console.log(10,00,00,00);// error // srl smaj me aaye to es liy , coma lgate he lakin es javascript me error aata h to esko smjne ke liy _ underScor lga skte h
      // console.log(10_00_00_00);
      // console.log(10_000) // das hjar h y

      // Working with BigInt
      // number 64 dbo me stor hota h
      // bina dasmlv vala h to 52 me hoga
      // dasmlv ke baad koy number he . lgake to wo 11 me hogi
      // or eska jo b sign hota h wo 1 dabe me hoga matlb ki + - jo chin hota h wo 1 dba lega
      // let a = 10; // jase ke 10 likha to ye 10 52 me jayga or 1 eska sign matlb 53 lakin ye 11 to khli re gya ye dbi use nhi hoga
      // let a = 10.34 // jase hi .34 dote 34 liknge to ye .34 ye 11 debo me stor hoga // ase nhi liknge jab tk ye 11 use nhi hoge

      // let a = 10; // ye ek Integer number h
      // console.log(typeof a);

      // let a = 34298373803582132804890984957236294873085;
      // console.log(typeof a); // type number h
      // console.log(a); // dekaga asa 3.4298373803582135e+40

      // console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 ye number h jo sabse big number h
      // 9007199254740991 es se big number he to Number deta type me nhi aana chay BigIng deta type me aana chay

      //9007199254740991 es koy big  number hoga wo BigInt hoga
      //halanki small number ko b BigInt bol skte h us se koy fark nhi pdta h
      // lakin etne 10n small number ko bigint bna rhe to eska koy sanc nhi bnta
      //10n ye to number me b aa skte thi
      // BigInt big number ke liy use krte h

      // let a = 10n;
      // console.log(typeof a); // bigint
      // console.log(typeof 10); // number

      // BigInt bnane ke 2 treeke

      // let a = 10n; // 1 first treeka
      // let b = BigInt(10); // 2 second treeka
      // console.log(typeof a);
      // console.log(typeof b);

      // console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 // agr hme lge ki hmara number es se b bda ja skta h future me to BigInt use kr lo other wies number use kr lo
      // jb number deta type se kam nhi chl rah h to fir bigint deta type use krnge

      // Exceptions in BigInt

      // bigint ko number se divied nhi kr skte h
      // bigint me koy b calculation krnge bigint me number + - / * jo b kr rhe h to jo dsura number h wo b bigint hona chay varna error aaygi
      // comparison kr skte he lakin calculation nhi kr skte h
      // console.log(10n / 2); /// error aayga kunki 10 bigint ye or 2 number
      // console.log(10n / 2n); // // 5n // aayga kunki ye donu bigint h
      // console.log(10n * 2n); // 20
      // console.log(10n + 2n); // 12
      // console.log(10n - 2n); // 8
      // number me numbe or bigint me bigint krna hoga ase nhi kr skte he ke 1 number or 1 bigint  kunki javascript ke pta kase chlega canfuse ho jaygi ke eska answer bigint me aana chat ya fir number me aana chay

      // console.log(Number(2335645742340184039680972398173n)); // bigint ko number me converd kr deya
      // console.log(BigInt(2335645742340184039680972398173)); //  number ko bigint me converd kr deya

      // let num = 645635498798443970554254879698756587685n;
      // if (Number.MAX_SAFE_INTEGER >= num) {
      //   console.log("Yes");
      // } else {
      //   console.log("No");
      // }

      // Number class functions
      // toFixed
      // toString
      // valueOf
      // Number()
      // parseInt
      // parseFloat
      // isNaN

      // toString

      // let a = 10;
      // console.log(a.toString()); // string me converd ho jayga
      // console.log(typeof a.toString()); // jayda ese kam late he na ki nich vali line ko
      // console.log(Number(10).toString()); // number ko toString me converd kr diya
      // console.log(10 + ""); // string me converd ho jayga ye karne ki jarurat nhi h ase b kr skte h a.toString()
      // console.log(String(10)); // ye b string me converd ho jayga

      // Number()
      // console.log(Number("10")); // string ko number me converd kr diya

      // toFixed  -> y b number ko string me lotaa ta h
      // let a = 10.23223;
      // console.log(a.toFixed(2)); //  2 likne se 2 digits tk hi dikayga dasmalv ke baad

      // let a = 10.12;
      // console.log(a.toFixed(2));

      // parseInt
      // let a = 10;
      // console.log(Number.parseInt(a)); // 10

      // let a = "10";
      // console.log(Number.parseInt(a)); // y number me converd ho gya
      // console.log(typeof Number.parseInt(a)); // number

      // parseInt ka fayda sbse jayda ye h ki agr parseInt  string or number mix krke dange to y number me converd kr deta h but start number hona chay
      // let a = "10px";
      // console.log(Number.parseInt(a)); // 10 hi aayga
      // console.log(typeof Number.parseInt(a)); // number

      // let a = "ab10px";
      // console.log(Number.parseInt(a)); // NaN // y esko number me converd nhi krega kunki ye string se start ho raha h  number se start hona chay

      // parseInt ko jaha tk number milega usko to number me converd kr dega jase hi string aaya fir y number converd nhi krega
      // let a = "12121adf";
      // console.log(Number.parseInt(a));

      // console.log(Number.parseInt("12234hello")); // 12234
      // console.log(Number.parseInt("1020.40hello123")); // 1020 or baad me hello aa gya bich me 123 b nhi aayga baad me
      // console.log(parseInt("1020.40hello123")); // parseInt point vale number nhi aate h;

      // parseFloat() me dasmalv vale numbers ke liy user hota es me point vale number aa rhe h
      // console.log(parseFloat("124.41eretw23")); //124.41
      // console.log(parseInt("124.41eret34")); //124 // parseInt me dasmalve vale number nhi hote h bina dasmalve vale number hote h
      // agr number dasmlve vale number h to parseFloat ko use krna h
      // agr number bina dasmlve vale number h to parseInt ko use krna h

      // isNaN -> jo answer aa rah h wo NaN h ya nhi h agr NaN he to answer true aayga other weais  false
      // console.log(isNaN(10)); // false // kunki isNaN ka matlb ke 10 number nhi h kya to ye glt h kunki 10 to number h es liy false aayga
      // console.log(isNaN(Number("Ayesha"))); // true // agr Ayesha ko number me converd krnge to Ayesha number me converd nhi hoga NaN aayga to kya NaN he to yes NaN h true aayga // kya Ayesha NaN h to yes Ayesha number nhi h

      // console.log(isNaN(10)); //kya 10 NaN he to false kunki 10 NaN nhi h

      console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991


