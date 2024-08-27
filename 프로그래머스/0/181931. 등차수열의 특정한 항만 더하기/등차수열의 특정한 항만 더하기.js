function solution(a, d, included) {
    var answer = 0;
    included.map((e,i) => {
        if(e){
            answer += a + (d * i)
        }
    })
    
    return answer;
}