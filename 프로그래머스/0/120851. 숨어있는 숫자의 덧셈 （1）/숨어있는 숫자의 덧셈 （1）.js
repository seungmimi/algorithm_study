function solution(my_string) {
  let answer = 0;
  let answerFn = my_string.replace(/[^\d]/g, '').split('').map(e => {
    answer += parseInt(e);
  })
  return answer
}