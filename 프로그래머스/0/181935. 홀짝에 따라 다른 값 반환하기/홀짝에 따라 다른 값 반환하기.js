function solution(n) {
    var answer = 0;
    if(n % 2 === 0){
        for(let i = 0; i < n; i ++){
            i % 2 === 0 ?  answer += (i+2) ** 2 : ""
        }
    }else{
        for(let i = 0; i <= n; i ++){
            i % 2 === 0 ?  "" : answer += i
        }
    }
    
    return answer;
}