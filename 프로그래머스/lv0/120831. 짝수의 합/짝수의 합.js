function solution(n) {
    var answer = 0;
    
    //1. n 이하의 짝수 -> 
    if(!(n == 1)){
        for(let i = 1; i< parseInt(n / 2)+1; i++){
            answer += (i*2);
        }
        return answer;
    }else{
        return answer;
    }
}