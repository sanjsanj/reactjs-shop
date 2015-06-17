#reactjs-shop

To run app:

```
$ npm install
$ npm start
$ open index.html
```

To run tests:

```
$ npm install
$ node_modules/karma/bin/karma start
```

Assumptions:

- Client wants all instances of a particular product to be removed from the cart when the user chooses remove

- Since there are no persisted user details every order has a £5 discount applied as if it were a first order

- Tier II and III discounts are compounded so if you spend more than £75 and have bought at least one footwear item you get £15 discount plus the £10 discount for spending more than £50 plus the £5 discount for a first order bringing the total discount to £30

Issues:

[SO - adding the right items to the cart](http://stackoverflow.com/questions/30865389/cart-not-adding-correct-item-in-react-js)

[Jest does not work with node 0.12](https://github.com/facebook/jest/issues/243)

Todo:

- Products other than the first one can not be added to cart when out of stock

- Change footwear test in discounts to look for string matcher
