FROM node:10

RUN mkdir -p /usr/sagasphere-utils
COPY . /usr/sagasphere-utils

RUN cd /usr/sagasphere-utils && \
  yarn install && \
  yarn build

WORKDIR /usr/sagasphere-utils
ENTRYPOINT [ "node", "./bin/index.js" ]
