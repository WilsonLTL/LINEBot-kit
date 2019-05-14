FROM node:latest
COPY . /code
WORKDIR /code
RUN npm install
EXPOSE 80
CMD ["sudo","node","app.js"]