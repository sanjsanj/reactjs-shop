# reactjs-shop

To run:

```
npm start
open index.html
```
Assumptions:

- Client wants all instances of a particular product to be removed from the cart when the user chooses remove

- Since there are no persisted user details every order has a £5 discount applied as if it were a first order

- Tier II and III discounts are compounded so if you spend more than £75 and have bought at least one footwear item you get £15 discount plus the £10 discount for spending more than £50 plus the £5 discount for a first order bringing the total discount to £30

Issues:

[SO - adding the right items to the cart](http://stackoverflow.com/questions/30865389/cart-not-adding-correct-item-in-react-js)
