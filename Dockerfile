# Build stage #1
FROM node:lts-buster

WORKDIR /srv

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build:production

# Build stage #2
FROM node:18

WORKDIR /usr/app

COPY --from=0 /srv/package.json ./package.json
COPY --from=0 /srv/yarn.lock ./yarn.lock
COPY --from=0 /srv/dist ./dist
COPY --from=0 /srv/prisma ./prisma
COPY --from=0 /srv/node_modules ./node_modules
COPY --from=0 /srv/.env ./.env

EXPOSE 4000

CMD ["yarn", "start"]