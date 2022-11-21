#### Frontend Coding Challenge ✨

Install dependencies
```
npm run install
```

Start the application
```
npm run start
```

Build the application
```
npm run build
```

Deployed application [here](https://frontend-challenge-qtp5.vercel.app/) .

#### Login credentials 
Any email will login successfully. 

#### Introduction
Frontend coding challenge for a company.

#### Guide to participating in the selection process:
1. Create the different "fake-API" to be consumed:

1.1. List of users:
You should respond with the following response structure:

```
{
  "page": 2,
  "per_page": 6,
  "total": 12,
  "total_pages": 2,
  "data": [
    {
      "id": 7,
      "email": "michael.lawson@reqres.in",
      "first_name": "Michael",
      "last_name": "Lawson",
      "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
      "id": 8,
      "email": "lindsay.ferguson@reqres.in",
      "first_name": "Lindsay",
      "last_name": "Ferguson",
      "avatar": "https://reqres.in/img/faces/8-image.jpg"
    }
  ]
}
```

1.2. Obtain a user:
You must respond with the basic information of "1" given user:

```
{
  "data": {
    "id": 2,
    "email": "janet.weaver@reqres.in",
    "first_name": "Janet",
    "last_name": "Weaver",
    "avatar": "https://reqres.in/img/faces/2-image.jpg"
  }
}
```

1.3. Create / modify / delete:
Should simulate the response of a successfully created, modified and deleted user.
```
{
  "data": {
    "status": "success",
  }
}
```

1.4. Verification:
Should simulate the response of a successful login.

```
{
  "data": {
    "status": "success",
    "user": {
      "id": 2,
      "email": "janet.weaver@reqres.in",
      "first_name": "Janet",
      "last_name": "Weaver",
      "avatar": "https://reqres.in/img/faces/2-image.jpg"
    }
  }
}
```

Must:

- Implement pagination within the response.
- Implement the following library for the generation of data like "name" or "avatar"
https://github.com/faker-js/faker
- The generated services must be separated and organized (Take reference from https://en.wikipedia.org/wiki/SOLID)
- Manage a waiting interval between 0 and 3 seconds for the responses of the different services.
- Within the fake-API there will be no data persistence (Important: no need to manage any kind of
database either locally or on the server).

2. The front end to be developed must contain the following modules: 2.1: /login
Service to use: 1.4.
When you get the response:
Redirect and store user information in Store for use in other components of the website.
2.2: /users
Services to be used: 1.1, 1.2, 1.3
• The module must contain the following criteria:
• Creation of a new user
• Modification of a given user
• List of users (with pagination)
• Detailed view of a user

### Tech Stack 
- React 
- Redux 
