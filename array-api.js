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
  const fruits = 'ð, ð¥, ð, ð';
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
// A4. slice : (ì¬ê¸°ë¶í°, n-1ë²ì§¸ê¹ì§) return (ë°°ì´ìì ìíë ë¶ë¶ë§ ë°ìì return)
// cf) splice : (ì¬ê¸°ë¶í°, nê°) delete, return (ë°°ì´ ìì²´ ìì )
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
// A5. find (ì²«ë²ì§¸ë¡ trueê° ëì¤ë©´ í´ë¹íë ë°°ì´ì ììë¥¼ return)
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
// A6. filter (trueê° ëì¤ë ê²ë¤ì ë°°ì´ë¡ ë°ìì´)
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
// A7. map(ë°°ì´ ë´ ê° ììë¤ì ì½ë°±í¨ìë¥¼ ê±°ì¹ ìë¡ì´ ê°ì¼ë¡ ì ë¬)
{
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
// A8. some(ë°°ì´ ë´ ììë¤ ì¤ ì½ë°±í¨ìë¥¼ ê±°ì³ trueê° ëì¤ë ììê° ìëì§ ìëì§ return / íëë¼ë ì¡°ê±´ì ì¶©ì¡±íë©´ trueê° ëì´)
// every(ë°°ì´ ë´ ëª¨ë  ììë¤ì´ ì½ë°±í¨ìë¥¼ ê±°ì³¤ì ë trueê° ëì¤ëì§ return / ëª¨ë ì¡°ê±´ì ì¶©ì¡±í´ì¼ trueê° ëì´)
{
  const result = students.some((student) => student.score < 50);
  console.log(result);

  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2);
}

// Q9. compute students' average score
// A9. reduce : ë°°ì´ì ëë©´ì ê°ì ëì 
// reduceRight : ë°°ì´ì ê±°ê¾¸ë¡ ëë©´ì ê°ì ëì 
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0); //returnë ê°ì´ ë¤ì prevë¡ ì ë¬ë¨ //0ì ì²«ë²ì§¸ ê°ì¼ë¡ ì§ì (Initial number)
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