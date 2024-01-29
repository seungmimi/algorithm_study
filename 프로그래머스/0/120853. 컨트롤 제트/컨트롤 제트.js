function solution(s) {
  var answer = s.split(" ")
    .map((e,i,answer) => e === "Z" ? e = parseInt(-answer[i-1]) : +e)
      .reduce((acc,cur,i) => {return acc += cur});
    return answer;
}