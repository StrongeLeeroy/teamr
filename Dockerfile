FROM node:10-alpine AS builder

WORKDIR /build-app
COPY package.json package-lock.json tsconfig.json ./
RUN npm install --only=prod
COPY src/ src/
RUN npm run build
RUN rm -rf src/

FROM node:10-alpine AS runtime

ENV "NODE_ENV" "production"

WORKDIR /app
COPY --from=builder /build-app /app
ENTRYPOINT ["node", "lib/index.js"]