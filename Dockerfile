# Build stage #1
FROM node:18-slim

WORKDIR /srv

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build:production
RUN npm prune --production

# Build stage #2
FROM node:18-slim

WORKDIR /usr/app

COPY --from=0 /srv/.env ./.env
COPY --from=0 /srv/dist ./dist
COPY --from=0 /srv/node_modules ./node_modules

EXPOSE 4000

CMD ["node", "dist/src"]