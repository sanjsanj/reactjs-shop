var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var expect = require('expect');
var FluxProduct = require('../FluxProduct.react');

describe('Product list', function () {
  it('loads in body', function () {
    var FluxProductNode = TestUtils.renderIntoDocument(<body />);
    expect(FluxProductNode).toExist();
  });
});
