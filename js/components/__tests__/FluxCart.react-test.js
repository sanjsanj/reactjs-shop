var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var expect = require('expect');
var FluxCart = require('../FluxCartApp.react');

describe('Cart', function () {
  it('loads in body', function () {
    var FluxCartNode = TestUtils.renderIntoDocument(<body />);
    expect(FluxCartNode).toExist();
  });
});
