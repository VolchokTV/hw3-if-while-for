// //Дайте ответ, что будет в результате
// выполнения данных ниже примеров. С объяснением, почему это так.

//1. "кот" > "код"
console.log("кот" > "код");
// результат будет TRUE. 
// Причина - различие слов в последней букве Т (строчная): U+0442  и Д (строчная): U+0434 так как 442 > 434

//2. "2" + 2 * "2"
console.log( "2" + 2 * "2"); //Результат будет строка "24"
// сначала будет выполнено умножение 2 * "2" где "2" будет автом.преобразовано в 2 получим 4(число)
// потом конкатенация строки "2" и числа 4
console.log( "2" + 4);

//3. undefined == null
console.log(undefined == null);
// ответ TRUE , особенность языка JS 

//4. undefined != null
  console.log(undefined != null);
// Результат FALSE также из-за особенностей языка

 //5. null == 0
 console.log(null == 0); // Результат FALSE 
//Когда JavaScript пытается сравнить null с 0, он не может выполнить приведение типов, так как они совершенно разные по своему значению и смыслу.
//-null представляет отсутствие какого-либо значения или объект, который не был инициализирован, а 0 — это числовое значение.

// 6.   2 > "3"
console.log(2 > "3"); // Результат FALSE
// строка "3" будет преобразована в число 3 , а 2 не больше 3

// 7.  null - false + true
console.log(null - false + true); //Результат Число 1
// null преобразуется в 0 , false также в 0 , true это 1, 0-0+1 =1


// 8.  1 / "I"
console.log(1 / "I");//Результат NaN
// строка "I"  не приводится к числу 
// 9.  "2" * "3"
console.log("2" * "3"); // Результат число 6
// строки привелись к числам 2*3=6;

// 10. 4 + 5 + "O"//Результат строка "9О"
console.log(4 + 5 + "O");
// 4+5 = 9 ,а "О" не привелось к числу поэтому 9 стало "9" и выполнилась конкатенация с "О";

// 11. "I" + 4 + 5
console.log("I" + 4 + 5); // Результат строка "I45"
// порядок действий слева направо, первой была строка"I" +"4" + "5"

// 12. "4" - 2
console.log( "4" - 2);//Результат число 2
// "4" преобразовалось в 4, а 4-2=2
// 13. "4" - "4x"
console.log("4" - "4x"); // Результат NaN
// "4х" не удалось преобразовать в число 

// 14.  “23” == 23
// console.log(“23” == 23);// Результат  ERROR  ошибка в синтаксисе кавычек
 console.log("23" == 23); // если кавычки исправить результат TRUE 
// Это происходит из-за неявного приведения типов, когда строка "23" преобразуется в число 23 для сравнения. 
// 15.       null == false
console.log(null == false); // false особенность JS
//Правая часть "false" приводится к 0 , но Тип Null не сравнивается как равный ни  c 1, ни c +0 (на самом деле, null сопоставим только с undefined в абстрактном алгоритме сравнения на равенство).
// 16.       " -4 "/ 0 + 1
console.log(" -4 " / 0 + 1); //-Infinity
// 17.       null + 1
console.log(null + 1); // число 1
// null  преобразуется в 0
// 18.       undefined + null
console.log(undefined + null);// Результат NaN
// undefined не приводится к числу 
// 19.       1 === “1”
//console.log(1 === “1”); // Результат  ERROR  ошибка в синтаксисе кавычек
// если сделать правильные кавычки
console.log(1 === "1"); // false "ложь" так как слева число а справа строка
// 20.       “2” > 10
console.log(null == 0); // FALSE сравниваются разные объекты
// 21.       NaN == undefined
console.log(NaN == undefined); // FALSE сравниваются разные объекты
//

// Работа с if-else
// 1. Если переменная a равна нулю, то выведите 'Верно', иначе
// выведите 'Неверно'. Проверьте работу скрипта при a, равном
// 1, 0, -3.
console.log("1. проверка = 0");
let a = 1;
function showMessage(a) {
  if (a === 0) {
    console.log("Верно");
  } else {
    console.log("Неверно");
  }
}
showMessage(a);
a = 0;
showMessage(a);
a = -3;
showMessage(a);

// 2. Если переменная a больше нуля, то выведите 'Верно', иначе
// выведите 'Неверно'. Проверьте работу скрипта при a, равном
// 1, 0, -3.
console.log("2. проверка > 0");
a = 1;
function showMessageMoreNull(a) {
  if (a > 0) {
    console.log("Верно");
  } else {
    console.log("Неверно");
  }
}
showMessageMoreNull(a);
a = 0;
showMessageMoreNull(a);
a = -3;
showMessageMoreNull(a);

// 3. Если переменная a меньше нуля, то выведите 'Верно', иначе
// выведите 'Неверно'. Проверьте работу скрипта при a, равном
// 1, 0, -3.
console.log("3 проверка < 0");

function showMessageLessNull(a) {
  if (a < 0) {
    console.log("Верно");
  } else {
    console.log("Неверно");
  }
}
a = 1;
showMessageLessNull(a);
a = 0;
showMessageLessNull(a);
a = -3;
showMessageLessNull(a);
// 4. Если переменная a больше или равна нулю, то выведите
// 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта
// при a, равном 1, 0, -3.
console.log("4. проверка >= 0");

function showMessageMoreEqNull(a) {
  if (a >= 0) {
    console.log("Верно");
  } else {
    console.log("Неверно");
  }
}
a = 1;
showMessageMoreEqNull(a);
a = 0;
showMessageMoreEqNull(a);
a = -3;
showMessageMoreEqNull(a);
// 5. Если переменная a меньше или равна нулю, то выведите
// 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта
// при a, равном 1, 0, -3.
console.log("5. проверка <= 0");

function showMessageLessEqNull(a) {
  if (a <= 0) {
    console.log("Верно");
  } else {
    console.log("Неверно");
  }
}
a = 1;
showMessageLessEqNull(a);
a = 0;
showMessageLessEqNull(a);
a = -3;
showMessageLessEqNull(a);
// 6. Если переменная a не равна нулю, то выведите 'Верно', иначе
// выведите 'Неверно'. Проверьте работу скрипта при a, равном
// 1, 0, -3.
console.log("6. проверка != 0");

function showMessageNotEqNull(a) {
  if (a != 0) {
    console.log("Верно");
  } else {
    console.log("Неверно");
  }
}
a = 1;
showMessageNotEqNull(a);
a = 0;
showMessageNotEqNull(a);
a = -3;
showMessageNotEqNull(a);
// 7. Если переменная a равна 'test', то выведите 'Верно', иначе
// выведите 'Неверно'. Проверьте работу скрипта при a, равном
// 'test', 'тест', 3.
console.log("7. проверка === 'test'");

function showMessageEqTest(a) {
  if (a === "test") {
    console.log("Верно");
  } else {
    console.log("Неверно");
  }
}
a = "test";
showMessageEqTest(a);
a = "тест";
showMessageEqTest(a);
a = 3;
showMessageEqTest(a);
// 8. Если переменная a равна '1' и по значению и по типу, то
// выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу
// скрипта при a, равном '1', 1, 3.
console.log("8. проверка  a === '1'");

function showMessageEqStr1(a) {
  if (a === "1") {
    console.log("Верно");
  } else {
    console.log("Неверно");
  }
}
a = "1";
showMessageEqStr1(a);
a = 1;
showMessageEqStr1(a);
a = 3;
showMessageEqStr1(a);

// Работа с логическими переменными
// 1. Если переменная test равна true, то выведите 'Верно', иначе
// выведите 'Неверно'. Проверьте работу скрипта при test,
// равном true, false. Напишите два варианта скрипта - с короткой
// записью и с длинной.

console.log("1. проверка TRUE");

function showMessageLogicTrue(a) {
  if (a) {
    console.log("Верно");
  } else {
    console.log("Неверно");
  }
}

function shortLogicTrue(a) {
  a ? console.log("Верно") : console.log("Неверно");
}

let test = true;
showMessageLogicTrue(test);
shortLogicTrue(test);
test = false;
showMessageLogicTrue(test);
shortLogicTrue(test);

// 2. Если переменная test не равна true, то выведите 'Верно',
// иначе выведите 'Неверно'. Проверьте работу скрипта при test,
// равном true, false. Напишите два варианта скрипта - с короткой
// записью и с длинной.
console.log("2. проверка false");

function showMessageLogicFalse(a) {
  if (!a) {
    console.log("Верно");
  } else {
    console.log("Неверно");
  }
}
function shortLogicFalse(a) {
  !a ? console.log("Верно") : console.log("Неверно");
}
test = true;
showMessageLogicFalse(test);
shortLogicFalse(test);
test = false;
showMessageLogicFalse(test);
shortLogicFalse(test);

///////////////////////////////
// Работа с && (и) и || (или)
//////////////////////////////

// 1. Если переменная a больше нуля и меньше 5-ти, то выведите
// 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта
// при a, равном 5, 0, -3, 2.

console.log("1. Работа с && (и) и || (или) проверка > 0 и <5");

function showMessageLess5(a) {
  if (a > 0 && a < 5) {
    console.log("Верно");
  } else {
    console.log("Неверно");
  }
}
a = 5;
showMessageLess5(a);
a = 0;
showMessageLess5(a);
a = -3;
showMessageLess5(a);
a = 2;
showMessageLess5(a);
// 2. Если переменная a равна нулю или равна двум, то прибавьте
// к ней 7, иначе поделите ее на 10. Выведите новое значение
// переменной на экран. Проверьте работу скрипта при a, равном
// 5, 0, -3, 2.

console.log("2. Работа с && (и) и || (или) a+7 || a/10");

function showEq0Or2(a) {
  if (a === 0 || a === 2) {
    console.log(a+=7);
  } else {
    console.log(a/=10);
  }
}
a = 5;
showEq0Or2(a);
a = 0;
showEq0Or2(a);
a = -3;
showEq0Or2(a);
a = 2;
showEq0Or2(a);

// 3. Если переменная a равна или меньше 1, а переменная b
// больше или равна 3, то выведите сумму этих переменных,
// иначе выведите их разность (результат вычитания). Проверьте
// работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

console.log("3. Работа с && (и) и || (или) a+b || a-b");
let b = 3;
function showAPlusB(a,b) {
  if (a <= 1 && b>= 3) {
    console.log(a+b);
  } else {
    console.log(a - b);
  }
}
a = 1;

showAPlusB(a,b)
a = 0;
b = 6;
showAPlusB(a,b)
a = 3;
b= 5;
showAPlusB(a,b);


// 4. Если переменная a больше 2-х и меньше 11-ти, или
// переменная b больше или равна 6-ти и меньше 14-ти, то
// выведите 'Верно', в противном случае выведите 'Неверно'.


console.log("4. Работа с && (и) и || (или) проверка a<11 b<14");

function showMessageABLess14(a,b) {
  if (a > 2 && a < 11 || b >= 6 && b < 14) {
    console.log("Верно");
  } else {
    console.log("Неверно");
  }
}
a = 5;
b = 3;
showMessageABLess14(a,b);
a = 0;
b = 6;
showMessageABLess14(a,b);
a = 3;
b = 5;
showMessageABLess14(a,b);
showMessageABLess14(0,0.13);

/////////////////////////////
// На switch-case
//////////////////////////////
// 1. Переменная num может принимать 4 значения: 1, 2, 3 или 4.
// Если она имеет значение '1', то в переменную result запишем
// 'зима', если имеет значение '2' – 'весна' и так далее. Решите
// задачу через switch-case.


console.log("1. Работа На switch-case");
let num = 1;
let result;
function showSeason(num) {
  switch (num) {
    case 1:
      result = 'Зима';
      break;
    case 2:
      result = 'Весна';
      break;
    case 3:
      result = 'Лето';
      break;
      case 4:
        result = 'Осень';
  }
  console.log(result);
}
showSeason(num);
showSeason(2);
showSeason(3);
showSeason(4); 

// Общие задачи
// 1. В переменной day лежит какое-то число из интервала от 1 до
// 31. Определите в какую декаду месяца попадает это число (в
// первую, вторую или третью).

console.log("1. day");
let day = 1;
function showDecada(day) {
  if (day >= 1 && day <= 10) {
      result = 'Первая';}
  else if (day >= 11 && day <= 20){
      result = 'Вторая';}
    else{result = 'Третья';}
  console.log(result);
}
showDecada(day);
showDecada(12);
showDecada(30);
showDecada(24); 

// 2. В переменной month лежит какое-то число из интервала от 1
// до 12. Определите в какую пору года попадает этот месяц
// (зима, лето, весна, осень).
let month = 6;
function showSeasonByMonth(month) {
  if (month >= 1 && month <= 2 || month === 12) {
      result = 'Зима';}
  else if (month >= 3 && month <= 5){
      result = 'Весна';}
  else if (month >= 6 && month <= 8){
        result = 'Лето';}    
  else{result = 'Осень';}
  console.log(result);
}
showSeasonByMonth(month);
showSeasonByMonth(3);
showSeasonByMonth(9);
showSeasonByMonth(12);

/////////////////////
// Циклы while и for
/////////////////////

// Решите эти задачи сначала через цикл while, а затем через цикл
// for.
// 1. Выведите столбец чисел от 1 до 100.
let i = 1;
while (i < 100) { // выводит 1, затем 2, затем 3....99
    console.log( i );
  i++;
}
//// for ////
console.log("for 1 - 99")
for (let index = 1; index < 100; index++){
  console.log(index);
}
// 2. Выведите столбец чисел от 11 до 33.
i = 11;
while (i < 33) { // выводит 11, затем 12, затем 13....32
    console.log( i );
  i++;
}
console.log("for 11 - 33");

for (let index = 11; index < 33; index++){
  console.log(index);
}
// 3. Выведите столбец четных чисел в промежутке от 0 до 100.
i = 0; // Математическая теория утверждает, что ноль относится к чётным числам.
while (i < 100) { // выводит 1, затем 2, затем 3....99
    if (i % 2 === 0){console.log( i )};
  i++;
}
//// for ////
console.log("for четных чисел в промежутке от 0 до 100")
for (let index = 0; index < 100; index+=2){
  console.log(index);
}
// 4. С помощью цикла найдите сумму чисел от 1 до 100.
i = 1; 
result = 0;
while (i < 100) { // выводит 1, затем 2, затем 3....99
   result+=i;
   i++;
}
console.log(result);

//// for ////
result = 0;
console.log("for сумма чисел от 1 до 100");

for (let index = 1; index < 100; index++){
  result+=index;
}
console.log(result);

//////////////////////
// Задачи общие.
//////////////////////
// 1. Дано число n=1000. Делите его на 2 столько раз, пока
// результат деления не станет меньше 50. Какое число
// получится? Посчитайте количество итераций, необходимых
// для этого (итерация - это проход цикла), и запишите его в
// переменную num

let n = 1000;
num = 1;
for (n ; n >= 50; n=n/2){
  //console.log(n);
  num++;
}
console.log("получилось число " + n + " потребовалось " + num + ' итераций.');
//получилось число 31.25 потребовалось 6 итераций.
