function solution(n) {
    var answer = 1;
    for(let i = 1; i < n; i++){
        if(n%i == 0){
            answer += 1;
        }
    }
    return answer;
}