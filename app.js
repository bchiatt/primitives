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

e = ( ( a + b ) / ( b - c ) ) * ( ( b - a ) / ( c - d));

console.log(e)

var age = 8;

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
