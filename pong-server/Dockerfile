FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --no-audit 

COPY . .

RUN npx prisma generate

RUN npm run build

EXPOSE 3000

CMD ["sh", "start.sh"]
