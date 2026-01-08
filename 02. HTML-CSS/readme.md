# HTML-CSS Task: Split-Screen Login/Register Page

## Project Overview
This project demonstrates a responsive split-screen layout with a tabbed authentication interface, built using only HTML and CSS without any JavaScript. 

## Task Requirements

### Layout Structure
- **Two-Section Design**: The page is divided into left and right sections with a 70:30 ratio
  - Left section occupies 70% of the screen width
  - Right section occupies 30% of the screen width

### Left Section
- **Centered Content**: All content should be vertically and horizontally centered
- **Logo Display**: A circular image logo positioned at the top
- **Description Text**: 3-4 lines of descriptive text below the logo explaining the brand or providing context

### Right Section
- **Tabbed Interface**: A centered tab view with two tabs - "Login" and "Register"
- **Dynamic Form Display**: Content changes based on the selected tab

#### Login Tab Requirements:
- Username input field
- Password input field
- "Forget password" link
- Login button

#### Register Tab Requirements:
- Username input field
- Email input field
- Password input field
- Confirm password input field
- "Already have an account" link
- Register button

### Technical Constraints
1. **Pure HTML & CSS Only**: No JavaScript or any scripting language allowed
2. **Tab Switching Mechanism**: Must be implemented using CSS-only techniques
3. **Interactive Elements**: All links and buttons should modify the URL by appending a hash (#) at the end
4. **Responsive Design**: The layout should adapt gracefully to different screen sizes

## Key Features

### Tab switching using CSS Radio Button
The tab switching functionality is achieved using hidden radio buttons and CSS sibling selectors, allowing for state management without JavaScript.

### Responsive Behavior
The layout includes media queries to ensure the interface works well on various screen sizes, typically stacking sections vertically on smaller devices. all measures are dynamic nothing is static using pixel measures.

## Implementation Highlights

- **Flexbox Layout**: Used throughout for centering and responsive alignment
- **Display Toggle**: Forms are hidden/shown using CSS `display` property based on radio button state
- **URL Modification**: Anchor tags and form action with href="#identifier" to change URL without page reload

---