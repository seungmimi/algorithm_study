function solution(number, n, m) {
    console.log(number % n, number % m)
    return number % n === 0 && number % m === 0 ? 1 : 0;
}