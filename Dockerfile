# Usamos una imagen oficial de Nginx como base.
# 'alpine' es una versión muy ligera, ideal para producción.
FROM nginx:alpine

# Copiamos los archivos de nuestra carpeta local 'app'
# al directorio por defecto de Nginx dentro del contenedor.
COPY ./app /usr/share/nginx/html