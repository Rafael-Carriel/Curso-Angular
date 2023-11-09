FROM node:8

WORKDIR /app

RUN npm install -g @angular/cli@1.2.7

RUN npm install web-animations-js --save

RUN npm install @angular/animations@6.0.0 @angular/compiler-cli@6.0.0 @angular/common@6.0.0 @angular/compiler@6.0.0 @angular/core@6.0.0 @angular/forms@6.0.0 @angular/platform-browser@6.0.0 @angular/platform-browser-dynamic@6.0.0 @angular/router@6.0.0

RUN npm install -g typescript@2.4.2

RUN npm install -g json-server

COPY . .

RUN npm install

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0", "--disable-host-check"]