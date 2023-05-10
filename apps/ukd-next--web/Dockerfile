FROM node:18 AS BUILD

WORKDIR /app

COPY package.json yarn.lock tsconfig.base.json nx.json ./
COPY apps ./apps
COPY libs ./libs
COPY tools ./tools

RUN yarn install --frozen-lockfile

RUN npx nx build ukd-next--web
RUN npx nx build ukd-next--app
RUN npx nx build ukd-next--admin


FROM nginx:stable-alpine AS PRODUCTION

COPY apps/ukd-next--web/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/apps /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
