
# User Authentication APIs

This project provides a set of APIs for user registration, user login, and forgot password functionalities.

## Prerequisites

- Node.js (v14 or above)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

   
bash
   git clone https://github.com/saurabhdixit93/user-authentication-apis.git
  


2. Navigate to the project directory:

   
bash
   cd user-authentication-apis
  


3. Install the dependencies:

   
bash
   npm install
  


## Usage

1. Start the server:

   
bash
   npm start
  


2. The server will be running on `http://localhost:3000`.

## API Endpoints

### User Registration

- Endpoint: `POST /api/v1/create-user`
- Request Body:

  
json
  {
    "userEmail": "user@example.com",
    "userName": "username",
    "userPassword": "password"
  }
 


- Response:

  
json
  {
    "message": "User registered successfully"
  }
 


### User Login

- Endpoint: `POST /api/v1/login-user`
- Request Body:

  
json
  {
    "userName": "username",
    "userPassword": "password"
  }
 


- Response:

  
json
  {
    "message": "User logged in successfully"
  }
 


### Forgot Password

- Endpoint: `POST /api/v1/reset-password`
- Request Body:

  
json
  {
    "userEmail": "user@example.com"
  }
 


- Response:

  
json
  {
    "message": "Temporary password generated"
    "temporaryPassword": "examplePassword"
  }
 


## Contributing

Contributions are welcome! If you find any issues or want to add new features, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
