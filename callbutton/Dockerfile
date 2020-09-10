FROM node

RUN apt-get update && apt-get upgrade -y

WORKDIR /usr/local/src/app

COPY package*.json ./

RUN npm install --production

RUN npm install -g pm2

COPY . .

EXPOSE 8000

CMD ["pm2-runtime", "app.js"]

# docker build -t gada121982/gcallshackathon:latest .
# docker run -d -p 8000:8000 gada121982/gcallshackathon:latest