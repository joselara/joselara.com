# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and pnpm-lock.yaml (if it exists)
COPY package.json pnpm-lock.yaml* ./

# Install pnpm
RUN npm install -g pnpm

# Install the application dependencies
RUN pnpm install

# Copy the rest of your application's code to the container
COPY . .

# Build the application
RUN pnpm run build

# Use a lightweight nginx image to serve the static files
FROM nginx:alpine

# Copy the built app from the previous stage
COPY --from=0 /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
