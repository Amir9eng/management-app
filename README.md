# Task Manager App

Welcome to the Task Manager App! This app allows users to efficiently manage their tasks and projects. With a user-friendly interface and powerful features, you can easily create, organize, and track your tasks.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Built With](#built-with)
- [Contributing](#contributing)
- [License](#license)

## Features

- Responsive Design: The app is designed to provide an optimal user experience across various screen sizes.
- Interactive Elements: Enjoy interactive hover states for buttons and other elements.
- Board and Task Management: Create, read, update, and delete boards and tasks effortlessly.
- Form Validation: Receive helpful form validation prompts when creating or editing boards and tasks.
- Subtask Management: Mark subtasks as complete and easily move tasks between columns.
- Sidebar Control: Seamlessly toggle the visibility of the board sidebar.

## Getting Started

Follow these steps to get the Task Manager App up and running on your local machine:

1. Clone the repository: `git clone https://github.com/Amir9eng/management-app.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## Usage

### Boards

- Click on different boards in the sidebar to switch between them.
- Click "Create New Board" in the sidebar to open the "Add New Board" modal.
- Use the "Edit Board" dropdown menu to modify board details.
- Add and remove columns in the Add/Edit Board modals.
- Deleting a board deletes its associated columns and tasks (confirmation required).

### Columns

- A board must have at least one column before tasks can be added.
- Click "Add New Column" to open the "Edit Board" modal and add columns.

### Tasks

- New tasks are added to the bottom of the relevant column.
- Updating a task's status will automatically move it to the appropriate column.
- Bonus: Drag and drop tasks to move them between columns.

## Built With

- [TailwindCSS](https://tailwindcss.com) - A versatile CSS framework.
- Drag and Drop API - Enables intuitive task movement.
- [React](https://reactjs.org) - JavaScript library for building user interfaces.
- [Redux](https://redux.js.org) - State management tool for managing app's state.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
