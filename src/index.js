module.exports = function reverse (n) {
  let res = n.toString().split('');
  if (res[0] === '-') {
      res.splice(0,1);
  }
  return +res.reverse().join('');
}

const result = reverse(341);
console.log(result);
console.log(typeof(re));
