FROM node:15.5-alpine
ENV LANG=C.UTF-8 TZ=Asia/Tokyo
WORKDIR /app
RUN apk update
# COPY ./package*.json ./
RUN yarn add -D sass-loader \
                node-sass
RUN yarn add moment remark-math rehype-katex cross-env
RUN yarn install
COPY ./ .
ENV HOST 0.0.0.0
EXPOSE 3000