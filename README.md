# Auth_Assignment
> This is the authentication service built using Node.js. The service comprises API endpoints facilitating user registration (sign-up) and authentication (login).



https://github.com/AgentRittik/Auth_Assignment/assets/109760373/4bc8ab3f-dec8-48e3-8fd4-5eb9e25e34c1



##  🚩 Technologies used:
#### Programming Languages : <img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node-dot-js&logoColor=white"/><img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white">
#### Version Control : <img alt="Git" src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"/>  
#### Hosting : <img alt="Heroku" src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white"/>
####  Frameworks/Libraries/Technologies : Express.js , PostgressSql
###### You can also see the list of dependencies in the package.json file.

## API Endpoints

### User Registration (Sign Up)

- **Endpoint:** `POST /api/v1/signup`
- **Request Body:**
  - User details should be included (username, password, email).
- **Json Response :**

    ```sh
        {
            "sucess": true,
            "message": "Sucessfully created a new user",
            "data": {
                "id": 3,
                "username": "rrittik388",
                "email": "rrittik38@gmail.com",
                "password": "$2b$10$0qwiskO8YPjXPNa/73DoruZKIHJ.sgOIAEGgR/iDGVnQjUAP6NJBG",
                "updatedAt": "2023-12-02T06:17:31.999Z",
                "createdAt": "2023-12-02T06:17:31.999Z"
            },
            "err": {}
        }

### User Authentication (Login)

- **Endpoint:** `POST /api/v1/loginsignin`
- **Request Body:**
  - User credentials should be included (username, password).
- **Json Response :**

    ```sh
        {
            "sucess": true,
            "data": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJyaXR0aWszOEBnbWFpbC5jb20iLCJpZCI6MywiaWF0IjoxNzAxNDk4MDEzLCJleHAiOjE3MDE1ODQ0MTN9.dIr_32uyymfN-4UPyEI2J17eTHjgivSoknLuNsK8D8Q",
            "err": {},
            "message": "Successfully logged in"
        }
### Token Authentication

- **Endpoint:** `POST /api/v1/isAuthenticated`
- **Request Body:**
  - User details should be included Header (x-access-token : "Jwt_Token").
- **Json Response :**

    ```sh
       {
          "sucess": true,
          "data": 3,
          "err": {},
          "message": "User is Authenticated and token is valid"
      }
    
## Prerequisites

Before you start, make sure you have the following installed on your system:

- Node.js: [Download and Install Node.js](https://nodejs.org/)

## Getting Started

Follow these steps to set up the project:

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/node-auth-service.git
  
2. Navigate to the project directory:
   
    ```sh
        cd node-auth-service
     ```
4. Install dependencies:
   
    ```sh
    
    npm install
    
    ```
5. setup the .env file :
     ```sh
       PORT=3000
       JWT_KEY="YOUR_JWT_KEY"
       DB_USERNAME="YOUR_DB_USERNAME"
       DB_PASSWORD="YOUR_DB_PASSWORD"
       DB_NAME="YOUR_DB_NAME"
    ```
## Database Setup
Follow these steps to set up the Database:

1. Navigate to src/config/config.json :
     ```sh
          "development": {
          "username": "process.env.DB_USERNAME",
          "password": "process.env.DB_PASSWORD",
          "database": "process.env.DB_NAME",
          "host": "127.0.0.1",
          "dialect": "postgres"
        },
    ```

## Run the Application
Start the authentication service with the following command:

  ```sh
    npm start
  ```
The service will be running at http://localhost:3000 by default.


## 🙌 Contributing

Contributing to AuthService is greatly appreciated! Follow the steps below to contribute:

Fork the repository by clicking on the "Fork" button on the top right of the repository page. This will create a copy of the repository in your GitHub account.
Clone the forked repository to your local machine using the command git clone **https://github.com/your-username/Auth_Assignment.git.**
Create a new branch for your feature or bug fix using the command 
```
git checkout -b your-branch-name
```
Make sure to give your branch a descriptive name.Implement your changes in the codebase.

Commit your changes with a descriptive commit message using the command  

```
git commit -m "Your commit message"
```

Push your changes to your forked repository using the command 
```
git push origin your-branch-name.
```
Go to the original repository on GitHub and open a pull request. Provide a clear and detailed description of your changes.

Wait for the maintainers to review your pull request. They may provide feedback or request further changes.

Once your pull request is approved, your changes will be merged into the main repository.

Thank you for your contribution to making Auth-Servuce better!
