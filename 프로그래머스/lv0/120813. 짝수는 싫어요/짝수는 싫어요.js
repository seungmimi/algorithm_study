function solution(n) {
    var answer =
    Array(n)
        .fill(0)
        .map((v,i) => v = i+1)
        .filter(v => v % 2 === 1);
    return answer;
}