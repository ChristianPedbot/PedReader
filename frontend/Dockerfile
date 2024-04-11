FROM node:20.12.1

COPY . .

COPY ./ package*.json 

WORKDIR /usr/src/app/frontend

EXPOSE 8000

CMD [ "npm","start" ]