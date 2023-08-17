function solution(age) {
    let numAge = age.toString();
    let sample = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    let answer = [...numAge].map( e => e = sample[e]).join('');
return answer;
}