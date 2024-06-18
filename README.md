# boloto

1. 
```make install ```

2. ```cd server && touch .env```

Добавит в server/.env
```
DATABASE_URL="postgresql://postgres:myPassword@localhost:myLocalhost/myDB?schema=public"
JWT_ACCESS_SECRET='test'

NEST_PORT=3001
SOCKET_PORT=80
```

```
// Пример: DATABASE_URL="postgresql://postgres:123@localhost:5434/test?schema=public"
// https://www.prisma.io/docs/orm/reference/connection-urls
```

3. ```cd ../client && touch .env```

Добавит в client/.env

```
NEXT_PUBLIC_HOST_URL=http://localhost:3000
```


4. ```cd .. && make migrate```

5. ```make build```

6. ```make start ```  

7. open http://localhost:3000/
