var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxCartConstants = require('../constants/FluxCartConstants');
var _ = require('underscore');

var _product = [], _selected = null;

function loadProductData(data) {
  _product = data;
  _selected = data[0];
  // _selected = data;
}

function setSelected(index) {
  _selected = _product[index];
}

var ProductStore = _.extend({}, EventEmitter.prototype, {

  getProduct: function() {
    return _product;
  },

  getSelected: function(){
    return _selected;
  },

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;

  switch(action.actionType) {

    case FluxCartConstants.RECEIVE_DATA:
      loadProductData(action.data);
      break;

    case FluxCartConstants.SELECT_PRODUCT:
      setSelected(action.data);
      break;

    default:
      return true;
  }

  ProductStore.emitChange();

  return true;

});

module.exports = ProductStore;
