# Frontend Dockerfile
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy your static files to nginx's web directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 82

# Start nginx (default CMD already included)

FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
CMD ["node", "index.js"]
