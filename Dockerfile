# Use Node.js Alpine version
FROM node:22.16.0-alpine


# Set working directory
WORKDIR /app

# Copy package files first and install deps
COPY package*.json ./
RUN npm install

# Copy all other source files
COPY . .


# Expose dev port
EXPOSE 3000

# Start app
CMD npm run dev