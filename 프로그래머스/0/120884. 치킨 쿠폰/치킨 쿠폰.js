function solution(chicken) {
  var answer = 0;
  var coupon = chicken;
  while(coupon >= 10){
    let e = coupon % 10
    coupon = parseInt( coupon / 10 ) + e;
    answer += coupon - e;
  }
  return answer
}