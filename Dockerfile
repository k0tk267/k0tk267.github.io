FROM node:16-alpine
ENV LANG=C.UTF-8 TZ=Asia/Tokyo
WORKDIR /app
RUN apk update
# COPY ./package*.json ./
# ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
RUN apk add make
# RUN python3 -m ensurepip
# RUN pip3 install --no-cache --upgrade pip setuptools
RUN yarn add -D sass-loader \
                node-sass@6.0.1
RUN yarn add moment remark-math rehype-katex cross-env
RUN yarn install
COPY ./ .
ENV HOST 0.0.0.0
EXPOSE 3000