function solution(arr, query) {
    var answer = arr;
    query.map((e,i) => {
        i % 2 === 0 ? arr.splice(e+1, arr.length-e) : arr.splice(0, e)
        console.log(arr)
    })
    return answer
}