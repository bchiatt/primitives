// this is a single line comment
//


/*this
 * is
 * a
 * multiline
 * comment
 */

var a = 3;
var b = 2;
var c = a + b;

console.log('this is a string');
console.log(a);
console.log(b);
console.log(c);

var first = 'sally';
var last = 'smith';
var fullName = first + ' ' + last;

console.log(fullName);

b = 4;
c = 5;
d = 6;

var base = ((a+b)/(b-c))*((b-a)/(c-d));
var power = (a+b);
var e = Math.pow(base, power);

console.log(e)

var age = 22;

if (age >= 21){
  console.log('your are legal to drink');
}else{
  console.log('you are NOT legal to drink');
}

// this is the maximum allowed rating you can see

if (age >= 0 && age <= 5) {
  console.log('G rated');
}else if (age <= 12){
  console.log('PG rated');
}else if (age <= 16){
  console.log('PG-13 rated');
}else if (age <= 17){
  console.log('NC-17 rated');
}else{
  console.log('X rated');
}

// switch string example
//

var day = 6;

switch (day) {
  case 0:
    day = "Sunday";
    console.log('today is Sunday');
    break;
  case 1:
    day = "Monday";
    console.log('today is Monday');
    break;
  case 2:
    day = "Tuesday";
    console.log('today is Tuesday');
    break;
  case 3:
    day = "Wednesday";
    console.log('today is Wednesday');
    break;
  case 4:
    day = "Thursday";
    console.log('today is Thursday');
    break;
  case 5:
    day = "Friday";
    console.log('today is Friday');
    break;
  case 6:
    day = "Saturday";
    console.log('today is Saturday');
    break;
}

// while loop
//

a = 1;

while(a < 10) {
  console.log('a is looping...', a);
  //a += 2;
  //a - a + 1;
  a++;
}

//for loop
//

for(var i = 0; i < 10; i++){
  console.log('i ===', i);
}
