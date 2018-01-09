FROM nginx

EXPOSE 80

COPY src/build /usr/share/nginx/html/admin
