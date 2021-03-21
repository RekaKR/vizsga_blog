#Létrehozunk nginx
FROM nginx

#Copy-zunk
COPY ./frontend/build /usr/share/nginx/html

#Port
#EXPOSE 80