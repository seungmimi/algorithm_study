function solution(num, total) {
let answer = [];
    if(num === 1){
        return [total]
    }
      let center = total / num;
      if (num % 2 === 0) {
        let halfNum = (num-1) / 2;
        let range = [0, 1];
        range[0] = parseInt(center - halfNum);
        range[1] = parseInt(center + halfNum);
        let i = range[0];
        while (i <= range[1]) {
          answer.push(i);
          i++;
        }
      } else {
        let halfNum = (num - 1) / 2;
        let range = [0, 1];
        range[0] = parseInt(center) - halfNum;
        range[1] = parseInt(center) + halfNum;
        let i = range[0];
        while (i <= range[1]) {
          answer.push(i);
            if(i === range[1]){
                break;
            }
          i++;
        }
      }
    return answer;
}