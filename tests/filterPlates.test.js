describe('Filtering plates by selected radio button', function() {
  var data = ['CA', 'CA', 'CF', 'CL', 'CY'];

  it('returns all the plates that start with "CA"', function() {
    assert.equal('CA', 'CA', filterPlates('cpt', data));
  });

  it('returns all the plate that start with "CL"', function() {
    assert.equal('CL', filterPlates('stell', data));
  });

  it('returns all the plates that start with "CY"', function() {
    assert.equal('CY', filterPlates('bell', data));
  });

  it('returns all the plates that start with "CF"', function() {
    assert.equal('CF', filterPlates('kuil', data));
  });

  it('returns all the plates', function() {
    assert.equal('CA', 'CA', 'CF', 'CL', 'CY', filterPlates('all', data));
  });

});
