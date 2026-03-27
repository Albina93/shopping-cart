# Dynamic Shopping Cart

This application will allow users to add, update, and remove items dynamically while keeping track of the total price.
I used document.createElement() to create new elements like list and button. Then added content using textContent, and finally used .append() to add them to the cart.
I made sure to convert price to a number using parseFloat, store the price in dataset for each item, and used one function to update the total when adding or removing items.
I validated inputs by checking for empty name, negative prices before adding items.
Challenging part was trying to avoid NaN errors in total.
