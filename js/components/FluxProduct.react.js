var React = require('react');
var FluxCartActions = require('../actions/FluxCartActions');

var FluxProduct = React.createClass({

  addToCart: function(event){
    var id = this.props.selected.id;
    var update = {
      name: this.props.product.name,
      category: this.props.selected.category,
      price: this.props.selected.price
    }
    FluxCartActions.addToCart(id, update);
    FluxCartActions.updateCartVisible(true);
  },

  render: function() {
    var self = this;
    var products = this.props.product;
    var stockAvailable = (this.props.selected.id in this.props.cartitems) ? this.props.selected.stock - this.props.cartitems[this.props.selected.id].quantity : this.props.selected.stock;
    return (
      <ul>
      {Object.keys(products).map(function(product){
      return (
        <li key={product}>
          <div className="flux-product">
            <img src={'img/' + products[product].image}/>
            <div className="flux-product-detail">
              <h1 className="name">{products[product].name}</h1>
              <p className="category">{products[product].category}</p>
              <p className="description">{products[product].description}</p>
              <p className="price">Price: ${products[product].price}</p>
              <button type="button" onClick={self.addToCart} disabled={stockAvailable  > 0 ? '' : 'disabled'}>
                {stockAvailable > 0 ? 'Add To Cart' : 'Sold Out'}
              </button>
            </div>
          </div>
        </li>
        )
        })}
      </ul>
    );
  },

});

module.exports = FluxProduct;
