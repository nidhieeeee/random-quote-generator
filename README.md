# Random Quote Generator

## Description
The **Random Quote Generator** is a React-based application that dynamically displays random quotes from a predefined list. Each time the "Generate Quote" button is clicked, a new random quote is displayed along with a background color change for the display area. This project demonstrates state management using React hooks and randomization techniques to deliver an engaging user experience.

## Features
- Randomly generates and displays a new quote.
- Changes the background color of the display area with each new quote.
- Ensures that the new quote is different from the previously displayed one.
- Fully responsive and visually appealing.

---

## Technologies Used
- **React**: For building the user interface.
- **Vite**: As the build tool for faster development.
- **CSS**: For styling the components.

---

## Screenshots

### Screenshot 1: Default View
![Default View](https://i.ibb.co/2P9xD3D/Screenshot-2024-12-31-153858.png)

### Screenshot 2: Random Quote Generated
![Random Quote Generated](https://i.ibb.co/kBYC6DV/Screenshot-2024-12-31-153909.png)

---

## Installation and Setup

### Prerequisites
- Node.js and npm should be installed on your machine.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/random-quote-generator.git
   ```

2. Navigate to the project directory:
   ```bash
   cd random-quote-generator
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the application in your browser at:
   ```
   http://localhost:5173
   ```

---

## Usage
1. Open the application.
2. Click the "Generate Quote" button to display a new random quote.
3. Observe the change in the quote and the background color.

---

## Code Highlights

### State Management
Two `useState` hooks are used:
- One for managing the current quote.
- One for managing the background color.

### Randomization Logic
A function ensures that the newly generated quote is always different from the previous one.

---

## Conclusion
The **Random Quote Generator** is a fun and interactive way to explore the power of React's state management and randomization features. This project can be expanded with additional functionalities, such as fetching quotes from an API or adding animations.

Feel free to contribute to this project or customize it to suit your needs. Happy coding!

---
