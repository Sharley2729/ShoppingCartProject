# Shopping Cart Project - Udacity [Front End Web Development Nano Degree] Javascript
![Screenshot (27)](https://github.com/Sharley2729/ShoppingCartProject/assets/133542216/5d5852d9-8719-4e0d-bc13-c703c5129e59)

# Reviewer Feedback:

Dear student,

You did an excellent job! 🚀
All the specifications were met now, way to go! ⭐
Congratulations on finishing the Introduction to Programming Nanodegree Program! I hope you enjoyed your time here with us. I wish you all the best in your career as a developer.
Best wishes from Brazil!

# Project Summary

You will be creating the core functionality used for a storefront application. The visual of the storefront and the JavaScript necessary to connect the code you will write to that visual has already been created. Shopping carts are a fantastic tool for practicing JavaScript fundamentals.
First, think of the product list. You have learned about object literals. Objects are a perfect way to store product data, and you can use an array to collect those objects. Each product must be able to be added to the cart.
Next, we have the shopping cart. Carts usually have quite a bit of functionality. Once the cart is populated with products, you need to be able to increase or decrease the quantity or fully remove an item. The cart often displays the individual product totals and updates as the quantity changes.
Finally, there’s the checkout. For this project, assume it’s a cash-only storefront at a street market. The checkout should show the final amount due for all products in the cart. For any amount of cash received, the receipt should show what is still owed by the customer or how much should be returned to the customer if they gave more than the total due.

# Project Criteria
- All work on products, cart, and checkout are done in script.js.
- While viewing the live shop webpage, a user should be able to do the following:
- Add item to the cart:
- The first time an item is clicked, the item is added to the cart
- After the first time an item is clicked, the quantity is increased.
- Increase, decrease and remove an item from the cart :
- Decreasing when quantity is at 1 will remove the item from the cart.
- Remove will remove the item from the cart completely (even if quantity is greater than 1).
- A minimum of 3 products should be created.
- Each product object should include a unique name, price, quantity, productId, and image.
- All of the products should be in an array named products.
- Write JavaScript functions to implement cart functionality
- addProductToCart(productId) : gets the product using the productId and checks if the product is already in the array. If the product is in the cart, the product quantity is increased. If not, the product is added to cart.
- increaseQuantity(productId): gets product using the productId and increases product quantity.
- decreaseQuantity(productId): gets product using the productId and decreases product quantity.
- removeProductFromCart(productId) : gets product using the productId and removes it entirely from the cart.
- All functions should be created using function declaration.
- Javascript functions are created to implement required functionality:
- cartTotal(): calculates and returns the cost of all items in the cart.
- pay(amount): takes in an amount from the text field and checks if the amount is greater or less than the value of cartTotal. Returns the positive or negative difference.
- All functions should be created using function declaration.
- A global variable is created to hold the value of the remaining balance.

