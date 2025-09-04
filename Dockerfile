# ---- Build stage ----
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ---- Runtime (nginx) ----
FROM nginx:stable-alpine

# Optioneel: default conf weghalen
RUN rm -f /etc/nginx/conf.d/default.conf

# Jouw SPA-config kopiëren (maakt fallback naar /index.html)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Static files
COPY --from=build /app/dist/ /usr/share/nginx/html/

# Nginx luistert op 80; EXPOSE is informatief
EXPOSE 8082

CMD ["nginx", "-g", "daemon off;"]






