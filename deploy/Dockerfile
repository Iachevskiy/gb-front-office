FROM node:latest AS builder
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Копируем исходники Vue и билдим проект
COPY . .

# Передаём ENV переменную при билде
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

RUN npm run build

# 🔹 2. Этап с Nginx для раздачи готового фронта
FROM nginx:latest
COPY /deploy/nginx.conf /etc/nginx/nginx.conf

# Копируем файлы Vue из `dist/` в корневую папку Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
