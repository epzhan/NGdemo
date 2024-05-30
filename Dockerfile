# Use an official Node.js runtime as a base image
FROM node:14 as build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Angular app
RUN npm run build

# Use an official Nginx image as the base image for serving Angular app
FROM nginx:latest

# Copy the built Angular app from the build image to the Nginx server
COPY --from=build /usr/src/app/dist/ngdemo15 /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Command to start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]