# Password Generator 🔐

Welcome to the Password Generator project! This Angular-based tool is designed to help users create secure, customizable passwords with ease. It includes options for adjusting password length, complexity, and lets users store generated passwords for easy access.

Explore the live project here: [https://passwordgenerator.emilwilson.netlify.app/](https://rand0m-password-generator.netlify.app/)

## Features 📌

- **Customizable Password Length**: Specify the number of characters for your password.
- **Adjustable Complexity**: Choose to include uppercase letters, lowercase letters, numbers, and special characters.
- **Instant Copy**: Copy the generated password to the clipboard with a single click.
- **Password Storage**: Save generated passwords for future use.
- **Error Handling**: Get notified if no character types are selected.
- **Notifications**: Uses `ngx-toastr` for alerting users with messages for success, errors, and storage updates.

## Tech Stack 🛠️

- **Angular**: Frontend framework
- **Angular CDK**: Clipboard service for easy copy functionality
- **ngx-toastr**: Notification library for Angular

## Setup & Installation 📝

1. Clone the repository:
   ```bash
   git clone https://github.com/Emil-Wilson1/PasswordGenerator.git

2. Navigate to the project directory:
   ```bash
   cd password-generator

3. Install dependencies:
   ```bash
     npm install
4. Run the application:
   ```bash
   ng serve
Open http://localhost:4200 in your browser to see the app in action.

## Usage 🚀

1. Enter your desired password length.
2. Select the types of characters you want to include (uppercase, lowercase, numbers, special characters).
3. Click Generate Password.
4. Copy the generated password to the clipboard.
