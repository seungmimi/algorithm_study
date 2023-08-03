//1. 최대 공약수 구하기
function gr(a, b){
    return a % b === 0 ? b : gr(b,a % b)
}
function solution(denum1, num1, denum2, num2) {
    let denum = denum1 * num2 + denum2 * num1;
    let num = num1 * num2;
    let gcd = gr(denum, num);
    
    // 최대 공약수를 분자 분모에 나누고 배열에 넣기
    return [denum / gcd, num / gcd]
}