var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxCartConstants = require('../constants/FluxCartConstants');
var _ = require('underscore');

var _products = {}, _cartVisible = false;

function add(id, update){
  update.quantity = id in _products ? _products[id].quantity + 1 : 1;
  _products[id] = _.extend({}, _products[id], update)
}

function setCartVisible(cartVisible){
  _cartVisible = cartVisible;
}

function removeItem(id){
  delete _products[id];
}

var CartStore = _.extend({}, EventEmitter.prototype, {

  getCartItems: function(){
    return _products;
  },

  getCartCount: function(){
    return Object.keys(_products).length;
  },

  getCartTotal: function(){
    var total = 0;
    for(product in _products){
      if(_products.hasOwnProperty(product)){
        total += _products[product].price * _products[product].quantity;
      }
    }
    return total.toFixed(2);
  },

  getCartVisible: function(){
    return _cartVisible;
  },

  emitChange: function(){
    this.emit('change');
  },

  addChangeListener: function(callback){
    this.on('change', callback);
  },

  removeChangeListener: function(callback){
    this.removeListener('change', callback);
  }
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  var text;

  switch(action.actionType){

    case FluxCartConstants.CART_ADD:
      add(action.id, action.update);
      break;

    case FluxCartConstants.CART_VISIBLE:
      setCartVisible(action.cartVisible);
      break;

    case FluxCartConstants.CART_REMOVE:
      removeItem(action.id);
      break;

    default:
      return true;
  }

  CartStore.emitChange();

  return true;

});

module.exports = CartStore;
