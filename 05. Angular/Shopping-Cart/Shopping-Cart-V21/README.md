# Shopping Cart Application Version 21

## Overview

The goal of this task is to build a application that provides available products list and lets user to manage their cart providing easy to use UI.

### Product List Component

Displays available products in a responsive grid layout. Each product is presented in a Material Design card showing the product name, price, and an action button to add items to the cart. The grid automatically adjusts from multiple columns on desktop to a single column on mobile devices.

### Cart Component

Shows all items currently in the shopping cart with comprehensive management controls. Each cart item displays the product name, quantity, and total price. Users can increase or decrease quantities, remove individual items entirely, or clear the entire cart at once. The cart includes a scrollable container for the items list and displays the total cost at the bottom.

### Shared Service

shared service handles all internal implementation for adding & removing products. Both components inject the service and use service to handle operations. The cart is managed using a signal so when a product is added to cart it automatically updates the product component with latest quantity.

