FROM node:latest
WORKDIR /app
COPY . .
RUN npm install
RUN npm rebuild sqlite3
EXPOSE 3000
CMD ["npm", "start"]
