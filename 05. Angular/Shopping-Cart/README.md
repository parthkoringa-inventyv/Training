# Shopping Cart Application

## Task Overview

The goal of this task is to build a shopping cart application that displays a list of available products and allows users to manage their cart through an intuitive UI.

The implementation must be provided in **three Angular Versions**, demonstrating different architectural approaches:

- **Angular 16** – NgModule-based architecture (`app.module.ts`)
- **Angular 18** – Standalone components using Observables
- **Angular 21** – State management using Signals

---

## Product List Component

- Displays available products in a responsive grid layout
- Uses Material Design cards to show:
  - Product name
  - Price
  - “Add to Cart” button
- Grid adapts from multiple columns on desktop to a single column on mobile

---

## Cart Component

- Displays all items currently added to the cart
- Each cart item shows:
  - Product name
  - Quantity
  - Total price per item
- Provides controls to:
  - Increase quantity
  - Decrease quantity
  - Remove individual items
  - Clear the entire cart
- Cart items are displayed in a scrollable container
- Total cart cost is shown at the bottom

---

## Shared Cart Service

- Centralized service responsible for cart state management
- Handles:
  - Adding products
  - Removing products
  - Updating quantities
  - Calculating totals
- Injected and consumed by both Product List and Cart components
