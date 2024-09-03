# ReactFetchChallenge

## Overview
ReactFetchChallenge is a simple React application that demonstrates dynamic API data fetching and display. The project focuses on fetching data from different API endpoints and rendering it in various formats, including a list and a table. This project is ideal for beginners looking to understand how to use React's `useEffect` hook for API calls and how to structure components for dynamic data rendering.

## Features
- **Dynamic API Fetching**: Fetches data from different API endpoints (users, posts, comments) based on user selection.
- **Form Component**: Allows users to switch between different API request types using buttons.
- **List Component**: Initially displays fetched data in a list format, mapping each item to a `ListItem` component.
- **Table Component**: Displays fetched data in a tabular format, using `Row` and `Cell` components to handle individual table rows and cells.

## Commits

### Initial Setup
Set up dynamic API fetching with useEffect in React app. Added Form component to switch request types (users, posts, comments) and display fetched data in a List component with mapped ListItems. Enhanced UI with Button components for user interaction.


### Table Component Addition
Add Table component to display fetched API data in tabular format, replacing List component. Implemented Row and Cell components to handle individual table rows and cells.

## Project Structure

- **App.js**: The main component that handles state and renders the `Form` and `Table` components.
- **Form.js**: Contains the buttons to switch between different API endpoints.
- **List.js**: Initially used to display data in a list format.
- **ListItem.js**: Handles the display of individual items in the list.
- **Table.js**: Replaces the `List` component to display data in a table format.
- **Row.js**: Handles the rendering of each row in the table.
- **Cell.js**: Handles the rendering of each cell in a table row.

## Getting Started

### Prerequisites
- Node.js
- npm or yarn

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/ReactFetchChallenge.git
    ```
2. Navigate to the project directory:
    ```bash
    cd ReactFetchChallenge
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```

## Usage
- Open the app in your browser.
- Use the buttons to switch between fetching users, posts, and comments data from the API.
- View the fetched data displayed in a table format.

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

