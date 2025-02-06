NextGenAI

NextGenAI is an innovative generative AI platform developed using the **MERN stack** (MongoDB, Express.js, React, Node.js). This project aims to provide users with a seamless and efficient way to generate AI responses, store data, and maintain a history of past interactions. Additionally, it ensures secure user authentication via Clerk, and integrates the powerful **Gemini API** for the AI’s response generation.

Key Features

- Generative AI Model: Generate AI-driven responses based on user input, utilizing the advanced Gemini API.
- Stored Response Data :All generated responses are securely stored in the backend for easy retrieval and analysis.
- History Tracking :Users can view their past interactions and responses, ensuring a smooth and consistent experience over time.
- Authentication with Clerk: User login and authentication are handled via Clerk, ensuring secure access and identity management.
- Integration with Gemini API: The Gemini API key is used to power the generative AI model, ensuring high-quality responses.

Problem Solved

NextGenAI addresses several key issues faced by users in the realm of generative AI:

1.Response Retention: Many AI platforms do not store responses, which can make it difficult for users to track past interactions. This project stores responses in the backend, giving users access to historical data for reference and learning.

2.Lack of User Security: With **Clerk** as the authentication method, NextGenAI ensures that only authorized users can access and interact with the platform. This guarantees that personal data and interactions are kept secure.

3.Improved AI Integration: By using the **Gemini API**, NextGenAI leverages cutting-edge AI technology to provide high-quality, reliable responses for a wide variety of use cases.

4. History of Interactions: Storing and displaying past responses helps users track progress and revisit previous results for further analysis or refinement.

Installation

To set up and run the **NextGenAI** project locally, follow these steps:

Prerequisites
- Node.js
- MongoDB
- Gemini API Key (for AI responses)
- Clerk API Key (for authentication)

Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/NextGenAI.git
   cd NextGenAI
   ```

2. Install dependencies for both client and server:

   ```bash
   # Server-side
   cd server
   npm install

   # Client-side
   cd ../client
   npm install
   ```

3. Set up environment variables:
   - Gemini API Key**: Add your Gemini API key to the `.env` file in the server directory.
   - Clerk API Key**: Add your Clerk API key to the `.env` file in the server directory.

4. Run the development server:

   ```bash
   # Start the backend
   cd server
   npm start

   # Start the frontend
   cd ../client
   npm start
   ```

5. Visit the app at `http://localhost:3000` to start using NextGenAI.

## Usage

1. Sign Up / Login: Authenticate using Clerk .A valid Clerk account is required for using the platform.
2.Generate AI Responses: Enter a prompt and generate an AI response powered by the Gemini API.
3. View History :Access and view the history of your AI interactions at any time.
4. Manage Your Data : Responses are stored securely on the backend, and you can retrieve previous interactions easily.

Contributing

We welcome contributions to NextGenAI! If you have ideas, bug fixes, or improvements, feel free to submit a pull request or open an issue.

How to Contribute:
1. Fork the repository.
2. Create a new branch for your changes (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request and describe your changes.


NextGenAI brings together advanced AI technology, user history tracking, and secure authentication to offer an enhanced experience for generative AI applications.
![Histroy](https://github.com/user-attachments/assets/92fed8b9-a45c-4369-85f4-85d0bcdc260f)
![Home](https://github.com/user-attachments/assets/5b7462a7-2e1a-4821-ba81-e3caffa52441)
![Backend](https://github.com/user-attachments/assets/0ec2394a-4e92-4d29-b5aa-94a636232130)
![Login](https://github.com/user-attachments/assets/35beb09b-e476-48f7-9759-351145611e8f)
![Profile](https://github.com/user-attachments/assets/e8507b87-ae46-4472-a477-fa91a4a148ed)
![Query](https://github.com/user-attachments/assets/432f8f82-b548-4b75-b1b7-4908a58410bb)
