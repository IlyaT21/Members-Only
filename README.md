# Members-Only App

A **Members-Only App** that allows users to create and view messages. Messages can be seen by all visitors, but only registered users can post messages. Admin users have the ability to delete messages.

## Features

- **User Authentication**: Users can register, log in, and log out.
- **Role-Based Access Control**: Users start as "guest" and can become "members" by entering a passcode.
- **Post Messages**: Members can create messages.
- **View Messages**: All visitors (even non-logged-in users) can see messages.
- **Admins**: Users can also become admins by entering a passcode.
- **Admin Controls**: Admins can delete messages.

## Technologies Used

This app is built using the following technologies:

### Backend:

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for Node.js
- **PostgreSQL** - Database for storing users and messages
- **Sequelize** - ORM for interacting with the database
- **Passport.js** - User authentication
- **bcrypt** - Password hashing for security

### Frontend:

- **EJS** - Template engine for rendering views
- **CSS** - Basic styling

## Installation & Setup

### 1. Clone the Repository

```sh
git clone git@github.com:IlyaT21/Members-Only.git
cd Members-Only
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add the following:

```env
DB_NAME=
DB_USER=
DB_PASS=
DB_HOST=
DB_DIALECT=
DB_PORT=

SESSION_SECRET=

MEMBER_PASSCODE=
ADMIN_PASSCODE=
```

### 4. Set Up the Database

Run migrations and seed data:

```sh
npx sequelize-cli db:migrate
```

### 5. Start the Application

#### Development Mode (with auto-restart)

```sh
npm run dev
```

#### Production Mode

```sh
npm start
```

## Usage

1. Register an account.
2. Log in.
3. Enter the **passcode** to upgrade your role to "member".
4. Post messages.
5. Enter the **passcode** to upgrade your role to "admin".
6. Admins can delete messages.

## License

This project is open-source and available under the **MIT License**.

## Author

Developed by **<a href="https://ilijatoskovic.com/">IlyaT21</a>**.

