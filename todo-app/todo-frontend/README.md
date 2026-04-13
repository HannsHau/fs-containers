# React application

This application is created with [Vite](https://vitest.dev/).

Install dependencies with `npm install`

You can run the application in development mode with `npm run dev`

You can build static files for production release with `npm run build`

## Environment variables

Use env VITE_BACKEND_URL to set where the backend for this application is

## Make sure the backend runs (port 3000) and than start the frontend (port 5173)
VITE_BACKEND_URL=http://localhost:3000 npm run dev

## With Dockerfile
docker build . -t todo-frontend
docker run -p 8000:80 todo-frontend
