function solution(a, b, c, d) {
    var arr = [a, b, c, d];
    //같은 값
    var sameNum = [...new Set(arr.filter((e,i) => arr.indexOf(e) !== i))]
    //같은 값이 나온 주사위의 개수
    var sameCount = sameNum.length
    if(sameNum.length === 1){
        sameCount = arr.filter(e => e === sameNum[0]).length;
    }
    switch(sameCount){
        case 0 : 
            return Math.min(...arr);
        case 2 :
            if(sameNum.length === 1){
                let differentNum = arr.filter(e => e !== sameNum[0]);
                return differentNum[0]*differentNum[1]  
            }else{
                return (sameNum[0]+sameNum[1])*(Math.abs(sameNum[0]-sameNum[1]))
            }
        case 3 : 
            let differentNum = arr.filter(e => e !== sameNum[0]);
            return (10*sameNum[0]+differentNum[0])**2
        case 4 : 
            return 1111 * a
    }
}