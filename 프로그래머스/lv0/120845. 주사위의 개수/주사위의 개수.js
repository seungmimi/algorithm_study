function solution(box, n) {
    let answer = 1;
    box.forEach(e =>{
        answer = answer * parseInt(e/n);
    })
    return answer;
}