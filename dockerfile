FROM nginx:1.25.1
RUN mkdir -p tp-front-app/build
ADD ./tp-front-app/build ./tp-front-app/build
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d
CMD ["nginx", "-g", "daemon off;"]
