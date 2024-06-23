FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Add the node_modules/.bin directory to the PATH
ENV PATH /app/node_modules/.bin:$PATH

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --silent

# Copy the rest of the application code to the working directory
COPY . ./

# Expose the port that Vite uses (default is 5173)
EXPOSE 5173

# Start the application
CMD ["npm", "run", "dev"]
