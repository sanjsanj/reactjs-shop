var React = require('react');
var FluxCartActions = require('../actions/FluxCartActions');

var FluxProduct = React.createClass({

  addToCart: function(event){
    // var id = this.props.selected.id;
    var id = this.props.selected.id;
    var update = {
      name: this.props.selected.name,
      category: this.props.selected.category,
      price: this.props.selected.price
    }
    FluxCartActions.addToCart(id, update);
    FluxCartActions.updateCartVisible(true);
  },

  render: function() {
    var self = this;
    var products = this.props.product;
    console.log(products);
    var stockAvailable = (this.props.selected.id in this.props.cartitems) ? this.props.selected.stock - this.props.cartitems[this.props.selected.id].quantity : this.props.selected.stock;
    return (
      <ul>
      {Object(products).map(function(product){
      return (
        <li key={product}>
          <div className="flux-product">
            <img src={'img/' + product.image}/>
            <div className="flux-product-detail">
              <h1 className="name">{product.name}</h1>
              <p className="category">{product.category}</p>
              <p className="description">{product.description}</p>
              <p className="price">Price: ${product.price}</p>
              <button type="button" onClick={self.addToCart.bind(self, product)} disabled={stockAvailable  > 0 ? '' : 'disabled'}>
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
