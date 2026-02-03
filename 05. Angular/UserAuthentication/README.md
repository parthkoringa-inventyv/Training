# User Authentication Task

## Project Overview
This is a frontend authentication system built with Angular that demonstrates modern Angular concepts and best practices. The application uses a fake API from Platzi for authentication and user data management.
**Note:** This task is designed to be implemented in three different Angular versions:
- **Angular 16** 
- **Angular 18**
- **Angular 21**


## Concepts Implemented

### 1. **Routing & Navigation**
- Angular Router for navigation between pages
- Route configuration with parent and child routes
- RouterLink and RouterLinkActive for navigation
- Router outlet for rendering components

### 2. **Route Guards**
- Authentication Guard (CanActivate) to protect routes
- Preventing unauthorized access to protected pages
- Automatic redirection based on authentication status

### 3. **HTTP Client**
- Making HTTP requests to external API
- POST requests for authentication
- GET requests for fetching user data
- HttpClient service injection

### 4. **HTTP Interceptors**
- Automatic token injection in HTTP request headers
- Intercepting outgoing requests
- Adding Authorization headers to authenticated requests

### 5. **Services**
- Authentication Service for managing authentication logic
- Token management (save, retrieve, remove)
- Centralized business logic
- Service injection using dependency injection

### 6. **Local Storage**
- Storing authentication tokens
- Persisting user session across page refreshes
- Token retrieval for authentication checks

## Application Workflow

### 1. **Initial Load**
- User lands on the application
- Router checks the current route
- If route is protected, AuthGuard is triggered
- Unauthenticated users are redirected to login page

### 2. **Login Process**
- User enters email and password on login page
- Login component calls AuthService
- AuthService makes HTTP POST request to API
- API returns access_token and refresh_token
- Tokens are stored in localStorage
- User is redirected to home page

### 3. **Protected Routes Access**
- User navigates to home or profile page
- AuthGuard checks if token exists in localStorage
- If token exists, access is granted
- If no token, user is redirected to login

### 4. **Authenticated Requests(header with token)**
- User accesses profile page
- Component makes HTTP GET request to fetch user data
- HTTP Interceptor automatically adds Authorization header with token
- API validates token and returns user data
- User information is displayed on the page

### 5. **Navigation**
- Authenticated users see navbar with navigation links
- Navbar is shared across home and profile pages
- Users can navigate between pages without re-authentication
- Active route is highlighted in navbar

### 6. **Logout Process**
- User clicks logout button in navbar
- AuthService removes tokens from localStorage
- User is redirected to login page
- Protected routes become inaccessible again
