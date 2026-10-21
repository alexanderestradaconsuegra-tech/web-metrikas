# Métrikas marketing site — for EasyPanel (or any Docker host).
# Build:  docker build -t web-metrikas .      Run:  docker run -p 3000:3000 web-metrikas
FROM node:22-bookworm-slim AS build
WORKDIR /app
COPY package.json package-lock.json .npmrc ./
RUN npm ci --no-audit --no-fund
COPY . .
RUN npx vinext build

FROM node:22-bookworm-slim
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app ./
EXPOSE 3000
CMD ["npx", "vinext", "start", "--port", "3000"]
