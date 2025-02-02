# Dashboard test task
Deploy: [https://dashboard-gilt-pi.vercel.app/](https://dashboard-gilt-pi.vercel.app/)

This project is built using Next.js 15 with Server-Side Rendering (SSR). It provides a structured and efficient way to fetch, display, and filter data while maintaining state through URL parameters.

## Features

- **Data Fetching from Server:** The application retrieves data dynamically from the server.

- **Environment Variables:** The API URL and other configurations are stored in .env for security and flexibility.

- **Search Functionality:**

    - Implements a debounced search when typing in the search input field.

    - Supports search on submit button click for instant filtering.

- **App Routing:** Utilizes Next.js App Router for optimized navigation.

- **Pagination System:**

    - Allows users to select the number of items per page.

    - Supports page navigation using "Next" and "Previous" buttons.

- **Component-based Architecture:**

    - Code is modularized into reusable components.

    - Utilizes custom hooks for managing and updating search parameters.

- **State Management via URL SearchParams:**

    - Search query, selected number of products per page, and the current page are stored in URL parameters.

    - This ensures that the page state is restored upon refresh or when shared.

## Installation

1. Clone the repository:

```
git clone https://github.com/iyehorova/dashboard.git
```

2. Navigate to the project folder:

```
cd dashboard
```

3. Install dependencies:

```
npm install
```
4. Create a .env file and configure your API URL by copy .env.example:

```
cp .env.example .env
```

5. Update the values in the .env file.

```
# example
BASE_URL=https://api-endpoint.com
```

6. Start the development server:

```
npm run dev
```

## Technologies Used

- Next.js 15 (with SSR)

- React

- TypeScript

- Custom Hooks

- Environment Variables (.env)

- Debounce for Search Optimization

