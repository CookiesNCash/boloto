# boloto

1. make install 

2. cd server/.env
DATABASE_URL="postgresql://postgres:123@localhost:5434/test?schema=public"
JWT_ACCESS_SECRET='test'

NEST_PORT=3001
SOCKET_PORT=80

// postgresql://postgres:mypassword@localhost:myLocalhost/mydb?schema=sample
// https://www.prisma.io/docs/orm/reference/connection-urls

3. cd client/.env
NEXT_PUBLIC_HOST_URL=http://localhost:3000

4. make migrarte

5. make build

6. make start   

7. open http://localhost:3001/
