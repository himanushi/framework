FROM mcr.microsoft.com/playwright:v1.50.0-noble

ENV LANG=C.UTF-8;

RUN apt-get update && apt-get install git; npm install -g npm@10.5.0; npx playwright install;

ENV APP_HOME=/components

ADD . ${APP_HOME}
WORKDIR $APP_HOME

RUN npm install;

EXPOSE 7080

CMD ["npm", "run", "dev"]