FROM node:16.15.0-alpine

RUN mkdir -p /home/node/api/node_modules && chown -R node:node /home/node/api

WORKDIR /home/node/api

COPY package.json ./

USER node
RUN npm i 
COPY --chown=node:node . .


EXPOSE 8001

CMD ["npm", "run", "start"]