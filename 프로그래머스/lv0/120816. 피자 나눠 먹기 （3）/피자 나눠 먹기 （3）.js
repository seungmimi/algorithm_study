function solution(slice, n) {
    let answer = 0;
    if(slice > n){
        answer = 1;
        return answer;
    }else{
        answer = n % slice == 0 ? n/slice : parseInt(n/slice) + 1;
        return answer;
    }
    
}