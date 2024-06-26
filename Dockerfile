FROM node:22-alpine AS build

WORKDIR /work

COPY package.json .
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "prod"]