# Bước 1: Dùng image node để xây dựng ứng dụng
FROM node:18 AS build

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Copy package.json và package-lock.json vào container
COPY package.json package-lock.json ./

# Cài đặt các phụ thuộc
RUN npm install

# Copy toàn bộ mã nguồn vào container
COPY . .

# Xây dựng ứng dụng với Vite (build cho SSR)
RUN npm run build

# Bước 2: Dùng image node để chạy ứng dụng SSR
FROM node:18 AS production

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Copy từ bước build vào bước production
COPY --from=build /app/dist /app/dist
COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/package-lock.json /app/package-lock.json

# Copy tệp server.js từ thư mục src vào container
COPY --from=build /app/src/server.js /app/src/server.js

# Cài đặt các phụ thuộc production
RUN npm install --only=production

# Mở port mà ứng dụng sẽ chạy
EXPOSE 3000

# Chạy ứng dụng SSR
CMD ["node", "src/server.js"]