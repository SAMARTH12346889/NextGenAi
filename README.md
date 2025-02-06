Sure! Here’s a README file for your project NextGenAi.

---

# NextGenAi

NextGenAi is a generative AI application built using the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to interact with AI models for generating content. The application also offers features for tracking history, storing responses in the backend, and providing secure authentication using **Clerk**.

## Key Features

- **Generative AI**: Generate content, responses, or ideas based on user input using AI models.
- **Response History**: View a history of previously generated responses for reference and future use.
- **Backend Data Storage**: All responses are securely stored in the backend for efficient retrieval and analysis.
- **User Authentication**: Secure login authentication using Clerk to ensure user data privacy and security.

## Problem Solved

NextGenAi addresses several challenges:

- **Content Creation**: It provides an AI-powered platform for users to generate creative or relevant content, making it easier to brainstorm, generate ideas, or automate tasks.
- **Data Retention**: Storing generated responses on the backend solves the issue of losing valuable AI-generated data. Users can revisit their past inputs and AI results, improving their workflow.
- **User Management**: By integrating Clerk for authentication, the app ensures that each user has a secure and personalized experience, preventing unauthorized access and keeping data private.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Clerk
- **Generative AI Model**: GeminiApi

## Installation

### Prerequisites

- Node.js and npm installed.
- MongoDB setup for local development or use of a cloud-based MongoDB service.
- Clerk account for user authentication.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/NextGenAi.git
   ```

2. Install dependencies for both backend and frontend:

   **For Backend:**
   ```bash
   cd backend
   npm install
   ```

   **For Frontend:**
   ```bash
   cd frontend
   npm install
   ```

3. Set up your Clerk account by following the [Clerk documentation](https://clerk.dev/docs) to get your API keys.

4. Configure the environment variables:
   - In the **backend** folder, create a `.env` file and add your Clerk API keys, MongoDB connection URL, and any other environment-specific variables.
   - In the **frontend** folder, create a `.env` file with the necessary configurations.

5. Run the application:

   **Backend**:
   ```bash
   cd backend
   npm start
   ```

   **Frontend**:
   ```bash
   cd frontend
   npm start
   ```

6. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- **Login/Sign Up**: Use the Clerk-based login to securely authenticate and access the AI features.
- **Generate Content**: Input your request or prompt, and the AI will generate content based on your input.
- **View History**: After generating content, view the history of all your previous responses and reuse them if needed.

## Contributing

We welcome contributions to improve the project! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

![Histroy](https://github.com/user-attachments/assets/92fed8b9-a45c-4369-85f4-85d0bcdc260f)
![Home](https://github.com/user-attachments/assets/5b7462a7-2e1a-4821-ba81-e3caffa52441)
![Backend](https://github.com/user-attachments/assets/0ec2394a-4e92-4d29-b5aa-94a636232130)
![Login](https://github.com/user-attachments/assets/35beb09b-e476-48f7-9759-351145611e8f)
![Profile](https://github.com/user-attachments/assets/e8507b87-ae46-4472-a477-fa91a4a148ed)
![Query](https://github.com/user-attachments/assets/432f8f82-b548-4b75-b1b7-4908a58410bb)
