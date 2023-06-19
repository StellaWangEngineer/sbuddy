FROM node:14-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
RUN npm install
COPY . .
EXPOSE 8080 8000 80
RUN chown -R node /usr/src/app
USER node
CMD ["node", "app.js"]
