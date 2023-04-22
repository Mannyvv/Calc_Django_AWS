FROM nginx:1.21-alpine

#Deletes the default.conf file that comes when you install nginx.
RUN rm /etc/nginx/conf.d/default.conf

#Copies our custom nginx.conf file into the same folder that the default.conf file
#was in, replacing it.
COPY nginx.conf /etc/nginx/conf.d

LABEL maintainer = "Manny Vera"
LABEL org.label-schema.name = "nginx container"

LABEL org.label-schema.vcs-ref = "nginx container"

##RUN mkdir -p /home/app/staticfiles/bananas
##might not needs this command see yml file : Note 1
