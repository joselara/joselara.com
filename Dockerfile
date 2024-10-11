# 1. Use an official Node.js runtime as the base image
FROM node:18

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# 4. Install the application dependencies
RUN npm install

# 5. Copy the rest of your application's code to the container
COPY . .

# 6. Expose the port your app runs on (optional, but recommended)
EXPOSE 3000

# 7. Define the command to run your app
CMD ["npm", "start"]
