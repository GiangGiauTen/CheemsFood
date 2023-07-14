## Hướng dẫn cài đặt

## Cài đặt các package

```bash
$ npm install
```

## Cài đặt postgreSQL và pgAdmin4

- [PostgreSQL](https://www.postgresql.org/)

- [pgAdmin4](https://www.pgadmin.org/)

## Khởi tạo database

Vào terminal gõ

```bash
psql postgres postgres
```

Nhập mật khẩu postgresql cho tài khoản postgres đã cài đặt ở bước trên.

Trong giao psql env gõ

```
\i ./resource/database_init.sql

exit
```

Sau đó tại terminal gõ

```bash
npx prisma migrate dev
```

## Chạy app

Chạy trong watch mode

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
