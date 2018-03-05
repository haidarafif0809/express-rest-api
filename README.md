# rest-api users
Demo App with basic REST API.

[Demo Link](https://hidden-castle-17317.herokuapp.com)

### REST api
List of basic routes:

| Route | HTTP     | Descriptions|
| :------------- | :------------- |:------------- |
|`/api/hello?name={name}`       | GET       | Print hello, {name}! |

List of routes:

| Route           | HTTP    | Descriptions                    |
| :-------------  | :------ | :------------------------------ |
| `/api/users`    | GET     | Get all the users               |
| `/api/users/:id`| GET     | Get a single user               |
|  `/api/users`   | POST    | Create a user                   |
| `/api/users/:id`| DELETE  | DELETE a user                   |
| `/api/users/:id`| PUT     | Update a user with new info     |
| `/api/users/:id`| PATCH   | Update a user with specific info|

List of filter routes:

| Route | HTTP     | Descriptions |
| :------------- | :------------- |:------------- |
| `/api/users?name="{name}"`| GET | Get `{name}` match in users |
| `/api/users?name="{na}"`| GET | Get `{na}` like in users |
---
### Usage
With only npm:
```
npm install
npm start
npm run dev

```
Access the website via `http://localhost:3000` or API via `http://localhost:3000/api`.
