# Angular User Profile Management

A modern Angular application demonstrating user profile management with reactive programming using Angular signals, Material Design components, and lifecycle hooks.

## Overview

This application fetches user data from an external API and displays user profiles in an interactive card-based interface. Users can modify profile information and toggle user status with real-time visual feedback. The project serves as a practical demonstration of Angular's modern features including signals, standalone components, and lifecycle hooks.

## Requirements & Implementation Approach

The application follows a clean service-based architecture to fulfill all functional requirements:

**1. Service Layer (UserService)**
- Calls the DummyJSON API to fetch user data
- Formats and transforms the API response to match the application's data structure
- Manages state using Angular signals for reactive updates

**2. Data Flow**
- UserService retrieves raw data from the external API
- Response is mapped to UserInterface format with required fields (username, age, email, imageURL, status)
- Random status (Active/Inactive) is assigned to each user during transformation
- Formatted data is stored in a signal and made available to components

**3. Component Architecture**
- App component injects UserService and consumes the formatted data
- UserCard components receive individual user data via Input properties
- All UI requirements are fulfilled using the service-provided data
- Changes to user information trigger reactive updates throughout the application

This architecture ensures separation of concerns, making the code maintainable, testable, and scalable.

## What This Application Does

The application loads 15 user profiles from the DummyJSON API when it starts. Each user is displayed in a Material Design card showing their avatar, username, email, age, and status. Users can interact with these cards by editing usernames directly in the form field and toggling the user's status between Active and Inactive states.

When a user's status is toggled, the application displays an event notification card at the top of the page showing which user was modified and their new status. The user cards have color-coded borders - green for Active users and red for Inactive users - making it easy to see status at a glance.

The username field supports two-way data binding, meaning changes are immediately reflected in the display. The toggle status button is intelligently disabled when the username field is empty, preventing invalid actions.

## Requirements & Features Implemented

**Service Architecture & Data Management**
- ✓ UserService calls DummyJSON API to fetch user data
- ✓ API response is formatted and transformed to UserInterface structure
- ✓ Reactive state management using Angular signals throughout the application

**User Display & Interaction**
- ✓ Displays 15 user profiles with avatar, username, email, age, and status
- ✓ Username field is editable with two-way data binding
- ✓ Material Design cards for professional UI presentation
- ✓ Responsive grid layout that adapts to different screen sizes

**Status Management**
- ✓ Toggle functionality to switch between Active and Inactive states
- ✓ Color-coded borders (green for Active, red for Inactive)
- ✓ Toggle button disabled when username is empty (form validation)

**Event System & Communication**
- ✓ Child component emits events to parent when status changes
- ✓ Parent component displays event notification card with user details
- ✓ Real-time updates showing which user was modified and their new status

**Angular Features Demonstrated**
- ✓ Component communication using Input/Output decorators
- ✓ Lifecycle hooks: ngOnInit, ngAfterViewInit, ngOnChanges
- ✓ View queries: ViewChildren and ViewChild for DOM access
- ✓ Computed signals for automatic user count calculation
- ✓ Standalone component architecture