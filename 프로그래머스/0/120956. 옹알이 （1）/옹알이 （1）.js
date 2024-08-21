function solution(babbling) {
  let babblingList = ["aya", "ye", "woo", "ma"]
  var answer = 0;
  for(let el of babbling){
    let text = el
    babblingList.map(e => {
      text = text.replace(e, " ");
      return text
    })
    if(!text.replace(/\s/g, '')){
      answer++
    }
  }
  return answer
}