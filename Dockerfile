FROM node:slim as base

WORKDIR /usr/src/app

COPY package* .

RUN npm install

EXPOSE 3000
COPY . .

FROM base AS development
CMD ["npx", "nodemon", "--legacy-watch", "index.js"]


FROM base AS production
RUN npm prune --production
CMD ["npm","run", "start"]



