Lodgify
Lodgify is a full-stack web application built using HTML, CSS, JavaScript, and the MERN stack (excluding React). The project follows the MVC architecture and incorporates authentication and authorization, client-side and server-side validations, and cookies for session management. It aims to provide a dynamic platform for users to manage and interact with listings, such as hotels or other accommodation services.

Features
User Authentication & Authorization: Secure login and registration with password hashing. Only authorized users can access specific pages and features.
MVC Architecture: A clean separation of concerns using the Model-View-Controller architecture.
Client-Side & Server-Side Validations: Ensures data integrity and accuracy on both the frontend and backend.
Cookies for Session Management: Keeps users logged in across sessions with the help of cookies.
Dynamic Listings: View and manage various listings with user interaction.
Responsive Design: A mobile-friendly user interface built using HTML, CSS, and JavaScript.
Technologies Used
Frontend:

HTML
CSS
JavaScript
Backend:

Node.js
Express.js
Database:

MongoDB
Authentication:

JWT (JSON Web Tokens)
bcrypt for password hashing
Others:

MVC Architecture
Client-side validation with JavaScript
Server-side validation with Node.js
Cookies for session management
Installation
To run this project locally, follow these steps:

1. Clone the repository
bash
Copy code

2. Install dependencies
Navigate to the project folder and install the required dependencies.

bash
Copy code
cd Lodgify
npm install
3. Create an .env file
In the root directory, create a .env file and add the following:

makefile
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
4. Start the server
bash
Copy code
npm start
The application should now be running on http://localhost:8080.

How It Works
User Registration & Login: Users can create an account and log in. Passwords are securely hashed using bcrypt, and authentication is handled using JWT.
Listings Management: After logging in, users can view, add, or edit their listings. All changes are validated on both the client-side and server-side.
Session Management: Cookies are used to manage user sessions, ensuring a smooth experience across multiple visits.
Contributing
Feel free to fork the repository and submit pull requests for any improvements or bug fixes. Please ensure that all contributions follow the coding standards and include appropriate tests.

License
This project is open-source and available under the MIT License.
