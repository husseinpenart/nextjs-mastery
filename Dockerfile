# Use Node.js Alpine version
FROM node:22.16.0-alpine

# Set environment variables
ENV NODE_ENV=development

# Set working directory
WORKDIR /usr/src/app

# Copy package files first and install deps
COPY package*.json ./
RUN npm install

# Copy all other source files
COPY . .

# 🔧 Fix permissions so node user can write to everything
RUN chown -R node:node /usr/src/app

# Switch to node user
USER node

# Expose dev port
EXPOSE 3000

# Start app
CMD ["npm", "run", "dev"]
