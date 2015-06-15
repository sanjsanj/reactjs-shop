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

  selectVariant: function(event){
    FluxCartActions.selectProduct(event.target.value);
  },

  render: function() {
    var ats = (this.props.selected.id in this.props.cartitems) ?
      this.props.selected.stock - this.props.cartitems[this.props.selected.id].quantity :
      this.props.selected.stock;
    return (
      <div className="flux-product">
        <img src={'img/' + this.props.product.image}/>
        <div className="flux-product-detail">
          <h1 className="name">{this.props.product.name}</h1>
          <p className="description">{this.props.product.description}</p>
          <p className="price">Price: ${this.props.selected.price}</p>
          <button type="button" onClick={this.addToCart} disabled={ats  > 0 ? '' : 'disabled'}>
            {ats > 0 ? 'Add To Cart' : 'Sold Out'}
          </button>
        </div>
      </div>
    );
  },

});

module.exports = FluxProduct;
