# Goals Keeper App

The Goals Keeper App is a simple web application built with React that allows users to create, edit, and delete their personal goals. This app is designed to help users keep track of their goals and progress towards achieving them.

## Features

- **Add New Goals**: Users can add new goals by providing a title and description.
- **Edit Goals**: Existing goals can be edited to update the title and description.
- **Delete Goals**: Users can remove goals they no longer wish to track.
- **Complete Goals**: Future enhancement includes marking goals as completed.

## Technologies Used

- **React**: The front-end of the application is built using React, a popular JavaScript library for building user interfaces.
- **Bootstrap**: Bootstrap is used for styling and layout components to ensure a clean and responsive user interface.
- **Bootstrap Icons**: Icons from Bootstrap Icons are used to enhance the user experience.
- **Axios**: Axios is used to make HTTP requests to interact with a JSON server to handle data.
- **JSON-Server**: JSON-Server is used as a mock API to simulate a back-end server for storing and managing goals data.
- **Redux Toolkit**: Redux Toolkit is used to manage the state of the application, including data fetching with **RTK Query** for efficient API interactions.

## Getting Started

To get started with the Goals Keeper App, follow these steps:

```bash
# Clone the repository to your local machine:
git clone https://github.com/Moustafa-Mohammed/Goals-Keeper-App.git

# Navigate to the project directory:
cd Goals-Keeper-App

# Install the required dependencies:
npm install

# Start the JSON-Server to simulate the back-end:
npm run server

# Start the React app:
npm run dev
```

Open your web browser and visit [http://localhost:5173](http://localhost:5173) to use the Goals Keeper App.

## Usage

- To add a new goal, click the "Add Goal" button, enter a title and description, and click "Save."
- To edit an existing goal, click the "Edit" button on the goal card, make your changes, and click "Save."
- To delete a goal, click the "Delete" button on the goal card.

## Future Enhancements

In the future, you can consider adding the following features to improve the Goals Keeper App:

- **User Authentication**: Implement user authentication to allow multiple users to have their own sets of goals.
- **Completed Goals**: Allow users to mark goals as completed and track their progress.
- **Sharing Goals**: Add the ability for users to share their goals or collaborate on goals with others.
