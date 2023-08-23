function solution(numbers, direction) {
    let answer = [];
    let num = 0;
    
    if(direction == 'right'){
       num = numbers.pop();
       numbers.unshift(num);
       answer = numbers;
    }else{
       num = numbers.shift();
       numbers.push(num)
       answer = numbers;
    }
    return answer;
    
    /*
    1. right 이면 뒤에서 꺼내서(pop) 앞으로 넣기(unshift)
    2. left이면 앞에서 꺼내서(shift) 뒤로 넣기(push)
    */
}