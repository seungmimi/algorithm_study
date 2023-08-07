function solution(array) {
    let len = array.length;
    let answer = array.sort((a,b) => a-b).at(parseInt(array.length / 2));
    
    return answer;
}