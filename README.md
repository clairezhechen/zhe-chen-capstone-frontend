# zhe-chen-capstone-frontend

## Project Title

Recipe Delight

## Overview

Recipe Delight is a user-friendly website where food enthusiasts can explore, search, and learn from a vast collection of recipes. It offers detailed recipe instructions and allows users to search recipes by ingredients or categories.

### Problem

Finding recipes that match specific dietary preferences or ingredients on hand can be time-consuming. Many recipe sites are cluttered and difficult to navigate. Recipe Delight addresses this by providing a streamlined, easy-to-use interface that focuses on user experience and accessibility.

### User Profile

- Home cooks looking for recipe inspiration.
- Individuals with dietary restrictions searching for suitable recipes.
- Culinary enthusiasts who enjoy exploring new recipes and cuisines.

### Features

- **Search Functionality**: Allows users to search for recipes based on ingredients or recipe names.
- **Recipe Overview Page**: Displays recipes in a card format with essential details visible at a glance.
- **Detailed Recipe View**: Users can click on a recipe card to view detailed cooking instructions and ingredient lists.
- **Responsive Design**: Ensures that the website is accessible and functional on both desktops and mobile devices.

## Implementation

### Tech Stack

- **Frontend**: React, react-router, axios for building the user interface.
- **Backend**: Node.js with Express for handling API requests.(maynot use: knex and bcrypt for password)
- **Database**: mySQL for storing recipe data.
- **Styling**: CSS for responsive design.

### APIs

- Utilize an existing recipe API for the first phase of the project. If a suitable API is not found, consider developing a custom database.

### Sitemap

- **Home Page**: Introduction and basic information about the website.
- **Recipe Overview Page**: Search bar at the top; recipes displayed in a grid format.
- **Detailed Recipe Page**: Full recipe details when a recipe card is clicked.

### Mockups

![](mockup.png)

### Data

The data schema will include fields for recipe name, ingredients, cooking instructions, and categories to facilitate easy searching and sorting.

### Endpoints

- **GET /recipes**: Fetch a list of recipes based on query parameters.
- **GET /recipes/:id**: Fetch detailed information about a specific recipe.

### Auth

- Initial implementation will not include user authentication. Consider adding user accounts and authentication in future phases to allow saving favorite recipes and custom settings.

## Roadmap

1. **Setup and Initial Configuration**: Set up the development environment, create project repositories, and configure basic server and client frameworks.
2. **API Integration**: Integrate with an external recipe API to fetch recipe data.
3. **Frontend Development**: Develop the Home Page, Recipe Overview Page, and Detailed Recipe Page.
4. **Backend Services**: Implement backend services to manage and serve recipe data.
5. **Testing and Debugging**: Test the website for functionality, usability, and responsiveness.

## Nice-to-haves

- **User Comments and Ratings**: Allow users to rate recipes and leave comments.
- **Recipe Sharing**: Enable users to share recipes on social media.
- **User Profile and Favorites**: Allow users to create profiles and save their favorite recipes.
