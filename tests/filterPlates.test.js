describe('Filtering plates by town...', function(){

  it('returns all the plates that start with "CA"', function(){
    assert.equal('CA-123 456, CA-222 344', filterPlates('cpt', 'CA-123 456, CL-123 456, CA-222 344'));
  });

  it('returns all the plate that start with "CL"', function(){
    assert.equal('CL-123 456, CL-222 333', filterPlates('stell', 'CL-123 456, CA-123 456, CL-222 333'));
  });

  it('returns all the plates that start with "CY"', function(){
    assert.equal('CY-123 456, CY-445 666', filterPlates('bell', 'CY-123 456, CF-123 456, CY-445 666'));
  });

  it('returns all the plates that start with "CF"', function(){
    assert.equal('CF-123 456, CF-456 789', filterPlates('kuil', 'CF-123 456, CY-123 456, CF-456 789'));
  });

});
