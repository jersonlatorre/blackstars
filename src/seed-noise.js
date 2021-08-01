function frac(n) {
  return n - Math.floor(n)
}

function rand(n) {
  return frac(Math.sin(n) * 43758.5453)
}