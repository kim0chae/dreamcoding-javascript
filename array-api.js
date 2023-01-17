'use strict';

// Q1. make a string out of an array
// array -> string
// A1. join

{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(', ');
  // fruits.toString();
  console.log(result);
}

// Q2. make an array out of a string
// string -> array
// A2. split
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',');
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
// A3. reverse
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array);
}

// Q4. make new array without the first two elements
// A4. slice : (여기부터, n-1번째까지) return (배열에서 원하는 부분만 받아서 return)
// cf) splice : (여기부터, n개) delete, return (배열 자체 수정)
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2);
  console.log(result);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
// A5. find (첫번째로 true가 나오면 해당하는 배열의 요소를 return)
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
// A6. filter (true가 나오는 것들을 배열로 받아옴)
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
// A7. map(배열 내 각 요소들을 콜백함수를 거친 새로운 값으로 전달)
{
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
// A8. some(배열 내 요소들 중 콜백함수를 거쳐 true가 나오는 요소가 있는지 없는지 return / 하나라도 조건을 충족하면 true가 나옴)
// every(배열 내 모든 요소들이 콜백함수를 거쳤을 때 true가 나오는지 return / 모두 조건을 충족해야 true가 나옴)
{
  const result = students.some((student) => student.score < 50);
  console.log(result);

  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2);
}

// Q9. compute students' average score
// A9. reduce : 배열을 돌면서 값을 누적
// reduceRight : 배열을 거꾸로 돌면서 값을 누적
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0); //return된 값이 다시 prev로 전달됨 //0을 첫번째 값으로 지정(Initial number)
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
  .map((student) => student.score)
  .filter((score) => score >= 50)
  .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
  .map((student) => student.score)
  .sort((a, b) => a - b)
  .join();
  console.log(result);
}