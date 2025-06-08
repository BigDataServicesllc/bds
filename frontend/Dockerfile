# Usamos una imagen de Node.js para construir nuestro proyecto
FROM node:18-alpine AS builder

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos los archivos de dependencias PRIMERO para aprovechar la caché de Docker
COPY package.json package-lock.json ./

# Instalamos las dependencias del proyecto
RUN npm install

# Copiamos el resto del código fuente
COPY . .

# Ejecutamos el script de construcción para generar los archivos estáticos
RUN npm run build

# --- Etapa 2: El Servidor Final ---
# Usamos una imagen ligera de Nginx para servir los archivos
FROM nginx:alpine

# Copiamos los archivos estáticos construidos en la etapa anterior
# desde la carpeta /app/build del constructor a la carpeta html de Nginx.
COPY --from=builder /app/build /usr/share/nginx/html

# Exponemos el puerto 80 (el puerto por defecto de Nginx)
EXPOSE 80

# El comando por defecto de Nginx se encargará de iniciar el servidor
CMD ["nginx", "-g", "daemon off;"]