function solution(array, n) {
    var answer = array.reduce((acc,cur) => Math.abs(n - cur) < Math.abs(n - acc) ? cur : Math.abs(n - cur)=== Math.abs(n - acc) ? Math.min(acc,cur): acc , 1000);
    return answer;
}