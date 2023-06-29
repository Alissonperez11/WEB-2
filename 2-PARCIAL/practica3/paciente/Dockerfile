FROM node
COPY . /var/www
WORKDIR /var/www
RUN npm install
EXPOSE 2900
ENTRYPOINT ["npm","start"]