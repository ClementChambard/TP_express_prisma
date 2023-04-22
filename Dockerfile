FROM node:20
RUN mkdir /App
ADD tsconfig.json tsconfig.build.json yarn.lock package.json /App/
WORKDIR /App
RUN mkdir src
ADD src/ src/
ENV DATABASE_URL=file:../../../db.development.sqlite
RUN yarn install
RUN yarn db:generate
RUN yarn db:migrate
RUN yarn build
CMD node dist/main.js
