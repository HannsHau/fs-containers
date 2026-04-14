# Express application

Install dependencies with `npm install`

Run with `npm start`

Or in development mode with `npm run dev`

Or start with local database (be carefull with a hard coded password)
REDIS_URL=redis://localhost:6379 MONGO_URL=mongodb://root:example@localhost:3456/the_database?authSource=admin npm run dev

# Visit counter

When running the server, visit http://localhost:3000 to see visit counter, or give environment variable `PORT` to change the port.

# MongoDB

The application has /todos crud which requires a MongoDB. Pass connection url with env `MONGO_URL`

# Redis

Pass connection url with env `REDIS_URL`

# Docker
docker build -t todo-backend-server .
docker run -p 3000:3000 todo-backend-server

