function solution(before, after) {
  console.log([...before])
  return [...before].sort().join("") ===  [...after].sort().join("") ? 1 : 0
}