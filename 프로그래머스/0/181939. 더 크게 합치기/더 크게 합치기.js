function solution(a, b) {
    return a.toString()+b.toString() > b.toString()+ a.toString() ? parseInt(a.toString()+b.toString()) : parseInt(b.toString()+ a.toString());
}