# 1. 
# Use an official Node.js runtime as a base image
FROM node:14 as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

RUN npm run build
FROM nginx:latest
COPY --from=build /usr/src/app/dist/ngdemo /usr/share/nginx/html
EXPOSE 80
#EXPOSE 81

CMD ["nginx", "-g", "daemon off;"]
