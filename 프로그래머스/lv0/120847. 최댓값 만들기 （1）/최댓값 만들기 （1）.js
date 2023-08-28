function solution(numbers) {
    new_numbers = [...numbers.sort((a,b) => a-b)]
    var answer = new_numbers[new_numbers.length-1] * new_numbers[new_numbers.length-2];
    return answer;
}