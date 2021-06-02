FROM node:10-alpine
ENV NODE_ENV development
ENV REACT_APP_Web1_SERVICE_URL=localhost:8081
ENV REACT_APP_Web2_SERVICE_URL=localhost:8082
WORKDIR /container
COPY package.json ./
RUN npm install
COPY ./ ./
EXPOSE 8181
CMD ["npm", "start"]








