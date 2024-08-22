    function solution(a, b) {
      var answer = 1;
      var changeA = a;
      let newB = b + b;
      if(a === b){
        return 0
      }
      if(newB.includes(a)){
        while(a.length > answer){
        changeA = changeA.slice(-1) + changeA.slice(0, -1);
        if(changeA === b){
          console.log(answer)
          return answer
          break;
        }
        answer++
      }
      return answer;
      } else {
        return -1
      }
    }