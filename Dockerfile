FROM sphinxgaia/training-centos:190331
RUN yum install -y epel-release wget &&\
    yum install -y nginx

COPY nginx.conf /etc/nginx/
COPY ./dist /usr/share/nginx/html/
COPY ./documentation /usr/share/nginx/html/doc/

WORKDIR /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]