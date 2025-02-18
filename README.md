# React + Vite
# Webowy System Mikroserwisowy - React, Express, Docker, Kubernetes

## Opis:

Aplikacja webowa oparta na mikroserwisach z front-endem w **React.js** i back-endem w **Express.js**. Aplikacja jest konteneryzowana przy użyciu **Docker** i wdrażana w środowisku **Kubernetes**.

## Technologie:

- **React.js** - Front-end
- **Express.js** - Back-end
- **Docker** - Konteneryzacja
- **Kubernetes** - Orkiestracja

## Jak Uruchomić:

1. Zainstaluj **Docker** i **Kubernetes**.
2. Zbuduj obrazy Docker:  
  docker build -t backend:latest ./backend 
  docker build -t frameworki_frontendowe:latest .
3. (frontend)
  npm install
  npm run dev / lub npm run build    npm run start
4. (backend)
  npm install
  node server.js
**(komendy wpisujesz w folderach od danego projektu czyli front - główny , backend folder "backend")**