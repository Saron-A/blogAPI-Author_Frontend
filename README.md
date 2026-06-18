# BlogAPI Author Frontend

## Overview

The Author Frontend is the content management side of the BlogAPI platform. It allows authenticated users to create, manage, publish, and monitor their blog posts.

This application communicates with the BlogAPI Backend and is intended for users who want to become content creators on the platform.

## Related Repositories

### Viewer Frontend

Repository:

`[VIEWER_FRONTEND_REPOSITORY_URL]`

The public-facing side of the platform where readers consume published content.

### Backend API

Repository:

`[BACKEND_REPOSITORY_URL]`

Handles authentication, authorization, data storage, and API communication.

---

## Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Logout

### Author Dashboard

* View personal posts
* View publication status
* Access profile information

### Post Management

* Create new posts
* Publish existing posts
* View published posts
* View unpublished drafts

### Profile Management

* View username
* View email address

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Axios
* JWT Authentication
* REST API

---

## Installation

Clone repository:

```bash
git clone <AUTHOR_FRONTEND_REPOSITORY_URL>
```

Navigate into project:

```bash
cd author-frontend
```

Run using Live Server or any static file server.

---

## Backend Requirement

Requires BlogAPI Backend to be running.

Default API URL:

```txt
http://localhost:5000
```

---

## Folder Structure

```txt
author-frontend/
│
├── dashboard.html
├── profile.html
├── posts.html
├── create-post.html
│
├── forms/
│   ├── login.html
│   └── signup.html
│
├── JS/
│   ├── dashboard.js
│   ├── profile.js
│   ├── posts.js
│   ├── createPost.js
│   └── auth.js
│
└── css/
```

---

## Security Notes

Authentication is handled through JWT tokens.

Protected routes require:

```http
Authorization: Bearer <token>
```

Tokens are stored in browser localStorage.

---

## Future Improvements

* Edit post functionality
* Delete post functionality
* Rich text editor
* Draft management
* Analytics dashboard
* Author statistics

---

## Author

Developed as part of a full-stack Blog API learning project focused on:

* Frontend Development
* Authentication
* API Integration
* User Experience Design
