describe('Get the plate number input...', function(){

  it('returns the plate thats been input in the textbox', function(){
    assert.equal('CA-123 456', getPlate('CA-123 456'));
  });

});
