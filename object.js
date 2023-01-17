'use strict';

// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value }; // object는 key와 value의 집합체이다.

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax
function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 }; //key: name, age //value: 'ellie', 4
print(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later (변수를 나중에 추가할 수 있다.)
ellie.hasJob = true;
console.log(ellie.hasJob);

// can delete properties later (변수를 나중에 삭제할 수 있다.)
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
// 일반적인 방법(특정 key 값을 받아오고 싶을 때)
console.log(ellie.name);
// Computed properties(runtime에서 결정되는 key를 받아와야 할 때)
console.log(ellie['name']);  //이 때는 key를 sting타입으로 받아와야 함(''사용)

ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');
printValue(ellie, 'hasJob');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('ellie', 30);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for ( let key in ellie) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for ( let i = 0; i < array.length ; i++) {
  console.log(array[i]);
} // 배열 내 모든 요소를 나타내는 방법(귀찮음)

for( let value of array ) {
  console.log(value);
} // value of iterable 을 사용해 나타내는 방법(편리함)

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2); //뒤에 나오는 값이 앞에 나온 값을 덮어씌운다
console.log(mixed.color);
console.log(mixed.size);