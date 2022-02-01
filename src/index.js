module.exports = function reverse () {
  it('Should return 8965 when 5698 given', () => {
    const reversed = reverse(5698);
    return(reversed)
    assert.equal(reversed, 8965);
  });
}