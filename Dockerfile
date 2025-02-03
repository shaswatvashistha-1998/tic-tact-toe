# Use a Node.js image for building the React app
FROM node:17 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the React application
RUN npm run build

# Use a lightweight server to serve the built app
FROM 425964170654.dkr.ecr.us-east-1.amazonaws.com/nginx:latest

# Copy build output to Nginx HTML directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
