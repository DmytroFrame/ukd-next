FROM node:18 AS BUILD

WORKDIR /app

COPY package.json yarn.lock tsconfig.base.json nx.json ./
COPY apps ./apps
COPY libs ./libs
COPY tools ./tools

RUN yarn install --frozen-lockfile

RUN npx nx build ukd-next--backend

# RUN npm i -g @vercel/ncc
# RUN ncc build dist/apps/ukd-next--backend/main.js -o dist

FROM node:18-alpine AS PRODUCTION

WORKDIR /app

# COPY --from=BUILD /app/dist/index.js ./main.js
COPY --from=BUILD /app/dist/apps/ukd-next--backend/main.js ./main.js
COPY --from=BUILD /app/package.json ./package.json
COPY --from=BUILD /app/node_modules ./node_modules

EXPOSE 7000

CMD ["node", "main.js"]
