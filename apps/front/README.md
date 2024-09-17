# Hello Work technical test front
## Description
This project is a frontend application developed with Next.js. It displays job listings in Bordeaux and includes a search functionality to filter by job title and pagination to navigate through results.

## Prerequisites
Before starting the project, make sure you have the following installed on your machine:

Node.js (version 14 or higher)
pnpm (version 6 or higher)

## Installation
Install the dependencies:
```
pnpm install
```

## Environment Variables
This project uses the following environment variables. You need to create a .env file at the root of the project with these variables:

```
NEXT_PUBLIC_API_URL=https://your-api.com    #The API URL that the application will use to fetch job offers.
```

## Running the Project
To start the local development server:

```
pnpm run dev
```
The app will be accessible at http://localhost:3000.

## Useful Scripts
Here are some useful scripts you can run with pnpm:
```
pnpm run dev        #Starts the development server.
pnpm run build      #Builds the app for production.
pnpm run start      #Runs the production build.
pnpm run lint       #Runs ESLint to check for code style issues.
```