module.exports = function reverse () {
  const assert = require('assert');

  it('Should return 345 when 543 given', () => {
    const reversed = reverse(543);
    return(reversed)
    assert.equal(reversed, 345);
  });
}