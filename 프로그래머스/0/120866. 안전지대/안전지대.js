    function solution(board) {
      var answer = 0;
      board.map((arrE,arrI) => {
        arrE.map((objE,objI) => {
          if(objE === 1){
            let xPoint = objI
            let yPoint = arrI
            if(xPoint > 0){
              arrE[objI-1] = arrE[objI-1] === 1 ? 1 : -1
              if(yPoint > 0){
                board[arrI-1][objI-1] = board[arrI-1][objI-1] === 1 ? 1 : -1
                board[arrI-1][objI] = board[arrI-1][objI] === 1 ? 1 : -1
              }
              if(yPoint < board.length-1){
                board[arrI+1][objI-1] = board[arrI+1][objI-1] === 1 ? 1 : -1
                board[arrI+1][objI] = board[arrI+1][objI] === 1 ? 1 : -1
              }
            }
            if(xPoint < board.length-1){
              arrE[objI+1] =  arrE[objI+1] === 1 ? 1 : -1
              if(yPoint > 0){
                board[arrI-1][objI+1] = board[arrI-1][objI+1] === 1 ? 1 : -1
                board[arrI-1][objI] = board[arrI-1][objI] === 1 ? 1 :  -1
              }
              if(yPoint !== board.length-1){
                board[arrI+1][objI+1] = board[arrI+1][objI+1] === 1 ? 1 : -1
                board[arrI+1][objI] = board[arrI+1][objI] === 1 ? 1 : -1
              }
            }
          }
        })
      })
      board.map(e => {
        answer += e.filter(obj => obj === 0).length
      })
      return answer;
    }