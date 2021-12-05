# base image
FROM node:14.5.0-alpine
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --production=false
COPY . .
RUN yarn build

EXPOSE 80
CMD [ "yarn", "serve" ]
