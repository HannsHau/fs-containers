
FROM node:24 AS test
WORKDIR /usr/src/app

COPY . .
RUN npm ci
RUN npm run test:ci

# The first FROM is now a stage called build-stage
FROM node:24 AS build-stage
WORKDIR /usr/src/app

COPY --from=test /usr/src/app . 

ARG VITE_BACKEND_URL=http://localhost:8080/api
ENV VITE_BACKEND_URL=${VITE_BACKEND_URL}

RUN npm ci

RUN npm run build

# RUN npm install -g serve
# CMD ["serve", "-n", "dist"]


# This is a new stage, everything before this is gone, except for the files that we want to COPY
FROM nginx:1.29-alpine

# COPY the directory dist from the build-stage to /usr/share/nginx/html
# The target location here was found from the Docker hub page
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html