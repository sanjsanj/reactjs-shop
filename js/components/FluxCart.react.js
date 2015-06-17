var React = require('react');
var FluxCartActions = require('../actions/FluxCartActions');

var FluxCart = React.createClass({

  closeCart: function(){
    FluxCartActions.updateCartVisible(false);
  },

  openCart: function(){
    FluxCartActions.updateCartVisible(true);
  },

  removeFromCart: function(id){
    FluxCartActions.removeFromCart(id);
    FluxCartActions.updateCartVisible(false);
  },

  render: function() {
    var self = this;
    var products = self.props.products;
    return (
      <div className={"flux-cart " + (this.props.visible ? 'active' : '')}>
        <div className="mini-cart">
          <button type="button" className="close-cart" onClick={this.closeCart}>×</button>
          <ul>
            {Object.keys(products).map(function(product){
              return (
                <li key={product}>
                  <h1 className="name">{products[product].quantity} x {products[product].name}</h1>
                  <p className="category">{products[product].category}</p>
                  <p className="price">£{(products[product].price * products[product].quantity).toFixed(2)}</p>
                  <button type="button" className="remove-item" onClick={self.removeFromCart.bind(self, product)}>Remove</button>
                </li>
              )
            })}
          </ul>
          <p className="discount">Discount: £{this.props.discount}</p>
          <p className="total">Total: £{this.props.total}</p>
        </div>
        <button type="button" className="view-cart" onClick={this.openCart} disabled={Object.keys(this.props.products).length > 0 ? "" : "disabled"}>View Cart ({this.props.count})</button>
      </div>
    );
  },

});

module.exports = FluxCart;
