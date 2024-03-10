# Product widgets



Product Widget Frontend Service
This repository contains a React/Typescript application developed using Vite, aimed at enabling users to display and customize product widgets along with their settings.

Features
Product Widget Component: The core component responsible for rendering product widgets fetched from the provided API endpoint.

Customization: Users can customize their widgets by modifying settings such as "Link to Public Profile", "Active Badge Color", and activating badges.

State Management: React Context API is employed for managing the state of the application, facilitating seamless updates and interactions.

Testing: Simple unit tests have been implemented to ensure the stability and functionality of the user interface.

Clone the repository: git clone <repository-url>

Install dependencies: npm install or yarn install

Run the development server: npm run dev or yarn dev

Access the application via the provided localhost address.

```yarn install```
```yarn dev```


## Testing

The test suite utilizes vitest for React component testing. It verifies the rendering and content of a ProductWidget component with different settings.

For each test case:

It renders a ProductWidget component with specific properties (type, amount, action, etc.).
It asserts the presence of specific text content within the rendered component based on the provided settings.
These tests ensure that the ProductWidget component correctly displays information based on different configurations such as product type, quantity, and associated actions.

- Run tests like this:

```
yarn test
```

