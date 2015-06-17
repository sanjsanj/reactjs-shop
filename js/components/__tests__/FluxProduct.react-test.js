var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils'); //I like using the Test Utils, but you can just use the DOM API instead.
var expect = require('expect');
var FluxProduct = require('../FluxProduct.react'); //my root-test lives in components/__tests__/, so this is how I require in my components.

describe('Product list', function () {
  it('displays in body', function () {
    var FluxProductNode = TestUtils.renderIntoDocument(<body />);
    expect(FluxProductNode).toExist();
  });
});
