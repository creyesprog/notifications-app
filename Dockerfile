# Build stage
FROM node:22-alpine AS build
WORKDIR /build

COPY package.json .
RUN npm install
COPY . .

RUN npm run build

# Run stage
# TODO: Add security
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

COPY --from=build /build/public ./public
COPY --from=build /build/.next/standalone ./
COPY --from=build /build/.next/static ./.next/static

EXPOSE 3000

CMD HOSTNAME="0.0.0.0" node server.js