FROM node:20.12.1

COPY . .

COPY ./ package*.json  

RUN npm i -g nodemon

WORKDIR /usr/src/app/backend

EXPOSE 3000

CMD [ "npm", "start" ]