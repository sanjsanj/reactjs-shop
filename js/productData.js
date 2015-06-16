module.exports = {
  init: function() {
    localStorage.clear();
    localStorage.setItem('product', JSON.stringify([
      {
        id: 001,
        name: 'Almond Toe Court Shoes, Patent Black',
        category: 'Women\'s Footwear',
        image: '',
        price: 99.00,
        stock: 5
      },
      {
        id: 002,
        name: 'Suede Shoes, Blue',
        category: 'Women\'s Footwear',
        image: '',
        price: 42.00,
        stock: 4
      },
      {
        id: 003,
        name: 'Leather Driver Saddle Loafers, Tan',
        category: 'Men\'s Footwear',
        image: '',
        price: 34.00,
        stock: 12
      },
      {
        id: 004,
        name: 'Flip Flops, Red',
        category: 'Men\'s Footwear',
        image: '',
        price: 19.00,
        stock: 6
      },
      {
        id: 005,
        name: 'Flip Flops, Blue',
        category: 'Men\'s Footwear',
        image: '',
        price: 19.00,
        stock: 0
      },
      {
        id: 006,
        name: 'Gold Button Cardigan, Black',
        category: 'Women\'s Casualwear',
        image: '',
        price: 167.00,
        stock: 6
      },
      {
        id: 007,
        name: 'Cotton Shorts, Medium Red',
        category: 'Women\'s Casualwear',
        image: '',
        price: 30.00,
        stock: 5
      },
      {
        id: 000,
        name: 'Fine Stripe Short Sleeve ￼Shirt, Grey',
        category: 'Men\'s Casualwear',
        image: '',
        price: 49.99,
        stock: 9
      },
      {
        id: 014,
        name: 'Fine Stripe Short Sleeve Shirt, Green',
        category: 'Men\'s Casualwear',
        image: '',
        price: 39.99,
        stock: 3
      },
      {
        id: 010,
        name: 'Sharkskin Waistcoat, Charcoal',
        category: 'Men\'s Formalwear',
        image: '',
        price: 75.00,
        stock: 2
      },
      {
        id: 011,
        name: 'Lightweight Patch Pocket Blazer, Deer',
        category: 'Men\'s Formalwear',
        image: '',
        price: 175.00,
        stock: 1
      },
      {
        id: 012,
        name: 'Bird Print Dress, Black',
        category: 'Women\'s Formalwear',
        image: '',
        price: 270.00,
        stock: 10
      },
      {
        id: 013,
        name: 'Mid Twist Cut-Out Dress, Pink',
        category: 'Women\'s Formalwear',
        image: '',
        price: 540.00,
        stock: 5
      }
    ]));
  }

};
