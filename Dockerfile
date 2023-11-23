# Choose a proper node image for the build stage:
FROM node:16-alpine AS BUILD_IMAGE
WORKDIR /app/react-app

# Copy package.json and pnpm-lock.yaml:
COPY package*.json ./

# Install our package using pnpm:
RUN yarn install

# Copy all remaining files:
COPY . .

# Finally, build our project:
RUN yarn build

# Beginning of the second stage:
FROM node:16-alpine AS PRODUCTION_IMAGE
WORKDIR /app/react-app  

# Copy the /app/react-app/dist/ folder from BUILD_IMAGE to /app/react-app/dist/ in PRODUCTION_IMAGE
COPY --from=BUILD_IMAGE /app/react-app/build/ /app/react-app/build/
COPY --from=BUILD_IMAGE /app/react-app/public/ /app/react-app/public/
COPY --from=BUILD_IMAGE /app/react-app/src/ /app/react-app/src/
COPY --from=BUILD_IMAGE /app/react-app/node_modules /app/react-app/node_modules

# Expose the application port
EXPOSE 2000

# To run: pnpm run preview
# # We need package.json and vite.config.ts
COPY package.json ./

# Command to start the application
CMD ["yarn", "run", "start"]