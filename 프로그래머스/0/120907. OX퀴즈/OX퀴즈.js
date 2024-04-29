function solution(quiz) {
    var answer = [];
    quiz.map(e => {
        const arr = e.split(' ');
        if(arr[1] === "+"){
            parseInt(arr[0]) + parseInt(arr[2]) === parseInt(arr[4]) ? answer.push("O") : answer.push("X");
        }else{
            console.log(arr);
            parseInt(arr[0]) - parseInt(arr[2]) === parseInt(arr[4]) ? answer.push("O") : answer.push("X");
        }
    });
    return answer;
}