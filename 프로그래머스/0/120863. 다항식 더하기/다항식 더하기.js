function solution(polynomial) {
    const arr = polynomial.split(" + ");
    const xNum = arr
                .filter(n => n.includes("x"))
    			 // x가 포함되어있다면 replace() 메서드를 이용해 x를 제거해주고
      			// 만약 x를 제거하였는데 공백일 경우 "1"을 넣어준다.
                .map(n => n.replace('x', '') || '1')
                .reduce((acc, cur) => acc + parseInt(cur, 10), 0);
    const num = arr
                .filter(n => !isNaN(n))
                .reduce((acc, cur) => acc + parseInt(cur, 10), 0);

    let answer = [];
    if(xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
    if(num) answer.push(num);

    return answer.join(" + ");
}