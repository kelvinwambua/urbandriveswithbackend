# Urban Drives
Urban Drives is a full-stack car rental application built with a modern tech stack. It allows users to browse available cars, book them for specific dates, and manage their bookings. The application features a user-friendly interface and a robust backend for handling car listings, bookings, and user authentication.
# Video Demo (Click the video to open on youtube)
[![Watch the video](https://img.youtube.com/vi/PHts9x9inpo/maxresdefault.jpg)](https://youtu.be/PHts9x9inpo)
## Table of Contents
- [Features](#Features)
- [TechStack](#TechStack)
- [Prerequisites](#Prerequisites)
- [How to run](#How-to-run)
- [In App Screenshots](#In-App-Screenshots)


## Features
- User Authentication: Secure user sign-up and sign-in with email/password and Google OAuth.
- Car Listings: Browse a grid of available cars with details like make, model, year, and daily rental rates.
- Car Details: View detailed information about each car, including images, features, and specifications.
- Booking System: A seamless booking process with a date picker to select rental periods.
- Booking Confirmation: A confirmation page with booking details after a successful booking.
- User Bookings: View a list of all your past and upcoming bookings.
- Car Listing Creation: Authenticated users can list their cars for rent through a multi-step form.

## Tech Stack
- React: For the frontend
- React Router : Used to route through our website
- Nodejs: For a javascript backend
- Drizzle ORM: Our ORM to write SQL Queries
- Postgres: Our Database

##  Prerequisites
- Nodejs
- Git
- Docker(optional but will let you use a few commands to start the database backend and frontend)

## How to run 
```git
git clone  https://github.com/kelvinwambua/urbandriveswithbackend
```
```shell
cd urbandriveswithbackend
```

If you have docker installed

```
docker-compose up --build
```

If not you will need to run the backend and frontend separately

```
cd frontend
npm install
npm run dev

```

```
cd backend
npm install
npm run dev
```

The frontend should run when you click this [link](http://localhost:5173)

## In App Screenshots
- Home Page
<img width="929" height="434" alt="image" src="https://github.com/user-attachments/assets/4c5a1c3e-b0ef-419b-8674-6c19a9ef8e9e" />

- Sign in
 <img width="932" height="442" alt="image" src="https://github.com/user-attachments/assets/b3659a88-1acb-4e97-a927-f0ae526101bc" />
- Sign up
 <img width="949" height="439" alt="image" src="https://github.com/user-attachments/assets/95b33846-b3df-4a19-8a30-fd7141a55046" />
- Car Listing Page
- <img width="934" height="437" alt="image" src="https://github.com/user-attachments/assets/80685fae-2ec8-4e80-8a92-210ced429e02" />
- Car Page
<img width="950" height="449" alt="image" src="https://github.com/user-attachments/assets/aff2c12e-7b1d-4288-88bc-275ac984f2c1" />
- Booking Details page with react date picker
  <img width="949" height="437" alt="image" src="https://github.com/user-attachments/assets/76bed9bc-de2d-48bd-bfd3-b23aa4d714ea" />
- Booking Confirmation
  <img width="930" height="443" alt="image" src="https://github.com/user-attachments/assets/a38feef4-9f7c-442f-8b66-548cea2d7046" />
- Booking History
- <img width="948" height="432" alt="image" src="https://github.com/user-attachments/assets/32630266-9473-42f3-8a60-9cb31f71d8c1" />










