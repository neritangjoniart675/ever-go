/**
 * Filename: ComplexJavaScriptCode.js
 * 
 * Description: This JavaScript code is a simulation of an online shopping cart system. It provides functionalities such as adding items to the cart,
 *              removing items from the cart, calculating the total price, applying discounts, and performing checkout operations.
 * 
 * Author: John Doe
 * Date: January 1, 2022
 */

// Declare a class for representing a product
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// Declare a class for representing the shopping cart
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  // Add an item to the cart
  addItem(item) {
    this.items.push(item);
  }

  // Remove an item from the cart
  removeItem(item) {
    const index = this.items.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  // Calculate the total price of items in the cart
  calculateTotalPrice() {
    let totalPrice = 0;
    this.items.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice;
  }

  // Apply a discount to the total price
  applyDiscount(discountPercentage) {
    const totalPrice = this.calculateTotalPrice();
    const discountAmount = totalPrice * (discountPercentage / 100);
    return totalPrice - discountAmount;
  }

  // Checkout the cart and process payment
  checkout() {
    const totalPrice = this.calculateTotalPrice();
    // Code here for processing payment and completing the checkout process
    console.log(`Checkout completed. Total price: ${totalPrice}`);
  }
}

// Create product instances
const product1 = new Product(1, "Shirt", 25.99);
const product2 = new Product(2, "Jeans", 59.99);
const product3 = new Product(3, "Shoes", 79.99);
const product4 = new Product(4, "Hat", 14.99);

// Create a shopping cart instance
const shoppingCart = new ShoppingCart();

// Add items to the cart
shoppingCart.addItem(product1);
shoppingCart.addItem(product2);
shoppingCart.addItem(product3);
shoppingCart.addItem(product4);

// Remove an item from the cart
shoppingCart.removeItem(product2);

// Calculate and display the total price
const totalPrice = shoppingCart.calculateTotalPrice();
console.log(`Total Price: ${totalPrice.toFixed(2)}`);

// Apply a discount and display the discounted price
const discountedPrice = shoppingCart.applyDiscount(10);
console.log(`Discounted Price: ${discountedPrice.toFixed(2)}`);

// Checkout the cart
shoppingCart.checkout();