From node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN yarn add cross-env -W
RUN yarn build
EXPOSE 3000
CMD ["npm", "start"]

