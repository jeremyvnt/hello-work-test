# Hello Work technical test API

## Description

This is a simple Node.js API built with Koa and TypeScript. The API is designed to fetch job offers
by first authenticating with a token (valid for 1 hour) and then querying Jobijoba API for the job
listings.

## Prerequisites

Before running the project, make sure you have the following installed:

Node.js (v14.x or higher) pnpm (v7.x or higher) If pnpm is not installed, you can install it
globally via npm:

```
npm install -g pnpm
```

## Environment Variables

This project uses the following environment variables. You need to create a .env file at the root of
the project with these variables:

```
PORT=4000                           #The port where the API will run
API_URL=https://api.example.com     # The external API endpoint URL
CLIENT_ID=your-client-id            # Client ID for authentication
CLIENT_SECRET=your-client-secret    # Client secret for authentication
```

## Installation

To install the dependencies, run:

```
pnpm i
```

## Running the Project

Once you've set up the environment variables and installed the dependencies, you can start the
project using:

```
pnpm start
```

The server will start at `http://localhost:<PORT>` where `<PORT>` is the value from the .env file.
