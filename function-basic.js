// Don't give up
// 포기하지 마세요!

// 함수 선언
function doSomething(add) {
  console.log(add);
  const result = add(2, 3);
  console.log(result);
}

function add(a, b) {
  const sum = a + b;
  return sum;
}

// 함수 호출
// doSomething(add); //함수를 인자로 전달(함수명만 적기)

const addFun = add;
console.log(addFun);
const result = addFun(1, 2);
console.log(result);

