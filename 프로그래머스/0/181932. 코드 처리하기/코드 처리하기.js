function solution(code) {
    let mode = 0
    let ret = []
    code.split("").map((e,i) => {
       if(e === "1"){
          mode = mode === 0 ? 1 : 0
       }else{
           if(mode && i%2 === 1){
               ret.push(e)
           }else if(mode === 0 && i%2 === 0){
               ret.push(e)
           }
        }
    });
    ret = ret.length === 0 ? "EMPTY" : ret.join("")
    return ret
}