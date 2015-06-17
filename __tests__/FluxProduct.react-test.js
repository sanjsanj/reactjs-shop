jest.dontMock('../js/components/FluxProduct.react.js');

var React = require('react/addons');
var FluxProduct = require('../js/components/FluxProduct.react.js');
var TestUtils = React.addons.TestUtils;

describe('FluxProduct', function() {

  it('renders each item as a li', function() {
    expect(items.length).toEqual(2);
  });

  it('displays the items count', function(){
    expect(count.getDOMNode().textContent).toEqual('2');
  });
});
