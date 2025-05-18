# Etapa 1: Construcción de la app
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: Servir con NGINX
FROM nginx:alpine as production
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiamos el build de Vite al directorio público de nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Reemplazamos configuración por defecto de NGINX si tienes un archivo custom
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
