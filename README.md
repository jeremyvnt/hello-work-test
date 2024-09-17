# Hello Work technical test
## Description
This is a pnpm workspace containing two projects:

**Frontend**: A Next.js application that displays job listings in Bordeaux with search functionality and pagination.

**API**: A backend API that provides job listings data to the frontend.

## Prerequisites
Before starting the projects, ensure you have the following installed:

Node.js (version 14 or higher)
pnpm (version 6 or higher)

## Installation
Install the dependencies at the root of the workspace:

```
pnpm install
```

## Environment Variables:

Configure the environment variables for both the frontend and API projects as per their respective README.md files.

For example, in the frontend, create a .env.local file with the following:

```
NEXT_PUBLIC_API_URL=https://your-api-url.com
```
Important: Follow the setup recommendations from both the frontend and API projects before launching the applications.

## Running the Projects
This workspace is configured to run the frontend and API projects individually or in parallel.

### Running Frontend Only
To run the Next.js frontend application:
    
```
pnpm start:front
```
### Running API Only
To run the API project:
```
pnpm start:api
```

### Running Both Frontend and API in Parallel
To run both projects concurrently:

```
pnpm start:all
```
This will start the frontend and the API simultaneously.

Useful Workspace Scripts
Here are some useful scripts that can be run from the root of the workspace:

pnpm run start:frontend: Starts the frontend project.
pnpm run start:api: Starts the API project.
pnpm run start:all: Runs both the frontend and API in parallel.
pnpm install: Installs dependencies for both projects.
Deployment
Each project (frontend and API) can be deployed separately. Follow the deployment instructions in each project’s README.md file.

The frontend can be deployed to Vercel or any other Next.js-compatible hosting service.
The API can be deployed to a cloud platform such as AWS, Heroku, or any Node.js hosting provider.
License
This workspace is licensed under the MIT License. External contributions are not accepted.