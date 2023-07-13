// JS 1995 yılında Brandan Eich tarafından yazılıyor.
// Cross platform
// OOP uygun.

//single Comment
/*
multiple Comment
*/

// console.log("loglama");
// console.info("info");
// console.warn("warn");
// console.error("error");

// alert("pop-up bilgilendirme-1");
// window.alert("pop-up bilgilendirme-2");
// window.document.writeln("ekranda yazı");

// Variable
// var result=4423;
// console.log(typeof result+" => "+result);

// var result=44.23;
// console.log(typeof result+" => "+result);

// var result="Js öğreniyorum";
// console.log(typeof result+" => "+result);

// var result=true;
// console.log(typeof result+" => "+result);

// Naming Convensition
// var deneme="JS Data";
// console.log(deneme);

// var deneme44="JS Data";
// console.log(deneme44);

// var $deneme44="JS Data";
// console.log($deneme44);

// var _$deneme44="JS Data";
// console.log(_$deneme44);

// var denemeVerisi="JS Data";
// console.log(denemeVerisi);

//var &~44$deneme44="JS Data";
//console.log(44$deneme44);

// interpreter, compiler
// senkron, asenkron ?

// senkron programlama, işlemlerin sırasıyla yapıldı ve yukarıdan aşağıya doğru bir hiyerarşi içinde programın çalışması sağlanır.
// asenkron programla ise herhangi bir işlem sırası olmadan istenilen sırada şekilde programların çalıştırılmasını sağlar.

// whoisting
// result2=56;
// var result2;

///////////////////////////////////////////////////
// Operators
// + - * ** / %
// ! DEĞİL &&=VE ||=VEYA
// x++
// x--
// ++x
// --x

// =   ATAMA
// ==  EŞİT  (TÜRÜNE BAKMA)
// === EŞİT  (TÜRÜNE BAK)

// var number1=40;
// var number2=5;
// console.log(number1+number2);
// console.log(number1-number2);
// console.log(number1*number2);
// console.log(number1/number2);
// console.log(number1%number2);

// cast
// Number
// String()
// var userData=Number(prompt("Lütfen sayı giriniz"));
// console.log(userData+45);

// undefined
// var result4;
// console.log(result4);

// // NaN: Not A Number
// var result5="asd"/4;
// console.log(result5);

// // isNaN
// var result6=4;
// console.log(isNaN(result6)); //false: sayıdır

// // Infinity
// console.log(4/0);

///////////////////////////////////////////////////
// Math
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.min(4,1,99,555,25,-100));
// console.log(Math.max(4,1,99,555,25,-100));

// console.log(Math.sqrt(16));
// console.log(Math.abs(-25));

// console.log(Math.pow(2,5));

// console.log(Math.floor(3.9));
// console.log(Math.ceil(3.1));
// console.log(Math.round(6.4));
// console.log(Math.round(6.5));

// console.log(Math.sin(45));
// console.log( Math.round(Math.random()*9+1) );

//Number
// var sayi=15000;
// console.log(sayi);

// var sayi2=15E+3;
// console.log(sayi2);

//binary, octal, decimal, hexadecimal nedir?

//binary: 0-1
// var binary=0b00011
// console.log(binary)

//octal:0-1-2-3-4-5-6-7
// var octal=0o7612
// console.log(octal)

//decimal:0-1-2-3-4-5-6-7-8-9
// var decimal=123456
// console.log(decimal)

//hexdecimal:0-1-2-3-4-5-6-7-8-9-A-B-C-D-E-F
// var hexadecimal=0xffa
// console.log(hexadecimal)

//Number() ve parseInt() farkı nedir?
// Number fonksiyonu string bir değeri sayıya çevirir, içinde string bir ifade varsa NaN değerini döndürür. parseInt ise string bir ifade içindeki sayıları
// bize döndürür. Eğer string bir ifadeye gelirse fonksiyon orada durur. örnek x=10a parseInt ise 10 değerini verir, ama a10 ifadesi Nan değerini döndürür
// çünkü a string bir ifade ile başlamaktadır.

//String() data.toString() arasındaki fark nedir?
// string ve toString arasındaki fark, string her türlü ifadeyi dönüştürebilir ama toString null ve undefine değerleri dönüştüremez

//Cast
// console.log('10'+10);

// console.log(Number('10')+10);

// console.log(parseInt('10')+10);

// console.log(String(30)+10);

// var number=10;
// console.log(number.toString()+10);

//var, let, const

// var data1=11
// console.log(data1)

// var data1=22
// console.log(data1)

// let data2=33
// console.log(data2)

// let data3=33
// data3=44
// console.log(data3)

// const data4=55
// console.log(data4)

// const data5=55
// data5=66
// console.log(data5)

//String

// let str="js öğreniyorum js "
// console.log(str)
// console.log(str.length)
// console.log(str.trim().length)
// console.log(str.toLowerCase())
// console.log(str.toUpperCase())

// console.log(str.charAt(0))

// console.log(str.indexOf("js"))
// console.log(str.lastIndexOf("js"))

// console.log(str.concat("sona"))
// console.log(str.replace(str,"değiştir"))

// console.log(str.substring(1))

// console.log(str.substring(0,4))

//Örnek-4: Aşağıdaki örnekleri math ile çözelim ?
// -5.9 sayıyının aşağıdaki işlemleri yaptıralım ?
// const x=-5.9
// console.log(Math.abs(x))
// console.log(Math.abs(Math.round(x)))
// console.log(Math.pow(Math.round(x),2))
// console.log(Math.sqrt(Math.abs(x)))
// console.log(Math.ceil(Math.abs(x)))
// console.log(Math.ceil(Math.abs(x))/5)

// 1-mutlak değeri alsın 5.9
// 2-yuvarlama yapsın  6.0
// 3-karesini alsın 36.00
// 4-karekök alsın 6.0
// 5-yuvarlama yapsın 6.0
// 6-)çıkan sonucu 5 bölsün 6/5=1
// 7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
// 8-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin

// Örnek-5 : kullanıcı tarafından girilen bir sayıyı negatif mi pozitif mi olduğu ekran yazdıran algoritma ?
//NOT: cast kullalım ?

// Örnek-6 : kullanıcı tarafından password ve repassword alalım sonrasında bu iki değeri karşılaştırma yapalım
//eğer aynı girilirse aynı veri yoksa birbirine uymadı yazan algoritma yapalım

const passwordCheck = () => {
  const password1 = prompt("Lütfen şifrenizi giriniz");
  const password2 = prompt("Lütfen şifrenizi tekrar giriniz");
  if (password1 == password2) console.log("şifreniz doğru :)");
  else console.log("şifreniz yanlış :(");
};

// passwordCheck()

// Ödev
// ÖDEV NOT:5 adımı beraber yapalım

// let userData= prompt("Lütfen bir şeyler yazınız");
// console.log(userData.length);
// console.log(userData.trim().length);
// console.log(userData.toLowerCase());
// console.log(userData.toUpperCase());
// console.log(userData.replace(userData.substring(0,userData.indexOf(" ")),"javascript"))
// console.log(userData.startsWith("javascript"));
// console.log(userData.endsWith("javascript"));
// console.log(userData.charAt(0));
// console.log(userData.concat(" ben js öğreniyorum"))
// console.log(userData.substring(0,4))

// kullanıcı tarafından girilen bir kelimenin (prompt)
// let userData= prompt("Lütfen bir şeyler yazınız");
// S-1) Kaç karakterlidir ? (length)
// S-2) boşluklar alınarak Kaç karakterlidir ? (trim)
// S-3) bütün kelimeyi küçük harfle göstermek ? (toLowerCase())
// S-4) bütün kelimeyi büyük harfle göstermek ? (toUpperCase())
// S-5) Kullanıcıdan alınan ilk kelimeyle , "javascript" kelimeyle değiştirin. (replace, substring, indexOf)
// S-6) yazdığınız kelimede "javascript ile mi başlıyor" ? (startsWith())
// S-7) yazdığınız kelimede "javascript ile mi bitiyor" ? (endsWith())
// S-8) ilk harf nedir  ? (charAt())
// S-9) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())
// S-10) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin? (subString())

//////////////////////////////////////////////////
//Function (Normal Fonksiyon)

//1 returnsuz Parametresiz
function returnsuzParametresiz() {
  console.log("deneme");
}
//returnsuzParametresiz();

//2 returnsuz Parametreli
function returnsuzParametreli(adi) {
  console.log("deneme " + adi);
}
//returnsuzParametreli("yasinT"); //argüman :"yasinT"

//3 returnlu Parametresiz
function returnluParametresiz() {
  return "deneme55";
}
let result = returnluParametresiz();
//console.log(result);

//3 returnlu Parametreli
function returnluParametreli(soyadi) {
  return "deneme66 " + soyadi;
}
let result2 = returnluParametreli("Türk");
//console.log(result2);

//////////////////////////////////////////////////////////////

//Anoymous (Function)
let anonymous = function () {};

//Arrow (Function)
let arrow = () => {};

//////////////////////////////////////////////////////////////
//condition
const condi = () => {
  let number = 4;
  if (number >= 2) {
    console.log("Büyüktür");
  } else {
    console.log("Küçüktür");
  }
};
//condi();

const condi2 = () => {
  let number = 4;
  if (number >= 2) console.log("Büyüktür");
  else console.log("Küçüktür");
};
//condi2();

const condi3 = () => {
  let number = 4;
  let result = number >= 2 ? "Büyüktür" : "Küçüktür";
  console.log(result);
};
//condi3();

const condi4 = () => {
  let number = 4;
  console.log(number >= 2 ? "Büyüktür" : "Küçüktür");
};
//condi4();

const condi5 = () => {
  let number = 4;
  if (number == "1") {
    console.log("1");
  } else if (number == 2) {
    console.log("2");
  } else if (number == 3) {
    console.log("3");
  } else if (number === 4) {
    console.log("4");
  } else {
    console.log("1<=X<=5 dışındadır");
  }
};
//condi5();

const condi6 = () => {
  let number = 4;
  // break   : döngü kırmak
  // return  : metot kırmak
  // continue: 1 kereye mahsus es geç sonra döngüye devam et.
  switch (number) {
    case 1:
      console.log("1");
      break; // döngü kırmak
    case 2:
      console.log("2");
      break;
    case 3:
      console.log("3");
      break;
    case 4:
      console.log("4");
      break;
    default:
      console.log("1<=X<=5 dışındadır");
      break;
  }
};
//condi6();

// ÖDEV:
// Kullanıcı tarafından girilen bir sayının negatif mi, pozitif mi ? bunu yazan JS code yazınız.
// (Dikkat: normal  function ile yazınız)

let negativeOrPositive = () => {
  let user = Number(prompt("Lütfen bir sayı giriniz"));
  if (user < 0) console.log("Sayı negatiftir.");
  if (user > 0) console.log("Sayı pozitiftir.");
  if ((user = 0)) console.log("Sayı nötr yani 0'dır.");
};
// negativeOrPositive()

// Kullanıcı tarafından girilen bir sayının tek mi, çift mi olduğunu yazan JS code yazınız.
// (Dikkat:anonymous function ve ternary ile yazınız)

let isOddEven = () => {
  const result = 4;
  if (result % 2 == 0) console.log("çifttir");
  else console.log("tektir");
};
//isOddEven();

// Kullanıcıdan alınan sayıya göre Haftanın günlerini switch-case ile JS code yazınız?
// Örneğin: kullanıcı 1 girdi: 1=pazartesi yazacak

const days = () => {
  let number = 1;
  switch (number) {
    case 1:
      console.log("Pazartesi");
      break; // döngü kırmak
    case 2:
      console.log("Salı");
      break;
    case 3:
      console.log("Çarşamba");
      break;
    case 4:
      console.log("Perşembe");
      break;
    case 5:
      console.log("Cuma");
      break;
    case 6:
      console.log("Cumartesi");
      break;
    case 7:
      console.log("Pazar");
      break;
    default:
      console.log("gün tanımlı değildir");
      break;
  }
};
//days();

// loop

let loop = () => {
  for (let i = 1; i <= 10; i++) {
    document.write(i + " ");
  }
};

//loop();

document.writeln("<br/>");

let loop2 = () => {
  let i = 1;
  while (i <= 10) {
    document.write(i + " ");
    i++;
  }
};
//loop2();

document.writeln("<br/>");

let loop3 = () => {
  let i = 1;
  do {
    document.write(i + " ");
    i++;
  } while (i <= 10);
};
//loop3();

// Örnekler

//try catch
let tryCatchTuto = () => {
  try {
    alertx("pop-pup");
  } catch (error) {
    console.log("hata mesajı: " + error.message);
    console.log("hata mesajı: " + error.name);
    console.log(error);
  } finally {
    console.log("db.close");
    console.log("port.close");
  }
  console.log("son satır");
};

//tryCatchTuto();

/////////////////////////////////////////////////////////////////////////////////

//debug nedir?
//1 ile 10 dahil olmak üzere toplama işlemi yapan JS algoritmasını yazınız.

const debugData = () => {
  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  console.log("toplam: " + sum);
};
//debugData();

////////////////////////////////////////////////////////

// SORU 1<=userData<=50
// 1 ile Kullanıcı tarafından alınan bitiş sayısına kadar toplama yapan Algoritma örneği
// Örnek: 1<=user 1+2+3+...userdatası

const sumExamplesData = () => {
  let commonSum = 0;
  let oddSum = 0,
    oddCounter = 0,
    oddNumber = "";
  let evenSum = 0,
    evenCounter = 0,
    evenNumber = "";
  let user = Number(prompt("Lütfen 1 ile 50 arasında bir sayısı giriniz"));
  for (let i = 0; i <= user; i++) {
    if (user === 44) {
      console.log("secret key number failed " + user);
      break;
    }
    if (user > 50) {
      console.log("en fazla 50 sayısına kadar hesaplanır " + user);
      break;
    }
    if (user === 7) {
      console.log("7 sayısını toplama !!! " + user);
      continue;
    }
    if (i % 2 == 0) {
      evenSum += i;
      evenCounter++;
      evenNumber = evenNumber + " " + i;
    } else {
      oddSum += i;
      oddCounter++;
      oddNumber = oddNumber + " " + i;
    }
    commonSum += i;
  }
  console.log("Toplam:" + commonSum);

  console.log("Çift sayı toplam: " + evenSum);
  console.log("Çift sayı adedi: " + evenCounter);
  console.log("Çift sayılar: " + evenNumber);

  console.log("Tek sayı toplam: " + oddSum);
  console.log("Tek sayı adedi: " + oddCounter);
  console.log("Tek sayılar: " + oddNumber);
};

// sumExamplesData();
// Eğer Bu sayılardan 7 sayıyı varsa bunu toplayama dahil etmesin (continue)
// Bu sayının en fazla 50'e kadar toplama yapabilir (break)
// bu sayılardan çift olanların kaç tane, sayıların kendisi ve toplamları nedir ?
// bu sayılardan tek olanların kaç tane, sayıların kendisi ve toplamları nedir ?
// secret-Key kullanıcı eğer 44 girerse hiç bir işlem yapmadan sistemden çıkış sağlansın onunda haricinde sürekli işlem yapsın
// Dikkat: Bu algoritmayı Arrow Function ile yapalım.
// (Clean code kuralları çercevesinde ) algoritma yapan JS program?

////////////////////////////////////////////////////////
//Örnek-1
//y=3x+4k ==>1.dereceden2bilinmeyenlidenklem algoritması
//Kullanıcı tarafından alınan x ve k değerlerini hesaplayan algoritma yazınız ?

const denklem = () => {
  let x = Number(prompt("x değeri giriniz"));
  let k = Number(prompt("k değeri giriniz"));
  let y = 3 * x + 4 * k;
  console.log(y);
};
//denklem()

//örnek-2
//Kullanıcı tarafından alınan dereceyi  Fahrenhayta çeviren algoritma yapalım.
//Formül: (derece*9/5)+32

const celciusToFahrenhayt = () => {
  let celcius = Number(prompt("Lütfen santigrat derece giriniz !!!"));
  let ToFahrenhayt = (celcius * 9) / 5 + 32;
  console.log(ToFahrenhayt);
};
//celciusToFahrenhayt()

//örnek-3 operatör işlemleri: aşağıdaki örneği javascript ile yapalım
//4+3*2(3:3-1*6+9:1+(3:3))

const mathFunction = () => {
  const mathematicalOperation = 4 + 3 * 2 * (3 / 3 - 1 * 6 + 9 / 1 + 3 / 3);
  console.log(mathematicalOperation);
};
// mathFunction()

////////////////////////////////////////////////////////
// ÖDEV
// kullanıcıdan aldığımız isim soyisim (boşluk var)
// ilk karakter göstersin sonraki kelimeleri masking (maskeleme yapsın)
// eğer kullanıcı isim ve soyisimi ilk karakteri küçük girmişse büyük olsun mutlaka
// Hamit Mızrak
// H**** MIZ***
// ipucu: charAt, substring, indexOf, döngü, karar mekanizma

let usernameAndSurnameMasking = () => {
  const usernameAndSurname = prompt("Lütfen adınızı ve soyadınızı giriniz");

  const userIndex = usernameAndSurname.indexOf(" ");
  let username = usernameAndSurname.substring(0, userIndex);
  for (let i = 1; i < username.length; i++) {
    username = username.replace(username.charAt(i), "*");
  }
  username = username.toUpperCase();
  console.log(username.toUpperCase());

  let surname = usernameAndSurname
    .substring(userIndex + 1, usernameAndSurname.length)
    .toUpperCase();
  console.log(surname);
  for (let i = 3; i < surname.length; i++) {
    surname = surname.replace(surname.charAt(i), "*");
  }
  console.log(surname);
  console.log(username.concat(" ").concat(surname));
};
// usernameAndSurnameMasking();

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

// ÖDEV TEKRARI
// ÖDEV
// kullanıcıdan aldığımız isim soyisim (boşluk var)

let surnameAndLastname = () => {
  let surnameLastname = prompt("Lütfen adınızı ve soyadınızı giriniz!!!");

  let nameIndex = surnameLastname.indexOf(" ");

  //isim ayırma
  let surname = surnameLastname.substring(0, nameIndex);

  for (let i = 1; i < surname.length; i++) {
    surname = surname.replace(surname.charAt(i), "*").toUpperCase();
  }
  // console.log(surname);

  //soyisim ayırma
  let lastname = surnameLastname.substring(
    nameIndex + 1,
    surnameLastname.length
  );

  for (let i = 3; i < lastname.length; i++) {
    lastname = lastname.replace(lastname.charAt(i), "*").toUpperCase();
  }
  // console.log(lastname);

  console.log(surname.concat(" ", lastname));
};
// surnameAndLastname();

// ilk karakter göstersin sonraki kelimeleri masking (maskeleme yapsın)
// eğer kullanıcı isim ve soyisimi ilk karakteri küçük girmişse büyük olsun mutlaka
// Hamit Mızrak
// H**** MIZ***
// ipucu: charAt, substring, indexOf, döngü, karar mekanizma

////////////////////////////////////////////////////////

//software prensible
//KISS, YAGNI, SOLID, CLEAN CODE, SPAGETTI CODE, DUMMY CODE NEDİR?
// SENKRON VE ASENKRON NEDİR?
////////////////////////////////////////////////////////

//Monad
// const birinci=()=>{
//   let user=Number(prompt("Lütfen sayı giriniz"))
//   return user;
// }

// const ikinci=()=>{
//   let data=birinci()
//   console.log(Math.sqrt(data));
// }
// ikinci()

////////////////////////////////////////////////////////

//setTimeOut(), setInterval()

//belirli zaman sonra tek bir kere çalışır ve durur
// setTimeout(() => {
//   console.log("setTimeOut çalıştı");
// }, 2000)

//belirli bir zmaan sonra çalışır ve sonsuza kadar kapanıp tekrar çalışır
// setInterval(() => {
//   console.log("setInterval çalıştı");
// }, 3000)
////////////////////////////////////////////////////////

//callbackFunction
const birinci = (data) => {
  return Math.pow(data, 2);
};
const ikinci = (callbackFunction) => {
  let user = Number(prompt("Lütfen sayı giriniz"));
  let data = callbackFunction(user);
  console.log(data);
};

// ikinci(birinci)
////////////////////////////////////////////////////////

//promise
const promTutorials = () => {
  //catch 1 tane olmak zorunda
  let data = new Promise((resolve, reject) => {
    let status = 400;
    if (status === 200) resolve("olumlu");
    else reject("çalışmadı");
  })
    .then(() => {
      console.log("olumlu");
    })
    .catch((err) => {
      console.error(err);
    });
};
// promTutorials();

////////////////////////////////////////////////////////

//asyn/await

////////////////////////////////////////////////////////
// FIFO VE LIFO NEDİR?
//dizi, Iterative for, for in, for of, forEach, map, filter, fill
let arr = () => {
  const numbers = [3, 5, 6, 1, 9, 4, 66];
  return numbers;
};

let arrResult = () => {
  const data = arr();
  // console.log(data);
  // console.log(data[0]);
  // console.log(data[data.length - 1]);
  //Iterative For Loop
  // for(let i=0;i<data.length;i++)
  // document.write(data[i]+" ")

  // document.write("<br/>")

  //for in
  // for(let temp in data)
  // document.write(temp+"=>"+data[temp]+"<br/>")

  // document.write("<br/>")

  //for of
  // for(let temp of data)
  // document.write(temp+" ")

  // document.write("<br/>")

  //forEach
  // forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
  // data.forEach((value,index,array)=>{
  //   // document.write(index+"=>"+value+"<br/>");
  //   document.write(`${index} => ${value} <br/>`);
  // })

  // filter
  // filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
  // let result1 = data
  //   .filter((value, index, array) => {
  //     return value % 2 == 0;
  //   })
  //   .forEach((value, index, array) => {
  //     //document.write(index+" => "+value+"<br/>");
  //     document.write(`${index} => ${value} <br/>`);
  //   });
  //   document.write("<br/>")
  //map
  // map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];

  // data
  //   .map((value, index, array) => {
  //     return (value += 10);
  //   })
  //   .forEach((value, index, array) => {
  //     //document.write(index+" => "+value+"<br/>");
  //     document.write(`${index} => ${value} <br/>`);
  //   });
  //   document.write("<br/>")

  //dizilere devam

  document.writeln("Elaman sayısı: " + data.length);
  // console.log(data);
  // data.push(99);
  // console.log(data);
  // data.unshift(11);
  // console.log(data);

  // data.pop() //sonda 1 eleman çıkar
  // console.log(data);
  // data.shift() //baştan 1 eleman çıkar
  // console.log(data);

  // data.sort();
  // console.log(data);

  // data.reverse();
  // console.log(data);

  data.sort().reverse();
  console.log(data);
  console.log(data.toString().substring(0, 2));

  // splice ,slice
};

// arrResult();

// ÖDEV
/*
 Örnek
1.YOL normal diziyle yapalım
rastgele 10 elemanlı bir dizi  oluşturalım.
bu sayılardan tek olanları bulalım.
bu tek sayıların sonuna 5 ekleyelim
buradaki sayıları ekranda gösterelim. ?
bu şarta uyan kaç tane sayı vardır ?

 2.YOL map,filter, forEach ile yapalım.
 rastgele 10 elemanlı bir dizi  oluşturalım.  ==> (random)
 bu sayılardan tek olanları bulalım.          ==> (filter)
 bu tek sayıların sonuna 5 ekleyelim          ==> (map)
 buradaki sayıları ekranda gösterelim. ?      ==> (forEach)
 bu şarta uyan kaç tane sayı vardır ?         ==> (counter)
 2.YOL map,filter,counter

*/

////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
// callback - promise örneği
let callbackFunctionComputer = () => {
  // dizi objesi içerisinde 5 tane random obje oluşturalım.
  const computerArray = [];
  for (let index = 0; index < 5; index++) {
    let computerObject = {
      computerName: `computer ${index + 1}`,
      price: `${(index + 1) * 100}`,
    };
    computerArray.push(computerObject);
  }
  console.log(computerArray);

  // bu dizi içindeki sadece computer Name bileşenleri gösterin (Map)
  const arrayInComputerName = () => {
    computerArray.map((temp) => {
      //console.log(`${temp.computerName}`);
    });
  };
  arrayInComputerName();

  // call back function Price
  const arrayInComputerObject = (obj, callBackFnc) => {
    computerArray.push(obj);
    callBackFnc();
  };
  arrayInComputerObject(
    { computerName: "computer 6", price: 600 },
    arrayInComputerName
  );
};
// callbackFunctionComputer();

// callback - promise örneği
let promiseFunctionComputer = () => {
  // dizi objesi içerisinde 5 tane random obje oluşturalım.
  const computerArray = [];
  for (let index = 0; index < 5; index++) {
    let computerObject = {
      computerName: `computer ${index + 1}`,
      price: `${index + 1}` * `${Number(100)}`,
    };
    computerArray.push(computerObject);
  }
  console.log(computerArray);

  // bu dizi içindeki sadece computer Name bileşenleri gösterin (Map)
  const arrayInComputerName = () => {
    computerArray.map((temp) => {
      //console.log(`${temp.computerName}`);
    });
  };
  arrayInComputerName();

  // promise function
  const arrayInComputerObject = (obj) => {
    const promiseReturn = new Promise(() => {
      computerArray.push(obj);
    });
    return promiseReturn;
  };
  arrayInComputerObject({ computerName: "computer 6", price: 600 })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
};
// promiseFunctionComputer();

////////////////////////////////////////////////////////
//json nedir? XML nedir? Arasındaki fark?

let objectTutorials = () => {
  // object
  const personObj = {
    name: "Yasin Sezer",
    surname: "Türk",
    number: 31,
    isLogin: true,
    software: ["Html5", "css3", "js"],
    fullName: function () {
      return this.name + " " + this.surname;
    },
  };
  console.log(personObj);
  //variable
  console.log(personObj.name);
  console.log(personObj.surname);
  //variable nested
  console.log(personObj["name"]);
  console.log(personObj["surname"]);

  //Array
  console.log(personObj.software[0]);

  const objectToString = JSON.stringify(personObj);
  console.log(objectToString);

  const stringToObject = JSON.parse(objectToString);
  console.log(stringToObject.name);

  //Object Variable
  personObj.language = "english";
  console.log(personObj.language);

  //function callback
  console.log(personObj.fullName());
};

// objectTutorials();

////////////////////////////////////////////////////////
//object constructor
let objectConstructor = () => {
  let personConstructor = function (name, surname) {
    this.name=name;
    this.surname=surname;
    console.log(this);
  };

  let personResult= new personConstructor("Yasin","Türk")
  console.log(personResult.name);
};

// objectConstructor();

////////////////////////////////////////////////////////

//call,apply,bind
//anonymous function ile arrow function arasındaki fark nedir?

let noParameterCallApplyBind=function(){

  //function
  let functionOtherObject=function(){
    document.writeln(`Parametresiz Function: ${this.adi}<br/>`)
  }

  //object
  let objectData={
    "adi":"Spora Gidiyorum"
  };

  functionOtherObject.call(objectData)
  functionOtherObject.apply(objectData)
  let deneme=functionOtherObject.bind(objectData)
  deneme()
}
noParameterCallApplyBind()

document.writeln(`<br/>`)


let parameterCallApplyBind=function(){

  //function
  let functionOtherObject=function(surname){
    document.writeln(`Parametresiz Function: ${this.adi} =>${surname} <br/>`)
  }

  //object
  let objectData={
    "adi":"Spora Gidiyorum"
  };

  functionOtherObject.call(objectData,"Türk")
  functionOtherObject.apply(objectData,["Türk"])
  let deneme=functionOtherObject.bind(objectData,"Türk")
  deneme()
}
parameterCallApplyBind()




////////////////////////////////////////////////////////

// event
// listener
// dom
// LocalStorage
// KDV hesaplaması
// jquery ajax GET/POST
