FROM node:8

WORKDIR /app

RUN npm install -g @angular/cli@1.2.7

RUN npm install web-animations-js --save

RUN npm install @angular/animations@^4.0.1 @angular/compiler-cli@4.0.0 @angular/common@4.3.3 @angular/compiler@4.0.0 @angular/core@4.3.3 @angular/forms@4.3.3 @angular/platform-browser@4.3.3 @angular/platform-browser-dynamic@4.3.3 @angular/router@4.3.3

RUN npm install -g typescript@2.4.2

RUN npm install -g json-server

COPY . .

RUN npm install

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0", "--disable-host-check"]