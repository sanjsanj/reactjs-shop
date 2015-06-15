var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxCartConstants = require('../constants/FluxCartConstants');

var FluxCartActions = {

  receiveProduct: function(data) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.RECEIVE_DATA,
      data: data
    })
  },

  selectProduct: function(index){
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.SELECT_PRODUCT,
      data: index
    })
  },

  addToCart: function(id, update){
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.CART_ADD,
      id: id,
      update: update
    })
  },

  removeFromCart: function(id){
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.CART_REMOVE,
      id: id
    })
  },

  updateCartVisible: function(cartVisible){
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.CART_VISIBLE,
      cartVisible: cartVisible
    })
  }
};

module.exports = FluxCartActions;
