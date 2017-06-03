describe('Filtering plates by selected radio button', function() {
  var data = ['CA', 'CA', 'CF', 'CL', 'CY'];

  it('returns all the plates that start with "CA" if radio button Cape Town is checked', function() {
    assert.equal('CA', 'CA', filterPlates('cpt', data));
  });

  it('returns all the plate that start with "CL" if radio button Stellenbosch is checked', function() {
    assert.equal('CL', filterPlates('stell', data));
  });

  it('returns all the plates that start with "CY" if radio button Bellville is checked', function() {
    assert.equal('CY', filterPlates('bell', data));
  });

  it('returns all the plates that start with "CF" if radio button Kuilsriver is checked', function() {
    assert.equal('CF', filterPlates('kuil', data));
  });

  it('returns all the plates if no radio button or the all button is checked', function() {
    assert.equal('CA', 'CA', 'CF', 'CL', 'CY', filterPlates('all', data));
  });

});
