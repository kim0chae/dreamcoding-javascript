'use strict';
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  // constructor 생성자
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person('ellie', 20); // 새로운 클래스 호출(?)방법
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. ⭐️Getter and setters⭐️
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age; // this.age는 get()에 있는 메모리 호출
  }
  // 사용자가 실수로 나이 등의 값을 음수로 지정했을 경우 자동으로 0을 반환하도록 한다.(Getter,Setter 이용)
  // get: 값을 return
  // set: 값을 설정(value를 받아와야 함.)
  get age() {
    return this._age;
  }
  // get age()를 정의하는 순간, this.age는 get() 호출
  // set age()를 정의하는 순간, age를 할당할 때, 메모리에 있는 내용이 아닌 set() 호출

  set age(value) {
    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon! 너무 최근에 개발되어 브라우저 지원이 원활하지 않음.
// 
class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static(정적) properties and methods
// static으로 지정한 것은 class 자체에 지정된다.
// Typescript에서 유용함. memory 사용을 줄여줌.
// Too soon! 너무 최근에 개발되어 브라우저 지원이 원활하지 않음.
class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined
console.log(Article.publisher); // Dream Coding
Article.printPublisher(); // 변수이름으로 호출 불가능하고, 클래스이름으로만 호출 가능

// 5. Inheritance(상속)(부모와 자식 관계)
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    // 3 fields
    this.width = width;
    this.height = height;
    this.color = color;
  }

  // method
  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  // method
  getArea() {
    return this.width * this.height; // 사각형 넓이
  }
}

class Rectangle extends Shape {}
// extends키워드: Shape에서 정의한 fields, methods가 자동적으로 Rectangle에 포함됨.
// Rectangle, Triangle 등 여러개의 class를 생성해서 적용했을 때, Shape에 있는 내용 하나만 수정하면 전부 바뀜.
class Triangle extends Shape {
  draw() {
    super.draw(); // super: 부모의 함수(Shape 내에 있는)를 호출
    console.log('🔺');
  }
  getArea() {
    return (this.width * this.height) / 2; // 삼각형 넓이
  }
  // Shape에서 정의된 method들을 위와 같이 덮어쓸 수 있다.(overwriting)
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // rectangle(object)이 Rectangle(클래스)의 instance인가?
console.log(triangle instanceof Rectangle); // triangle(object)이 Rectangle(클래스)의 instance인가?
console.log(triangle instanceof Triangle);  // triangle(object)이 Triangle(클래스)의 instance인가?
console.log(triangle instanceof Shape); // triangle(object)이 Shape(클래스)의 instance인가?
console.log(triangle instanceof Object); // triangle(object)이 Object(자바스크립트 내의 모든 object)의 instance인가?