function solution(keyinput, board) {
    var value = [0,0]
    keyinput.map(e => {
        if(e === "left"){
            if(value[0] !== -(board[0]-1)/2){
                value[0]--
            }
            return
        }
        if(e === "right"){
            if(value[0] !== (board[0]-1)/2){
                value[0]++
            }
            return
        }
        if(e === "down"){
            if(value[1] !== -(board[1]-1)/2){
                value[1]--
            }
            return
        }
        if(e === "up"){
            if(value[1] !== (board[1]-1)/2){
                value[1]++
            }
            return
        }
    });
    return value
}