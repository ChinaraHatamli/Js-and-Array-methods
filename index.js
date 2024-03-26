const prompt = require("prompt-sync")();

//1. Let Var Const fərqi

//Dəyişən 3 növdə təyin oluna bilir. Var, Let və Const açar sözləri ilə. 2015-ci il kimi sadəcə var istifadə olunub. Quelle: https://medium.com/@chinarajalilovahatamli/unterschied-zwischen-var-let-const-02425c4800ea

// let hello = 'salam';
//let hello = 6; (sehvdir)
//hello = 6;
//console.log(hello)
//let vasitesile teyin olunan deyisen bir daha teyin oluna bilmez, amma ki deyeri deyise biler.

// const-da hem teyin olunan deyisen, hem de deyer sabitdir, deyismezdir.

//const my_password = "12345678abc";
//my_password ='2468'; (error verecek)
//console.log (my_password)

//const anotherPassword = "abc1098765";
//console.log (anotherPassword)

//let ve const ile teyin olunan deyisen bir daha teyin oluna bilmez, amma "var' da bu mumkundur. Eger sen her hansi bir acar soz istifade etmeden, sadece deyisen ve deyer yazsan, o zaman JS avtomatik onu "var" goturur.

//var testVariable = 34;
//var testVariable = "Hello";
//console.log (testVariable)

//Var function scope özelliyinə sahibdir, let isə block scope özelliyinə sahibdir. var ilə təyin olunan dəyişənlər funksiyanın əhatə dairəsinə daxildir. Yəni funksiya daxilində müəyyən edilmiş dəyişənə yalnız həmin funksiya daxilində daxil olmaq olar.Let ilə təyin olunan dəyişənlər blokun əhatə dairəsindədir. Yəni blok daxilində müəyyən edilmiş dəyişənə yalnız həmin blok daxilində daxil olmaq olar.


//function beispielVar() {
//  var x = 1;
 // if (true) {
  //  x = 2;
// }
// console.log(x); // 2
// }
// beispielVar();


// function beispielLet() {
// let y = 1;
// if (true) {
// let y = 2; 
// console.log(y); // 2
// }
// console.log(y); // 1
// }
// beispielLet();


// function beispielConst() {
// const x= 1;
// x= 2; // Fehler: TypeError: Assignment to constant variable.
// }
// beispielConst();

//hoisting en ustune cixma anlamina gelir. yeni yuxarida yazilan funskiya kimi. let ve const ile hoisting calismir, amma "var" ile mumkundur. let ve const ile verdikde, ReferenceError cixardir, "var" ile vermek mumkundur ve var ile verdikde undefined gelir console. 

//console.log(x);
//let x = 5;
//console.log (x); referenceError verir.

//console.log (y);
//var y = 12;
//console.log (y);

//2. Function və Arrov Function fərqləri(araşdırmaq)
//https://medium.com/@diwyanshu.prasad/differences-between-arrow-functions-and-regular-functions-in-javascript-4a7bb4b2bc4b#:~:text=Arrow%20functions%20are%20commonly%20used,use%20of%20arguments%20or%20super.
//əsas fərqlər sintaksis(qısaldılmış, adi), this, arqumentlərin mövcudluğu, hoisting məsələsi, dublicate.

//3. Localstirage və sessionstorage fərqləri

//Yerli Yaddaş(Local Storage):
//Yerli yaddaş istifadəçi cihazında məlumatları saxlamaq üçün veb brauzer tərəfindən təmin edilən bir mexanizmdir.
//Brauzer pəncərəsi bağlı olsa belə, məlumatlar daimi olaraq saxlanılır.
//O, məlumatları JSON formatında saxlaya bilər və brauzer tərəfindən dəstəklənən maksimum yaddaş həcmi adətən təxminən 5-10 MB təşkil edir.
//Data JavaScript istifadə edərək əldə edilə və dəyişdirilə bilər.
//Sessiya yaddaşı (Session Storage):
//Sessiya yaddaşı yerli yaddaşa bənzər şəkildə işləyir, lakin məlumatlar brauzer pəncərəsi seansı boyunca etibarlıdır.
//İstifadəçi brauzer pəncərəsini bağlayırsa və ya nişanları dəyişdirirsə, sessiya yaddaşındakı məlumatlar silinir.
//Bu, müvəqqəti məlumatların saxlanması üçün faydalı mexanizmdir və tez-tez sessiya ərzində etibarlı olan müvəqqəti məlumatları saxlamaq üçün istifadə olunur.

//4. Localstiragedə obyekt və array saxlamaq və onları götürmək (get etmək)


//const myObject = {
//  name: "Chinara",
//  age: 30,
//  country: "Germany"
//};

//localStorage.setItem("myObject", JSON.stringify(myObject));

//const getObject = JSON.parse(localStorage.getItem("myObject"));

//console.log(getObject);


//const array = [2, 4, 6, 8, 10];

//localStorage.setItem("array", JSON.stringify(array));

//const getArray = JSON.parse(localStorage.getItem("array"));

//console.log(getArray);



//5. Js Object classın araşdırmaq

//const person = {
//name: "Chinara",
//surname: "Hatamli",
//age: 30,
//income: 10000,

//calculateAnnualIncome: function() {
//console.log(this.income * 12);
//}
//}

//person.calculateAnnualIncome(); 

//6. Date classın araşdırmaq (sehv olma ehtimali coxdur)
//const currentDate = new Date();
//currentDate.setFullYear(2030);
//const date = new Date('March 25 2024 10:34:00');
//const year = currentDate.getFullYear(); 
//const month = currentDate.getMonth(); 
//const day = currentDate.getDate(); 
//const hours = currentDate.getHours(); 
//const minutes = currentDate.getMinutes(); 
//const seconds = currentDate.getSeconds(); 

//console.log (date);
//console.log (currentDate);
//console.log (year);
//console.log (day);
//console.log (month);
//console.log (hours);
//console.log (minutes);
//console.log (seconds);



//7. Find, Filter, findIndex, reduce metodlarına aid numunələr yazmaq
//const countries = ['Germany', 'France', 'Azerbaijan', 'Russia'];
//countries.forEach(function(country){
//  console.log (country.toUpperCase());
//  console.log (country.repeat(2));
//});

//const numbers = [2, 4, 6, 8, 10];
//const double = numbers.map(function(number){
 //return number * 2;
  
//});

//console.log (double);


//filter metodu mueyyen kritiklere esasen filterleyir

//let users = [
//{
//id: 1,
//name: 'Chinara',
//age: 24,
//gender: 'woman',
//},
//{
//id: 2,
//name: 'Naiba',
//age: 22,
//gender: 'woman',
//},
//{
//id: 3,
//name: 'Elgun',
//age: 19,
//gender: 'man',
//}
  
//]

//const woman = users.filter(user=>user.gender === 'woman');
//const man = users.filter (user=>user.gender === 'man' );

//console.log (man);
//console.log (woman);


//const numbers = [2, 4, 6, 8, 10];
//const multiplication = numbers.reduce ((acc,curr) => {
//return acc * curr;
//}, 1)
//console.log (multiplication);


//const numbers = [2, 4, 6, 8, 10];
//const sum = numbers.reduce ((acc,curr) => {
//return acc + curr;
//}, 0)
//console.log (sum);

//find metodu şərtə uyğun olan ilk dəyəri qaytarır.

//const numbers = [2, 4, 6, 8, 10];
//const number = numbers.find ((number) => number > 7)

//console.log (number);


//const countries = ['Germany', 'France', 'Azerbaijan', 'Russia'];
//const result = countries.find ((country) => country.length > 9);
//console.log (result);

//findIndex() methodu şərtə uyğun olan ilk index deyerini qaytarır;

//const numbers = [2, 4, 6, 8, 10];
//const result = numbers.findIndex ((number) => number > 7);
//console.log (result);

//const countries = ['Germany', 'France', 'Azerbaijan', 'Russia'];
//const result = countries.findIndex ((country) => country.length > 9);
//console.log (result);




//8. Hansı method arrayı string çevirir?
//join methodu.
//let array = [ "Tapşırıqlar", "üçün", 'təşəkkür', 'edirem'];
//let string = array.join(" ")
//console.log (string)

//9. Recursion funksiya nədir və if else olmadan yazmaq mümkündür? (tam olaram anlamadim bunu.)
// Recursion funksiyalar problemləri daha sadə və anlaşıla bilən hissələrə bölməyə yardım edir və bir problemi həll etmək üçün rekursiv olaraq hər dəfə daha kiçik bir hissədə işləyərək problemi həll edir. if else yazmadan da mumkundur. 

//10. Callback nədir?
//Callback digər funksiyaya parametr kimi ötürülə bilən funksiyadır.

//const callback = number => {
//return number ** 2
//}

//function cube (callback, number){
//return callback(number)*number
//}

//console.log (callback(5));
//console.log (cube(callback,5));

//const callback = (number) => number / 2;

//function divide(callback, number) {
//return callback(number);
//}

//console.log(divide(callback, 44));

//11. HOF nəyə deyilir?
//Higher Order Function. (Yüksək mərtəbə yaxud səviyyə funksiya) bir funksiyanın parametr kimi başqa bir funksiya qəbul etməsi və ya funksiyani deyer kimi qaytarması deməkdir, kodun daha modular, ifadəli və səmərəli yazılmasına imkan verir.

//12. Closure funksiyası haqqında məlumat yazın.
//bir funksiyanın içində bir neçə funksiya yazmaga şərait yaradır. bir neçə funksiyanın birləşməsidir. bir funksiya yazirsan, daha sonra icinde bir funksiya-icinde yazdigin funksiya esas funksiyavin deyisenlerinden istifade ede bilirse bu closure funksiyasidir.

//function outerFunction(){
//  let count = 0;

//  function innerFunction(){
//    count++;
//   return count;
//  }
//return innerFunction;

//}

//const innerFunc = outerFunction()

//console.log (outerFunction);
//console.log (innerFunc());
//console.log (innerFunc());

//function counter(){
//  let count = 0;

//  function plus(){
//    count++;
//   return count;
// }

// function minus(){
//   count --;
//  return count;
// }
// return {
//   plus,
//   minus
//  }
//}

//let count = counter();

//console.log (counter);
//console.log (count.plus());
//console.log (count.plus());
//console.log (count.plus());
//console.log (count.minus())






//arrayin element sayini verir
//let array = ['salam', 1, 50, 25, true];
//console.log (array.length)

//arayin indexini gosterir
//let array = ['salam', 1, 50, 25, true];
//console.log (array[4]);

//let array = ['salam', 1, 50, 25, true, [10, 20, 30], ['test', 'book']];
//console.log (array[6][1]);

//let array= ['salam', 'test', 'book'];
//console.log (array [2][3]) //k herfini cixardir

//split metodu stringi arraya cevirir.
//let word = "Chinara";
//let arr = word.split ("");
//console.log (arr)

//arrayda indexi gostermek üçün
//let arr = [1,2,3,4,5,6,7,8,9];
//console.log (arr.length-1)

//arrayin sonuna elaveler etmek istedikde
//let arr = [1,2,3,4,5,6];
//arr.push(25,24,23);
//console.log(arr);

//arrayin evveline elaveler etmek istedikde
//let arr = [1,2,3,4,5,6];
//arr.unshift (-1,-5, 0);
//console.log (arr)

//shift ve pop delete ucun

//arrayi ters cevirir reverse methodu
//let arr = [1,2,3,4,5,6,10];
//arr.reverse();
//console.log(arr);
