# Użyj lekkiego obrazu Node.js
FROM node:20-alpine

# Ustaw katalog roboczy
WORKDIR /app

# Kopiuj pliki `package.json` i `package-lock.json`
COPY package*.json ./

# Instaluj zależności
RUN npm install

# Kopiuj resztę plików do obrazu
COPY . .

# Eksponuj port aplikacji
EXPOSE 3000

# Uruchom aplikację
CMD ["npm", "start"]
