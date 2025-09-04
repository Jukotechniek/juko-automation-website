# ---- Build stage ----
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ---- Runtime (nginx) ----
FROM nginx:stable-alpine

# Tools voor healthcheck
RUN apk add --no-cache curl

# (optioneel) default conf weghalen
RUN rm -f /etc/nginx/conf.d/default.conf

# Jouw SPA-config + build
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/ /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]







