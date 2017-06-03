describe('Deletes the plate selected...', function(){
  var data = ['CA-123 456', 'CA-654 321', 'CF-123 456', 'CL-123 456', 'CY-123 456'];

  it('deletes the selected plate and returns the new array list', function(){
    assert.equal('CA-654 321', 'CF-123 456', 'CL-123 456', 'CY-123 456', deletePlate('CA-123 456', data));
  });

});
