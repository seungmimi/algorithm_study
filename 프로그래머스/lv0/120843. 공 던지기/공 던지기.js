function solution(numbers, k) {
    let answer = 0;
    let num = 0;
    if(k==1){
        answer = 1;
    }else {
        num = k*2 - 1;
    }

    if (num<=numbers.length){
        answer = num;
    }else{
        answer = numbers[2*(k-1)% numbers.length];
    }
    return answer;
}