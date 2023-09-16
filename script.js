/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
  {
    name: 'Rasberries',
    price: 4,
    quantity: 0,
    productId: 1,
    image: 'https://fruve.co.uk/cdn/shop/products/Raspberries_grande.jpg?v=1592936093'
  },
    
  {
    name: 'Apple',
    price: 1.50,
    quantity: 0,
    productId: 2,
    image: 'https://www.cmiapples.com/ecom_img/original-12-9-pinklady-single.jpg'
  },
    
  {
    name: 'Strawberries',
    price: 4.50,
    quantity: 0,
    productId: 3,
    image: 'https://www.naturespride.eu/media/tz2n1miw/aardbeien-productfoto.jpg?anchor=center&mode=crop&width=560&height=560&rnd=132442055056230000'
  }
  ];


/* Declare an empty array named cart to hold the items in the cart */

const cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

function addProductToCart(productId) {

     let product = products.find(product => product.productId === productId);
     product.quantity += 1;
     
     if (!cart.includes(product)) {
     

        cart.push(product);
     }
  }
  

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

  function increaseQuantity(productId) {

  const product = products.find((product) => product.productId === productId);
   ++product.quantity;
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

 function decreaseQuantity(productId) {

  const product = products.find((product) => product.productId === productId);
  --product.quantity;

  if (product.quantity === 0) {
  removeProductFromCart(productId);
  
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

 function removeProductFromCart(productId) {

  const index = cart.findIndex((product) => product.productId === productId);
  
  if (index !== -1) {

  cart[index].quantity = 0;

   cart.splice(index, 1);
  
}
}


/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function cartTotal() {

let totalPrice = 0;

for (let i = 0; i < cart.length; i++) {
  totalPrice += cart[i].quantity * cart[i].price;
  }

return totalPrice;

}

/* Create a function called emptyCart that empties the products from the cart */

  function emptyCart() {
    
  cart = [];

  }
  



/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
   let totalPaid = 0;

   function pay(amount) {
    totalPaid += amount;
    let remainingBalance = totalPaid - cartTotal();
    return remainingBalance;
    
    }

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

  
  
module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   
}
