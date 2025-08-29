# deps layer
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# runtime
FROM node:18-alpine
WORKDIR /app

# non-root user
RUN addgroup -S nodegrp && adduser -S nodeusr -G nodegrp
USER nodeusr

COPY --from=deps /app/node_modules ./node_modules
COPY server.js ./server.js

ENV NODE_ENV=production
ENV PORT=5000
EXPOSE 5000

HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://127.0.0.1:5000/ || exit 1

CMD ["npm", "start"]
