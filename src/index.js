
module.exports = function reverse () {
  const assert = require('assert');

  it('Should return 345 when 543 given', () => {
    const reverse = reverse(543);
    return(reverse)
    assert.equal(reverse, 345);
  });

}

