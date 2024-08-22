function solution(n) {
let answer = [];
for (i = 0; i < n; i++) {
answer.push(new Array(n));
}

let [x, y] = [0, 0];
let [min, max] = [0, n];

for (number = 1; number <= n*n; number++) {
  answer[x][y] = number;
  if (x === min && y !== max - 1) {
  y += 1;
  } else if (y === max - 1 && x < max - 1) {
  x += 1;
  } else if (x === max - 1 && y > min) {
  y -= 1;
  } else if (x === max - 1 && y === min) {
  max -= 1;
  min += 1;
  x -= 1;
  } else if (x > min && y === min - 1) {
  x -= 1;
  }
}
return answer
}