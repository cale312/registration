describe('Filtering plates by town...', function(){

  it('returns all the plates that start with "CA"', function(){
    assert.equal('CA-123 456, CA-222 344', filterTown('cpt'));
  });

  it('returns all the plate that start with "CL"', function(){
    assert.equal('CL-123 456, CL-222 333', filterTown('stell'));
  });

  it('returns all the plates that start with "CY"', function(){
    assert.equal('CY-123 456, CY-445 666', filterTown('bell'));
  });

  it('returns all the plates that start with "CF"', function(){
    assert.equal('CF-123 456, CF-456 789', filterTown('kuil'));
  });

});
