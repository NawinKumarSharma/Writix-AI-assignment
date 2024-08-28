# Writix AI ( Frontend Development Task )

This project is a responsive web application built with Next.js and TypeScript, featuring a modern and professional layout based on a provided wireframe.

## Overview

The Writix AI Dashboard includes:

- A responsive layout as specified in the wireframe.
- Various components such as Navbar, Sidebar, Search Bar, Categories Dropdown, and Feature Cards.
- Basic interactivity and advanced features including search functionality and a functional categories dropdown.
- Professional styling and adherence to best practices for accessibility.

## Live Demo

You can view the live application [here](https://writix.vercel.app/).

## Setup Instructions

To run this project locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone git@github.com:NawinKumarSharma/Writix-AI-assignment.git
   cd Writix-AI-assignment
   ```

2. **Install Dependencies:**

   Ensure you have [Node.js](https://nodejs.org/) installed. Then, install the required dependencies using:

   ```bash
   pnpm install
   ```

3. **Run the Development Server:**

   Start the development server with:

   ```bash
   pnpm run dev
   ```

   This will start the application at `http://localhost:3000`.

4. **Build the Project:**

   To build the project for production, use:

   ```bash
   pnpm  build
   ```

## Approach and Assumptions

### Approach

1. **Layout Implementation:**

   - Implemented a responsive layout using CSS Grid and Flexbox to match the provided wireframe.
   - Ensured the design adapts to different screen sizes.

2. **Component Development:**

   - Used Next.js with TypeScript for the project setup.
   - Used shadcn as a component library for design insipiration of components
   - Developed components to ensure type safety and modularity.

3. **Interactivity:**

   - Search functionality is simulated with mock data.
   - Dropdown for categories is fully functional and updates the displayed content based on user selection.
   - Can toggle between dark mode and light mode (default setup is dark mode)

4. **Styling:**
   - Utilized CSS library (tailwind) for a modern and professional look.
   - Followed best practices for accessibility and responsiveness.

### Assumptions

- Basic mock data is used for search and filtering functionalities.
- The application is developed with a focus on professional design and usability.

## Additional Features

- **Dark Mode Toggle (Bonus):**
  - Implemented a dark mode toggle to switch between light and dark themes for improved user experience.

## Code Quality

- The code is well-commented and follows best practices for clean and maintainable code.
- The project is structured to be modular and scalable.

## Deployment

The application is deployed to [Vercel](https://vercel.com/). You can access the live application at [https://writix.vercel.app/](https://writix.vercel.app/).

Feel free to adjust any specifics or add additional details as needed.
